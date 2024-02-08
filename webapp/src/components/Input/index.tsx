import cn from 'classnames'
import css from './index.module.scss'

export const Input = ({
  name,
  label,
  state,
  setState,
}: {
  name: string
  label: string
  state: Record<string, any>
  setState: React.Dispatch<React.SetStateAction<any>>
}) => {
  return (
    <div className={cn({ [css.field]: true })}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setState({ ...state, [name]: e.target.value })
        }}
        value={state[name]}
        name={name}
        id={name}
      />
    </div>
  )
}
