import { useParams } from 'react-router-dom'
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

  return (
    <div>
      <h1>{data.idea?.nick}</h1>
      <p>{data.idea?.description}</p>
    </div>
  )
}
