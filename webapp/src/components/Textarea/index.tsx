import cn from 'classnames'
import { type FormikProps } from 'formik'
import css from './index.module.scss'

export const Textarea = ({ name, label, formik }: { name: string; label: string; formik: FormikProps<any> }) => {
  const { values, setFieldValue, isSubmitting } = formik
  const error = formik.errors[name] as string | undefined
  const isSubmiting = formik.isSubmitting
  const invalid = !!formik.touched[name] && !!error
  return (
    <div className={cn({ [css.field]: true, [css.disabled]: isSubmiting })}>
      <label className={css.label} htmlFor={name}>
        {label}
      </label>
      <br />
      <textarea
        onChange={(e) => {
          void setFieldValue(name, e.target.value)
        }}
        className={cn({
          [css.input]: true,
          [css.invalid]: invalid,
        })}
        value={values[name]}
        name={name}
        id={name}
        disabled={isSubmitting}
      />
      {invalid && <div className={css.error}>{error}</div>}
    </div>
  )
}
