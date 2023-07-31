import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello there!!</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate beatae eos voluptates veritatis corporis quae, corrupti hic dolorum inventore. Debitis incidunt cum ipsa dolor, voluptatem consequatur aperiam aspernatur voluptates corrupti.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate beatae eos voluptates veritatis corporis quae, corrupti hic dolorum inventore. Debitis incidunt cum ipsa dolor, voluptatem consequatur aperiam aspernatur voluptates corrupti.</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate beatae eos voluptates veritatis corporis quae, corrupti hic dolorum inventore. Debitis incidunt cum ipsa dolor, voluptatem consequatur aperiam aspernatur voluptates corrupti.</p>
      <Footer />
    </div>
    )
}
