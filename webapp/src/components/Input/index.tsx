import cn from 'classnames'
import { type FormikProps } from 'formik'
import css from './index.module.scss'

export const Input = ({ name, label, formik }: { name: string; label: string; formik: FormikProps<any> }) => {
  const { values, setFieldValue } = formik

  return (
    <div className={cn({ [css.field]: true })}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          void setFieldValue(name, e.target.value)
        }}
        value={values[name]}
        name={name}
        id={name}
      />
    </div>
  )
}
