import { styled } from 'styled-components'

export const FieldEditorWrapper = styled.div`
  
  &:not(.array, .object) {
    display: flex;
  }
  
  input {
    display: block;
    flex: 1;
  }
`

