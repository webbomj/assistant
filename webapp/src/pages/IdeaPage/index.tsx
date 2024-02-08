import { useParams } from 'react-router-dom'
import { Segment } from '../../components/Segment'
import { type ViewIdeaRouteParams } from '../../lib/routes'
import { trpc } from '../../lib/trpc'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams

  const { data, error, isFetching, isLoading, isError } = trpc.getIdea.useQuery({ ideaNick })

  if (isFetching || isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return <Segment title={data.idea?.nick} description={data.idea?.description}></Segment>
}
