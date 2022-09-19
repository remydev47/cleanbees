import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>CleanBees</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <h1>CleanBees</h1>
    </div>
  )
}

export default Home
