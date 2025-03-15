import { styled } from 'styled-components'

export const Container = styled.div`
  padding-left: 1rem;
  border-left: 2px solid var(--light-2);
`

export const EntryWrapper = styled.div`
  position: relative;
  margin: .5em 0;

  .remove-button {
    position: absolute;
  }
`

export const KeyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .2rem;
  border: transparent 1px solid;

  &:hover {
    border: 1px solid var(--light-3);
  }
`

export const Key = styled.div`
  font-size: 10pt;
  font-weight: bold;
  display: block;
`