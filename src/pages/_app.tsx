import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Navbar from '@/components/navbar/Navbar'
import RegisterModal from '@/components/modals/RegisterModal'
import ToasterProvider from '@/provider/ToasterProvider'
import LoginModal from '@/components/modals/LoinModal'
import UserRentModal from '@/components/modals/UserRentModal'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <RegisterModal/>
      <UserRentModal/>
      <LoginModal/>
      <ToasterProvider/>
      <Component {...pageProps} />
    </Fragment>
  )
}