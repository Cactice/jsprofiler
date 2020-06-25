import Head from 'next/head'
import bulma from './bulma.scss'
import { Navbar } from './navbar/navbar'

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>JS Profiler </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    <main>
      <section className="woman-hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-one-fifth is-narrow">
                <figure className="image is-128x128">
                  <img src="logos/logo_best.png" />
                </figure>
              </div>
              <div className="column">
                <h1 className="title">JS profiler</h1>
                <h2 className="subtitle">Analyze your code, line by line</h2>
              </div>
              <figure className="image" style={{ mixBlendMode: 'multiply' }}>
                <img src="random_woman.jpg" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <a
        href="https://www.cactice.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by cactice
      </a>
    </footer>

    <style jsx>{bulma}</style>
  </div>
)

export default Home
