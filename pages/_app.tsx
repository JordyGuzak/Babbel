import '../styles/global.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='theme-container background'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
