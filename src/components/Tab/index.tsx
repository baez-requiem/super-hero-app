import { useTab } from "./hooks/useTab"
import { TabContainer, LabelsContainer, LabelsTitle, StyledSelect } from "./styles"

type TabDataProps = {
  label: string
  value: string | number
  content: React.ReactNode
}

const Tab = ({ data }: { data: TabDataProps[] }) => {

  const {
    selected,
    setSelected
  } = useTab(data)

  return (
    <TabContainer>
      <LabelsContainer>
      {data.map(e => (
        <LabelsTitle key={`tab_lt_${e.value}`} active={e.value === selected} onClick={() => setSelected(e.value)}>{e.label}</LabelsTitle>
      ))}

      <StyledSelect onChange={({ currentTarget }) => setSelected(currentTarget.value)} value={selected}>
        {data.map(e => (
          <option key={`tab_opt_${e.value}`} value={e.value}>{e.label}</option>
        ))}
      </StyledSelect>

      </LabelsContainer>
        {data.map((e, i) => (
          <div key={`tab_ct_${i}`}>
            {e.value === selected && e.content}
          </div>
        ))}
    </TabContainer>
  )
}

export default Tab