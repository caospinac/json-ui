import { MouseEventHandler } from 'react'
import { Wrapper } from './AddButton.styles'

interface Props {
  children: React.ReactNode
  onClick?: MouseEventHandler | undefined
}

const AddButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {children}
    </Wrapper>
  )
}

export default AddButton
