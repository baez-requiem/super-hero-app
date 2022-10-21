import { Container, InfoRow, Progress } from "./styles"

type AppearanceDataProps = {
  gender: string
  race: string
  height: string[],
  weight: string[],
  "eye-color": string
  "hair-color": string
}

const Appearance = ({ data }: { data:AppearanceDataProps|undefined }) => (
  <Container>
    <InfoRow>
      <h3>Gender:</h3>
      <h3>{data ? data.gender: '-'}</h3>
    </InfoRow>
    <InfoRow>
      <h3>Race:</h3>
      <h3>{data ? data.race : '-'}</h3>
    </InfoRow>
    <InfoRow>
      <h3>Height:</h3>
      <h3>{data?.height?.length ? data.height.join(' | ') : '-'}</h3>
    </InfoRow>
    <InfoRow>
      <h3>Weight:</h3>
      <h3>{data?.weight?.length ? data.weight.join(' | ') : '-'}</h3>
    </InfoRow>
    <InfoRow>
      <h3>Eye Color:</h3>
      <h3>{data ? data['eye-color'] : '-'}</h3>
    </InfoRow>
    <InfoRow>
      <h3>Hair color:</h3>
      <h3>{data ? data['hair-color'] : '-'}</h3>
    </InfoRow>
  </Container>
)


export default Appearance