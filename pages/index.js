import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>The Shadow of the Silent Blades</h1>
        <p className={styles.text}>In a remote village nestled between towering mountains and lush forests, a secret clan of ninjas thrived in the shadows. Their skills were legendary, passed down from generation to generation, each member mastering the art of stealth, combat, and the ways of the silent blades.</p>
        <p className={styles.text}>Among them, there was a young ninja named Hiro. Since childhood, he had dreamed of becoming a skilled ninja like his father, who had been one of the clan&rsquo;s greatest warriors. But Hiro faced a daunting challenge; he was born without the ability to hear. Many thought his disability would hinder his progress, but Hiro&rsquo;s determination burned brighter than the fiercest fire.</p>
        <p className={styles.text}>Under the watchful eye of his wise master, Sensei Takeshi, Hiro trained tirelessly. He learned to rely on his other senses, honing his instincts and becoming attuned to the subtlest vibrations in the air. In the moonlit nights, he would practice his moves until they became a mesmerizing dance of grace and precision.</p>
        <p className={styles.text}>As Hiro grew, he faced both internal and external struggles. The path of a ninja was treacherous, and dark forces threatened their village. Among the shadows, an envious rival clan plotted to steal the ancient secrets held by Hiro&rsquo;s clan. But Hiro remained steadfast, his spirit unyielding.</p>
        <p className={styles.text}>One fateful day, when the cherry blossoms painted the village in a sea of pink, Sensei Takeshi summoned Hiro. &ldquo;The time has come, my pupil,&rdquo; he said in a hushed voice. &ldquo;The trials await you to prove your worthiness as a true ninja.&rdquo;</p>
        <p className={styles.text}>Hiro&rsquo;s heart raced with anticipation and anxiety as he embarked on a series of challenges. Each test pushed his physical and mental limits, and he encountered illusions that tested his resolve and determination. But with sheer determination and the memory of his father&rsquo;s legacy in his heart, Hiro overcame each trial, proving himself as a worthy heir to the silent blades.</p>
        <p className={styles.text}>But the greatest challenge still awaited him &ndash; a duel with the rival clan&rsquo;s deadliest assassin, Akira. Hiro knew that this battle would define his destiny. The night of the duel arrived, and under the cover of darkness, the two adversaries faced each other.</p>
        <p className={styles.text}>Though Hiro could not hear the clash of swords, his senses guided him. He moved with the wind, swift and deadly. His silent blades sang a song of their own as they danced through the air, and the moon bore witness to a spectacle of breathtaking skill and tenacity.</p>
        <p className={styles.text}>In the end, it was Hiro&rsquo;s unwavering spirit that prevailed. He disarmed Akira, sparing his life with a rare display of mercy, and delivering a message of unity among the clans.</p>
        <p className={styles.text}>Word of Hiro&rsquo;s valor spread like wildfire, and even those who once doubted him now revered him as a legend. He became a symbol of strength, a testament to the power of perseverance and the unity of hearts.</p>
        <p className={styles.text}>Hiro continued to protect his village and keep the secrets of the silent blades. As he trained the next generation of ninjas, he reminded them that true strength lay not in physical prowess alone but in the courage to face their fears and overcome the obstacles that life throws their way.</p>
        <p className={styles.text}>And so, the legend of Hiro, the silent blade, lived on through the ages, a beacon of hope for all who dared to dream and believe that the power of the heart could overcome any darkness. The village stood strong, guarded by the shadows of its silent protectors, ensuring peace and harmony for generations to come.</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
  );
}
