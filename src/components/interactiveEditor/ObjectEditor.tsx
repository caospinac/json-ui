import React from 'react'
import { JSONValue } from '../../utils/jsonUtils'
import FieldEditor from './FieldEditor'
import { Container, EntryWrapper, Key, KeyWrapper } from './ObjectEditor.styles'
import FaIcon from '../common/FaIcon'
import AddButton from '../common/AddButton'
import RemoveButton from '../common/RemoveButton'

interface ObjectEditorProps {
  value: JSONValue;
  onChange: (val: JSONValue) => void;
}

const ObjectEditor: React.FC<ObjectEditorProps> = ({ value, onChange }) => {
  if (value.type !== 'object') return null

  const handleAddField = () => {
    const newKey = 'key_' + Math.floor(Math.random() * 1000)
    onChange({
      ...value,
      value: { ...value.value, [newKey]: { type: 'string', value: '' } },
    })
  }

  const handleRemoveField = (key: string) => {
    const { [key]: _, ...rest } = value.value
    onChange({ ...value, value: rest })
  }

  const handleValueChange = (key: string, newVal: JSONValue) => {
    onChange({ ...value, value: { ...value.value, [key]: newVal } })
  }

  return (
    <Container>
      <AddButton onClick={handleAddField}><FaIcon name="plus" /> Add field</AddButton>
      {Object.entries(value.value).map(([key, val]) => (
        <EntryWrapper key={key}>
          <KeyWrapper>
            <Key>{key}</Key>
            <RemoveButton onClick={() => handleRemoveField(key)} />
          </KeyWrapper>
          <FieldEditor
            fieldValue={val}
            onChange={(newVal) => handleValueChange(key, newVal)}
          />
        </EntryWrapper>
      ))}
    </Container>
  )
}

export default ObjectEditor
