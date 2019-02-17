import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <main role="main">
          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">Watch and Play</h1>
              <p className="lead text-muted">Videos to watch and learn how to play together</p>
              <p>
                <a className="btn btn-primary mx-2" href="/videos/fingerplays">
                  Watch
                </a>
              </p>
            </div>
          </section>
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="card mb-4 shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail">
                      <title>Placeholder</title>
                      <rect fill="#55595c" width="100%" height="100%" />
                      <text fill="#eceeef" dy=".3em" x="50%" y="50%">
                        Your Art Here
                      </text>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">Fingerplays</h5>
                      <p className="card-text">Watch Kathy Reid-Naiman teach us about fingerplays</p>
                      <a className="btn btn-secondary" href="#" role="button">
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card mb-4 shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail">
                      <title>Placeholder</title>
                      <rect fill="#55595c" width="100%" height="100%" />
                      <text fill="#eceeef" dy=".3em" x="50%" y="50%">
                        Your Art Here
                      </text>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">Mr Bear Says Hello</h5>
                      <p className="card-text">
                        Sing and Learn with Sally Jaegar's action songs for toddlers and infants
                      </p>
                      <a className="btn btn-secondary" href="/videos/mrbear" role="button">
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail">
                      <title>Placeholder</title>
                      <rect fill="#55595c" width="100%" height="100%" />
                      <text fill="#eceeef" dy=".3em" x="50%" y="50%">
                        Your Art Here
                      </text>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">Things with Strings</h5>
                      <p className="card-text">Learn about instruments with Cathy Fink and Marcy Marxer</p>
                      <a className="btn btn-secondary" href="/videos/strings" role="button">
                        Watch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}
