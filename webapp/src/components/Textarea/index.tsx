import cn from 'classnames'
import { type FormikProps } from 'formik'
import css from './index.module.scss'

export const Textarea = ({ name, label, formik }: { name: string; label: string; formik: FormikProps<any> }) => {
  const { values, setFieldValue } = formik
  return (
    <div className={cn({ [css.field]: true })} style={{ marginBottom: 10 }}>
      <label htmlFor={name}>{label}</label>
      <br />
      <textarea
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
