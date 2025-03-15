import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: sticky;
  top: 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: .2rem;
`

export const AcceptButton = styled.a`
  border: none;
  color: var(--dark);
  width: 200px;
  border-radius: .7rem;
  padding: .5rem;
  font-size: 16pt;
  
  &.active {
    background-color: var(--primary);
  }
`
