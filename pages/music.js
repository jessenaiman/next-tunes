import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Sing along with the Kids Monthly Playlist</h1>
            <p className="lead text-muted">
              Songs should be fun and challenging as we grow, and they should be pleasant enough so that both the parent
              and child can enjoy together.*
            </p>
            <p>
              <a
                className="btn btn-primary mx-2"
                href="https://open.spotify.com/user/jessenaiman/playlist/7tjgNTSkk8MfhUJEqLBRFU?si=o_6R8KzfSuWNRFcmjc6w9A"
                target="_blank">
                Listen
              </a>
            </p>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="h3 lead">Songs for the very young</div>
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
                    <h5 className="card-title">Early Childhood Music</h5>
                    <p className="card-text">Songs to sing with infants and toddlers the classics, and some new ones</p>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <a
                        className="card-link"
                        href="https://open.spotify.com/user/jessenaiman/playlist/7zmGexvF68LLhvPdBlM26r?si=U7mQXPEdRRS3otvGm-7Pzw"
                        target="_blank">
                        Spotify
                      </a>
                      <a
                        className="card-link"
                        href="https://www.youtube.com/playlist?list=PLg9e8HzshxGTcppVLhrPGVuGWgPFJxDRg"
                        target="_blank">
                        YouTube
                      </a>
                    </div>
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
                    <h5 className="card-title">Counting Songs</h5>
                    <p className="card-text">Early childhood counting songs for toddlers and infants</p>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <a
                        className="card-link"
                        href="https://open.spotify.com/user/jessenaiman/playlist/48DNZbQzuvMsl4QrsDfnrh?si=Hud7FiZNQ8KydvjQC64FPw"
                        target="_blank">
                        Spotify
                      </a>
                      <a
                        className="card-link"
                        href="https://www.youtube.com/playlist?list=PLg9e8HzshxGSIP25HcrnU6k8YaoDa_6v2"
                        target="_blank">
                        YouTube
                      </a>
                    </div>
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
                    <h5 className="card-title">Circle Time</h5>
                    <p className="card-text">Songs, fingerplays, and bounces for infants and toddlers</p>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <a
                        className="card-link"
                        href="https://open.spotify.com/user/jessenaiman/playlist/7tjgNTSkk8MfhUJEqLBRFU?si=edQnNzirS3emZvgAg5I83g"
                        target="_blank">
                        Spotify
                      </a>
                      <a
                        className="card-link"
                        href="https://www.youtube.com/playlist?list=PLg9e8HzshxGTZXKWApQ1LLC8oF11OGT5e"
                        target="_blank">
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
