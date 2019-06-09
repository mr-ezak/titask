import styled from "styled-components"
import { Header } from "./Header"

const Layout = props => (
  <wrapper>
    <Header />
    {props.children}{" "}
  </wrapper>
)

export default Layout

const wrapper = styled.div`
  overflow: hidden;
`
