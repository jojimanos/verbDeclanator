import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {


  const presentDeclension = (verb) => {
    let declension = ""
    verb.match(/.ω$/) ? declension = "thematic" : declension = "athematic";
    console.log(declension);
    if (declension = "thematic") {
      const stem = verb.slice(0, -1)
      const present = `${stem + "ω"}, ${stem + "εις"}, ${stem + "ει"}, 
      ${stem + "ομεν"}, ${stem + "ετε"}, ${stem + "ουσιν"}`
      return present
    }
  }

  const [verb, setVerb] = useState("")

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Smart Verb Declenator
        </h1>
        <form>
          <fieldset>
            <input type="text" onChange={(e) => setVerb(e.target.value)} value={verb} />
            <div>
              <input id='thematic' type="radio" name="declension" checked />
              <label for='thematic'>Thematic Declension</label>
              <input id='athematic' type="radio" name="declension" />
              <label for='athematic'>Athematic Declension</label>
            </div>
            <button>Submit</button>
          </fieldset>
        </form>
        <div>{presentDeclension(verb)}</div>
      </main>
    </div>
  )
}
