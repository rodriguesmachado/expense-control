import type { AppProps } from 'next/app';
import { GlobalStyles } from "../styles/globalStyles";
import { AllProviders } from "@context/providers";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AllProviders>
      <Component {...pageProps} />
      <GlobalStyles />
    </AllProviders>
  )
}

export default MyApp
