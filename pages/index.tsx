import Head from 'next/head'
import Homepage from './homepage'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PageLayout from '../components/layout'

export default function Home() {
  return (
    <PageLayout>
      <Homepage />
    </PageLayout>
  )
}
