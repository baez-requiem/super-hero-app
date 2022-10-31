import { Container, InfoRow } from "./styles"

type ConnectionsDataProps = {
  'group-affiliation': string
  relatives: string
}

const Connections = ({ data }: { data:ConnectionsDataProps|undefined }) => (
  <Container>
    <InfoRow>
      <h3>Group affiliation:</h3>
      <h3>{data ? data['group-affiliation'] : '-'}</h3>
    </InfoRow>
    <InfoRow>
      <h3>Relatives:</h3>
      <h3>{data ? data.relatives : '-'}</h3>
    </InfoRow>
  </Container>
)


export default Connections