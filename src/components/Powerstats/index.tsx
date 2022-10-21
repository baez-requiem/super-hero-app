import { GiBrain, GiMuscleUp, GiRunningShoe, GiShield, GiThunderBlade, GiAura } from 'react-icons/gi'
import { Container, InfoRow, Progress } from "./styles"

type PowerstatsDataProps = {
  intelligence: string
  strength: string
  speed: string
  durability: string
  power: string
  combat: string
}

const Powerstats = ({ data }: { data:PowerstatsDataProps|undefined }) => {

  return (
    <Container>
      <InfoRow>
        <GiBrain />
        <h3>Intelligence</h3>
        <Progress value={parseInt(data?.intelligence || '0') || 0} />
      </InfoRow>
      <InfoRow>
        <GiMuscleUp />
        <h3>Strength</h3>
        <Progress value={parseInt(data?.strength || '0') || 0} />
      </InfoRow>
      <InfoRow>
        <GiRunningShoe />
        <h3>Speed</h3>
        <Progress value={parseInt(data?.speed || '0') || 0} />
      </InfoRow>
      <InfoRow>
        <GiShield />
        <h3>Durability</h3>
        <Progress value={parseInt(data?.durability || '0') || 0} />
      </InfoRow>
      <InfoRow>
        <GiAura />
        <h3>Power</h3>
        <Progress value={parseInt(data?.power || '0') || 0} />
      </InfoRow>
      <InfoRow>
        <GiThunderBlade />
        <h3>Combat</h3>
        <Progress value={parseInt(data?.combat || '0') || 0} />
      </InfoRow>
    </Container>
  )
}

export default Powerstats