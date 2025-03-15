// utils/jsonUtils.ts

export type JSONType = 'string' | 'number' | 'boolean' | 'null' | 'object' | 'array';

export type JSONValue =
  | { type: 'string'; value: string }
  | { type: 'number'; value: number }
  | { type: 'boolean'; value: boolean }
  | { type: 'null'; value: null }
  | { type: 'object'; value: Record<string, JSONValue> }
  | { type: 'array'; value: JSONValue[] };

/**
 * Converts a plain JS value into a typed JSONValue.
 */
export function convertToTypedValue(input: unknown): JSONValue {
  if (input === null) return { type: 'null', value: null }
  if (Array.isArray(input))
    return { type: 'array', value: input.map(convertToTypedValue) }
  if (typeof input === 'object') {
    const objValue: Record<string, JSONValue> = {}
    Object.keys(input as object).forEach((key) => {
      objValue[key] = convertToTypedValue((input as Record<string, unknown>)[key])
    })
    return { type: 'object', value: objValue }
  }
  if (typeof input === 'string') return { type: 'string', value: input }
  if (typeof input === 'number') return { type: 'number', value: input }
  if (typeof input === 'boolean') return { type: 'boolean', value: input }

  return { type: 'string', value: String(input) }
}

/**
 * Converts a typed JSONValue back to a plain JS value.
 */
export function convertFromTypedValue(jsonValue: JSONValue): unknown {
  if (
    jsonValue.type === 'string' ||
    jsonValue.type === 'number' ||
    jsonValue.type === 'boolean' ||
    jsonValue.type === 'null'
  ) {
    return jsonValue.value
  }
  if (jsonValue.type === 'object') {
    const result: Record<string, unknown> = {}
    Object.keys(jsonValue.value).forEach((key) => {
      result[key] = convertFromTypedValue(jsonValue.value[key])
    })
    return result
  }
  // type === 'array'
  return jsonValue.value.map(convertFromTypedValue)
}

/**
 * Returns a default JSONValue for the given type.
 */
export function getDefaultValue(type: JSONType): JSONValue {
  if (type === 'string') return { type: 'string', value: '' }
  if (type === 'number') return { type: 'number', value: 0 }
  if (type === 'boolean') return { type: 'boolean', value: false }
  if (type === 'null') return { type: 'null', value: null }
  if (type === 'object') return { type: 'object', value: {} }
  // type === 'array'
  return { type: 'array', value: [] }
}
