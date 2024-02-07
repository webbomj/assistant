import { useParams } from 'react-router-dom'
import { type ViewIdeaRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trpc'
import css from './index.module.scss'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams

  const { data, error, isFetching, isLoading, isError } = trpc.getIdea.useQuery({ ideaNick })

  if (isFetching || isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <h1 className={css.title}>{data.idea?.nick}</h1>
      <p className={css.description}>{data.idea?.description}</p>
    </div>
  )
}
