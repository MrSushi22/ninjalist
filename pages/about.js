import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>Fun facts about Ninjas</h1>
        <p>Why did the ninja become a chef?<br />
          Because he was an expert at slicing and dicing!</p>
        <p>Why did the ninja break up with his girlfriend?<br />
          He felt like she was "throwing stars" at his heart!</p>
      </div>
    </>
   );
}

export default About;
