import { zSingUpTrpcInput } from '@assistant/backend/src/router/signUp/input'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import z from 'zod'
import { Alert } from '../../components/Alert'
import { Button } from '../../components/Button'
import { FormItems } from '../../components/FormItems'
import { Input } from '../../components/Input'
import { Segment } from '../../components/Segment'
import { useForm } from '../../lib/form'
import { withPageWrapper } from '../../lib/pageWrapper'
import { getAllIdeasRoute } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

export const SignUpPage = withPageWrapper({ redirectAuthorized: true })(() => {
  const navigate = useNavigate()
  const trpcUtils = trpc.useUtils()
  const signUp = trpc.signUp.useMutation()

  const { formik, buttonProps, alertProps } = useForm({
    initialValues: {
      nick: '',
      password: '',
      passwordAgain: '',
    },
    validationSchema: zSingUpTrpcInput
      .extend({
        passwordAgain: z.string().min(1),
      })
      .superRefine((val, ctx) => {
        if (val.password !== val.passwordAgain) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Passwords must be the same',
            path: ['passwordAgain'],
          })
        }
      }),
    onSubmit: async (values) => {
      const { token } = await signUp.mutateAsync(values)
      Cookies.set('token', token, { expires: 90000 })
      void trpcUtils.invalidate()
      navigate(getAllIdeasRoute())
    },
    resetOnSuccess: false,
  })

  return (
    <Segment title="Sign Up">
      <form onSubmit={formik.handleSubmit}>
        <FormItems>
          <Input label="Nick" name="nick" formik={formik} />
          <Input label="Password" name="password" type="password" formik={formik} />
          <Input label="Password again" name="passwordAgain" type="password" formik={formik} />
          <Alert {...alertProps} />
          <Button {...buttonProps}>Sign Up</Button>
        </FormItems>
      </form>
    </Segment>
  )
})
