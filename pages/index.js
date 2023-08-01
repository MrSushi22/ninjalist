import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Hello there!!</h1>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate beatae eos voluptates veritatis corporis quae, corrupti hic dolorum inventore. Debitis incidunt cum ipsa dolor, voluptatem consequatur aperiam aspernatur voluptates corrupti.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate beatae eos voluptates veritatis corporis quae, corrupti hic dolorum inventore. Debitis incidunt cum ipsa dolor, voluptatem consequatur aperiam aspernatur voluptates corrupti.</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate beatae eos voluptates veritatis corporis quae, corrupti hic dolorum inventore. Debitis incidunt cum ipsa dolor, voluptatem consequatur aperiam aspernatur voluptates corrupti.</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
    )
}
