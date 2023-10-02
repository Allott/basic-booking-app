import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
