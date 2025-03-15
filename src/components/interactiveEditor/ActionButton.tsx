import styled from 'styled-components'

export const Wrapper = styled.a`
  display: grid;
  place-items: center; 
  width: 2em;
  height: 2em;
  color: var(--dark);
  border-radius: 50%;
  font-size: 12pt;
  background-color: var(--primary);
`


const AddButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default AddButton
