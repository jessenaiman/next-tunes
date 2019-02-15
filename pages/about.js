import Layout from '../components/layout.js'

export default () => (
  <Layout>
    <section>
      <div>
        <h1>Welcome</h1>
        <p class="lead">
          Tickles and Tunes should feel like a comfortable gathering space for families and educators. We're going to
          share and learn new things together! As little ones discover their fingers and toes, and the world around
          them, we can encourage development by singing and celebrating along the way.
        </p>
        <p class="lead">
          This will be a safe, nurturing place where we try our best to use positive words. No matter who you are or
          where you're from, feel free to shake your sillies out for as long as you want!
        </p>
        <p class="lead">
          Please find something here to love, and then share something you love back. We're going to plant some seeds
          and watch them grow.
        </p>
      </div>
    </section>
    <style jsx>
      {`
        section {
          height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}
    </style>
  </Layout>
)
