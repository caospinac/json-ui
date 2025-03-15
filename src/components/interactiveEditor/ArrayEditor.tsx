import React from 'react'
import { getDefaultValue, JSONValue } from '../../utils/jsonUtils'
import FieldEditor from './FieldEditor'
import AddButton from '../common/AddButton'
import FaIcon from '../common/FaIcon'
import { Index, ItemWrapper } from './ArrayEditor.styles'
import RemoveButton from '../common/RemoveButton'

interface ArrayEditorProps {
  value: JSONValue; // Must be of type 'array'
  onChange: (val: JSONValue) => void;
}

const ArrayEditor: React.FC<ArrayEditorProps> = ({ value, onChange }) => {
  if (value.type !== 'array') return null

  const handleAddItem = () => {
    const lastType = value.value.length > 0 ? value.value[value.value.length - 1].type : 'string'
    const defaultValue = getDefaultValue(lastType)

    onChange({ ...value, value: [...value.value, defaultValue] })
  }

  const handleRemoveItem = (index: number) => {
    const newArr = [...value.value]
    newArr.splice(index, 1)
    onChange({ ...value, value: newArr })
  }

  const handleItemChange = (index: number, newVal: JSONValue) => {
    const newArr = [...value.value]
    newArr[index] = newVal
    onChange({ ...value, value: newArr })
  }

  return (
    <div style={{ paddingLeft: '1em', borderLeft: '2px solid #ccc' }}>
      {value.value.map((item, idx) => (
        <ItemWrapper key={idx}>
          <Index>{idx}</Index>
          <FieldEditor
            fieldValue={item}
            onChange={(newVal) => handleItemChange(idx, newVal)}
          />
          <RemoveButton type='minus' onClick={() => handleRemoveItem(idx)} />
        </ItemWrapper>
      ))}
      <AddButton onClick={handleAddItem}><FaIcon name="plus" /> Add item</AddButton>
    </div>
  )
}

export default ArrayEditor
