import { createContext, useState } from 'react'
import { convertFromTypedValue, convertToTypedValue, getDefaultValue, JSONValue } from '../utils/jsonUtils'

interface GlobalContextType {
  jsonValue: JSONValue
  setJSONValue: (value: JSONValue) => void
  value: unknown
  setValue: (value: unknown) => void
}

export const GlobalContext = createContext<GlobalContextType>({
  jsonValue: getDefaultValue('object'),
  value: convertFromTypedValue(getDefaultValue('object')),
  setJSONValue: (_value: JSONValue) => { },
  setValue: (_value: unknown) => { },
})

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defaultValue = getDefaultValue('object')

  const [jsonValue, setJSONValue] = useState<JSONValue>(defaultValue)
  const [value, setValue] = useState<unknown>(convertFromTypedValue(defaultValue))

  const setJSONValueHandler = (value: JSONValue) => {
    setJSONValue(value)
    setValue(convertFromTypedValue(value))
  }
  const setValueHandler = (value: unknown) => {
    setValue(value)
    setJSONValue(convertToTypedValue(value))
  }

  return (
    <GlobalContext.Provider value={{
      jsonValue, value,
      setValue: setValueHandler,
      setJSONValue: setJSONValueHandler,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
