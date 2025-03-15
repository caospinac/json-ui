import React, { useContext } from 'react'
import ObjectEditor from './ObjectEditor'
import ArrayEditor from './ArrayEditor'
import FieldEditor from './FieldEditor'
import { Container } from './InteractiveJsonEditor.styles'
import { GlobalContext } from '../../context/global'

const InteractiveJsonEditor: React.FC = () => {
  const { jsonValue, setJSONValue } = useContext(GlobalContext)

  return (
    <Container>
      {jsonValue.type === 'object' && (
        <ObjectEditor value={jsonValue} onChange={setJSONValue} />
      )}
      {jsonValue.type === 'array' && (
        <ArrayEditor value={jsonValue} onChange={setJSONValue} />
      )}
      {jsonValue.type !== 'object' && jsonValue.type !== 'array' && (
        <FieldEditor fieldValue={jsonValue} onChange={setJSONValue} />
      )}
    </Container>
  )
}

export default InteractiveJsonEditor

