import styled from 'styled-components'

export const Header = styled.div`
  grid-column: span 2;
  text-align: center;
`

export const Column = styled.div`
  overflow-y: auto;
  overflow-x: auto;
  white-space: nowrap;
  border: 1px solid var(--light-2);
`

export const RepoLink = styled.a`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 20pt;
`

