import Head from "next/head"
import styles from "../styles/styles.scss"

const Index = () => {
  return <div>
    <Head>
      <title>Weather App!</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <h1 className="index">Weather app</h1>
    </div>
}

export default Index;