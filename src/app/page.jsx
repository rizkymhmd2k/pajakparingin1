// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

import Navbar from '../components/Navbar'
import { Hero, Layanan, Phone, Map, Track } from '../sections';
import { cards } from '../constants';
// import { fetchLayanan } from '../pages/api/getLayanan';
// import { fetchGetOP } from '../pages/api/getOP';




export default async function Home() {
  // const layanan = await fetchLayanan()
  // const formulirCard1 = await fetchGetOP()
  // console.log('layanann', formulirCard1);
  return (
    <div >
      <Navbar />
      <Hero />
      <Track />
      <Layanan cards={cards} />
      <Phone />
      <Map />
    </div>
  )
}

