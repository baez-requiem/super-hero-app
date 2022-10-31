import { Container, InfoRow } from "./styles"

type BiographyDataProps = {
  "full-name": string
  "alter-egos": string
  aliases: string[]
  "place-of-birth": string
  "first-appearance": string
  publisher: string
  alignment: string
}

const Biography = ({ data }: { data:BiographyDataProps|undefined }) => {

  return (
    <Container>
      <InfoRow>
        <h3>Full name:</h3>
        <h3>{data ? data['full-name'] : '-'}</h3>
      </InfoRow>
      <InfoRow>
        <h3>Alter egos:</h3>
        <h3>{data ? data['alter-egos'] : '-'}</h3>
      </InfoRow>
      <InfoRow>
        <h3>Aliases:</h3>
        <h3>{data ? data.aliases : '-'}</h3>
      </InfoRow>
      <InfoRow>
        <h3>Place of birth:</h3>
        <h3>{data ? data['place-of-birth'] : '-'}</h3>
      </InfoRow>
      <InfoRow>
        <h3>First appearance:</h3>
        <h3>{data ? data['first-appearance'] : '-'}</h3>
      </InfoRow>
      <InfoRow>
        <h3>Publisher:</h3>
        <h3>{data ? data.publisher : '-'}</h3>
      </InfoRow>
      <InfoRow>
        <h3>Alignment:</h3>
        <h3>{data ? data.alignment : '-'}</h3>
      </InfoRow>
    </Container>
  )
}

export default Biography