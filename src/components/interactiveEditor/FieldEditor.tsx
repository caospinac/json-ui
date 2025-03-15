import React from 'react'
import { JSONType, JSONValue, getDefaultValue } from '../../utils/jsonUtils'
import ObjectEditor from './ObjectEditor'
import ArrayEditor from './ArrayEditor'
import { FieldEditorWrapper } from './FieldEditor.styles'

interface FieldEditorProps {
  fieldValue: JSONValue;
  onChange: (val: JSONValue) => void;
}

const FieldEditor: React.FC<FieldEditorProps> = ({ fieldValue, onChange }) => {
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as JSONType
    onChange(getDefaultValue(newType))
  }

  return (
    <FieldEditorWrapper className={fieldValue.type}>
      {renderEditor(fieldValue, onChange)}
      <select value={fieldValue.type} onChange={handleTypeChange}>
        <option value="string">string</option>
        <option value="number">number</option>
        <option value="boolean">boolean</option>
        <option value="null">null</option>
        <option value="object">object</option>
        <option value="array">array</option>
      </select>
    </FieldEditorWrapper>
  )
}

function renderEditor(value: JSONValue, onChange: (val: JSONValue) => void) {
  switch (value.type) {
    case 'array':
      return <ArrayEditor value={value} onChange={onChange} />

    case 'object':
      return <ObjectEditor value={value} onChange={onChange} />

    case 'string':
      return (
        <input
          type='text'
          value={value.value}
          onChange={(e) => onChange({ ...value, value: e.target.value })}
        />
      )

    case 'number':
      return (
        <input
          type="number"
          value={value.value}
          onChange={(e) =>
            onChange({ ...value, value: parseFloat(e.target.value) || 0 })
          }
        />
      )

    case 'boolean':
      return (
        <input
          type="checkbox"
          checked={value.value}
          onChange={(e) => onChange({ ...value, value: e.target.checked })}
        />
      )

    default:
      return <></>
  }
}

export default FieldEditor
