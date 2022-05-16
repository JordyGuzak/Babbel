import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global-styles'
import { StyledContainer } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ThemeProvider theme={{ mode: 'dark' }}>
      <GlobalStyles />
      <StyledContainer>
        <Component {...pageProps} />
      </StyledContainer>
  </ThemeProvider>    
)}

export default MyApp
