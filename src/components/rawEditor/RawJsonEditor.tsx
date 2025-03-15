import React, { useContext, useMemo, useState } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'

import { ButtonWrapper, Container, AcceptButton } from './RawJsonEditor.styles'
import FaIcon from '../common/FaIcon'
import Alert from '../common/Alert'
import { GlobalContext } from '../../context/global'

const RawJsonEditor: React.FC = () => {
  const { value, setValue } = useContext(GlobalContext)
  const [code, setCode] = useState('')
  const [alert, setAlert] = useState<string | null>('')

  const initialCode = useMemo(() => {
    const stringValue = JSON.stringify(value, null, 2)
    setCode(stringValue)

    return stringValue
  }, [value])

  const handleAccept = () => {
    try {
      setValue(JSON.parse(code))
    } catch (e) {
      if (e instanceof SyntaxError) {
        setAlert(e.message)
      }
    }
  }

  const changesToAccept = code !== initialCode

  return (
    <Container>
      <ButtonWrapper>
        <AcceptButton
          onClick={handleAccept}
          className={changesToAccept ? 'active' : undefined}
        >
          <FaIcon name="check" />
        </AcceptButton>
      </ButtonWrapper>
      <AceEditor
        mode="json"
        theme="github"
        value={code}
        onChange={setCode}
        fontSize={14}
        width="100%"
        height="100%"
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    {alert && <Alert message={alert} duration={3000} onClose={() => setAlert(null)} />}
    </Container>
  )
}

export default RawJsonEditor
