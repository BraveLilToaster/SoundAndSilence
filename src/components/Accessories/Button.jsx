import React from 'react'
import styled from 'styled-components'

const Button = props => {

  return (
    <StyledButton>
      {props.text}
    </StyledButton>
  )

}

export default Button

const StyledButton = styled.button`
  font-size: 1.6rem;
  padding: 1rem 2rem;
  background: red;
  border: none;
  color: #fff;
  font-weight: bold;
`
