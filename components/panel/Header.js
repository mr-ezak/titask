import react, { Component } from "react"
import styled from "styled-components"

export class Header extends Component {
  state = {}

  render = () => (
    <>
      <StyledHeader>
        <p align="center">This would be our dashboard</p>
      </StyledHeader>
    </>
  )
}

/* - - - Page Components - - - */

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #333;
  line-height: 50px;
  text-align: center;
  p {
    margin: 0;
    color: white;
  }
`
