import { ElementStyles, GlobalColors, GlobalStyles, MainContainer } from './Layout.styles'

export const Layout: React.FC<{
  children: React.ReactNode,
}> = ({
  children = null,
}) => {
    return (
      <>
        <GlobalColors />
        <GlobalStyles />
        <ElementStyles />
        <MainContainer>
          {children}
        </MainContainer>
      </>
    )
  }
