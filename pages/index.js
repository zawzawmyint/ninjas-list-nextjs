import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate ipsum debitis quia officia? Laboriosam exercitationem, id excepturi quae nesciunt, hic nobis aliquid, quidem iusto alias harum quasi voluptatem eius.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate ipsum debitis quia officia? Laboriosam exercitationem, id excepturi quae nesciunt, hic nobis aliquid, quidem iusto alias harum quasi voluptatem eius.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate ipsum debitis quia officia? Laboriosam exercitationem, id excepturi quae nesciunt, hic nobis aliquid, quidem iusto alias harum quasi voluptatem eius.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus cupiditate ipsum debitis quia officia? Laboriosam exercitationem, id excepturi quae nesciunt, hic nobis aliquid, quidem iusto alias harum quasi voluptatem eius.</p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninjas Listing
        </Link>
      </div>
    </>
  )
}
