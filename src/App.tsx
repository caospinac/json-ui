import { Layout } from './components/layout/Layout'
import { Header, Column, RepoLink } from './App.styles'
import InteractiveJsonEditor from './components/interactiveEditor/InteractiveJsonEditor'
import RawJsonEditor from './components/rawEditor/RawJsonEditor'
import { GlobalContextProvider } from './context/global'
import FaIcon from './components/common/FaIcon'

function App() {
  return (
    <Layout>
      <GlobalContextProvider>
        <Header>
          <h2>JSON UI</h2>
          <RepoLink 
            href="https://github.com/caospinac/json-ui" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaIcon name="github" />
          </RepoLink>
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
