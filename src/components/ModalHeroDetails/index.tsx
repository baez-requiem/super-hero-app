import { createPortal } from "react-dom"
import { Tab, Powerstats, Biography, Appearance, Connections } from "../"
import { useModalHeroDetails } from "./hooks/useModalHeroDetails"
import { CloseButton, Container, DataContainer, ImageContainer, Overlay } from "./styles"

import { GrFormClose } from 'react-icons/gr'
import { SyntheticEvent } from "react"

type ModalHeroDetailsProps = {
  id?: string
  show: boolean
  onClose: () => void
}

const ModalHeroDetails = ({ id, show, onClose }: ModalHeroDetailsProps) => {

  const { useHeroData } = useModalHeroDetails({id, show})

  return show ? createPortal(
    <Overlay>
      <Container>
        <CloseButton onClick={onClose}>
          <GrFormClose />
        </CloseButton>

        <ImageContainer>
          <img
            src={useHeroData?.image?.url}
            alt={useHeroData?.name}
            onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = "/no-picture-icon.webp"
            }}
          />
        </ImageContainer>

        <DataContainer>
          <h1>{useHeroData?.name}</h1>

          <div>
            <Tab data={[
              {
                label: 'POWERSTATS',
                value: 'powerstats',
                content: <Powerstats data={useHeroData?.powerstats} />
              },
              {
                label: 'BIOGRAPHY',
                value: 'biography',
                content: <Biography data={useHeroData?.biography} />
              },
              {
                label: 'APPEARANCE',
                value: 'appearance',
                content: <Appearance data={useHeroData?.appearance} />
              },
              {
                label: 'CONNECTIONS',
                value: 'connections',
                content: <Connections data={useHeroData?.connections} />
              },
            ]} />
          </div>
        </DataContainer>
      </Container>
    </Overlay>
  , document.body) : <></>
}

export default ModalHeroDetails