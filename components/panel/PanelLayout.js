import styled from "styled-components"
import { Header } from "./Header"

const PanelLayout = props => (
  <wrapper>
    <Header />
    {props.children}{" "}
  </wrapper>
)

export default PanelLayout

const wrapper = styled.div`
  overflow: hidden;
`
