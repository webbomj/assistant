import cn from 'classnames'
import { type FormikProps } from 'formik'
import css from './index.module.scss'

export const Input = ({
  name,
  label,
  formik,
  maxWidth,
}: {
  name: string
  label: string
  formik: FormikProps<any>
  maxWidth?: number
}) => {
  const { values, setFieldValue, isSubmitting } = formik
  const error = formik.errors[name] as string | undefined
  const touched = formik.touched[name]
  const invalid = !!touched && !!error

  return (
    <div className={cn({ [css.field]: true })}>
      <label htmlFor={name} className={css.label}>
        {label}
      </label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          void setFieldValue(name, e.target.value)
        }}
        className={cn({
          [css.input]: true,
          [css.invalid]: invalid,
        })}
        style={{ maxWidth }}
        value={values[name]}
        name={name}
        id={name}
        disabled={isSubmitting}
      />
      {invalid && <div className={css.error}>{error}</div>}
    </div>
  )
}
