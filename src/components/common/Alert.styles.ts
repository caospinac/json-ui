import styled from 'styled-components'

export const AlertContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: var(--red);
  color: white;
  padding: 12px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  transition: opacity 0.5s ease-in-out;
`
