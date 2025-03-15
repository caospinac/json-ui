import { MouseEventHandler } from 'react'
import { Wrapper } from './RemoveButton.styles'
import FaIcon from './FaIcon'

interface Props {
  onClick?: MouseEventHandler | undefined
  type?: 'trash' | 'times' | 'minus'
  className?: string
}

const RemoveButton: React.FC<Props> = ({ onClick, type = 'trash', className = undefined }) => {
  return (
    <Wrapper onClick={onClick} className={className}>
      <FaIcon name={type} />
    </Wrapper>
  )
}

export default RemoveButton
