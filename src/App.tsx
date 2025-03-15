import { Layout } from './components/layout/Layout'
import { Header, Column } from './App.styles'
import InteractiveJsonEditor from './components/interactiveEditor/InteractiveJsonEditor'
import RawJsonEditor from './components/rawEditor/RawJsonEditor'
import { GlobalContextProvider } from './context/global'

function App() {
  return (
    <Layout>
      <GlobalContextProvider>
        <Header>
          <h2>JSON UI</h2>
        </Header>
        <Column>
          <InteractiveJsonEditor />
        </Column>
        <Column>
          <RawJsonEditor />
        </Column>
      </GlobalContextProvider>
    </Layout>
  )
}

export default App
