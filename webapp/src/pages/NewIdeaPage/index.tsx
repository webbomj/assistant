import { useState } from 'react'
import { Input } from '../../components/Input'
import { Segment } from '../../components/Segment'
import { Textarea } from '../../components/Textarea'

export const NewIdeaPage = () => {
  const [state, setState] = useState({
    name: '',
    nick: '',
    description: '',
    text: '',
  })

  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.info('Submitted', state)
        }}
      >
        <Input label="Name" name="name" setState={setState} state={state} />
        <Input label="Nick" name="nick" setState={setState} state={state} />
        <Input label="Description" name="description" setState={setState} state={state} />
        <Textarea name="text" label="Text" setState={setState} state={state} />

        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  )
}
