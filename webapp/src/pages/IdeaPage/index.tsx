import { format } from 'date-fns'
import { useParams } from 'react-router-dom'
import { Segment } from '../../components/Segment'
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

  if (!data.idea) {
    return <div>Data not found...</div>
  }

  return (
    <Segment title={data.idea?.nick} description={data.idea.description}>
      <div className={css.createdAt}>Created At: {format(data.idea.createdAt, 'yyyy-MM-dd')}</div>
      <div className={css.text} dangerouslySetInnerHTML={{ __html: data.idea.text }} />
    </Segment>
  )
}
