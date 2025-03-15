import { styled } from 'styled-components'

export const Index = styled.span`
  width: 1em;
  text-align: center;
  align-self: center;
  font-size: 10pt;
  font-weight: bold;
  color: var(--dark-3);
`

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: .2rem;
  border: transparent 1px solid;
  gap: .4rem;

  &:hover {
    border: 1px solid var(--light-3);
  }

  ${Index} + div {
    width: 100%;

    input {
      flex: 1;
    }
  }
`