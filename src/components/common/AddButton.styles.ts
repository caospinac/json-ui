import styled from 'styled-components'

export const Wrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .4em;
  color: var(--dark);
  padding: 0 1rem;
  margin: .2rem 0;
  height: 2rem;
  font-size: 10pt;
  background-color: var(--light-2);

  &:hover {
    background-color: var(--light-3);
  }
`
