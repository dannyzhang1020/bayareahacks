import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">

      <main>
      <h1 className="title">
          HeartTrends
      </h1>

        <p className="description">
            <bold>An exploratory compilation of heart disease data visualizations and trends. Made with <code>R Studio.</code></bold>
        </p>

          <h2>
              Data compiled from the <a href = "https://www.kaggle.com/ronitf/heart-disease-uci" target = "_blank">UC Irvine Dataset on Kaggle</a>.
          </h2>

        <div className="grid">
          <a href="posts/age" className="card" target = "_blank">
            <h3>Age Distribution &rarr;</h3>
            <p>Explore the age distribution of patients.</p>
          </a>

            <a href="posts/pain" className="card" target = "_blank">
                <h3>Chest Pain Type &rarr;</h3>
                <p>Discover the type of chest pain, ranging from 0 (no pain) to 3 (severe pain).</p>
            </a>

          <a href="posts/rate" className="card" target = "_blank">
            <h3>Maximum Heart Rate Distribution &rarr;</h3>
            <p>Learn about the patients' maximum heart rate achieved.</p>
          </a>

          <a
            href="posts/blood"
            className="card"
            target = "_blank"
          >
            <h3>Resting Blood Pressure Distribution &rarr;</h3>
            <p>Find the distribution of the resting blood pressures.</p>
          </a>

          <a
            href="posts/cholestoral"
            className="card"
            target = "_blank"
          >
            <h3>Serum Cholestoral Distribution &rarr;</h3>
            <p>
              Depict the serum cholestoral graph, measured in mg/dl.
            </p>
          </a>

            <a href="posts/all" className="card" target = "_blank">
                <h3>All Plots &rarr;</h3>
                <p>Click here to see all the plots!</p>
            </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }
        
        h1 {
          color: lightblue;
        }
        
        h2 {
            color: lightblue;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
