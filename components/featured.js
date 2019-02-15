import Link from 'next/link'

const Featured = () => (
  <React.Fragment>
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" />
    <h1 className="display-4">Introducing some of our newest friends</h1>
    <p className="lead">Every week we try to feature new artists, and teachers. Listen, watch, and follow</p>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">Kathy Reid Naiman. </h2>
        <div className="text-muted">Award winning early childhood educator</div>
        <p className="lead">
          Famous early childhood educator. Watch and play together with her <a href="/fingerplays">fingerplays</a>
        </p>
        <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModalLong">
          Learn more
        </button>
      </div>
      <div className="col-md-5">
        <img className="img-fluid" src="../img/Kathy Head shot.jpg" />
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">
          Become next month's <span className="text-muted">featured artist</span>
        </h2>
        <p className="lead">
          Featured artists will be included in the monthly playlist. Additionally they will gain followers and
          subscribers by being amazing, and with some marketing help behind the scenes from tickles and tunes.
        </p>
      </div>
      <div className="col-md-5 order-md-1">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 500x500"
        >
          <title>Placeholder</title>
          <rect fill="#eee" width="100%" height="100%" />
          <text fill="#aaa" dy=".3em" x="50%" y="50%">
            Your Face Here
          </text>
        </svg>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">
          Become next month's <span className="text-muted">featured artist </span>
        </h2>
        <p className="lead">
          Featured artists will be included in the monthly playlist. Additionally they will gain followers and
          subscribers by being amazing, and with some marketing help behind the scenes from tickles and tunes.
        </p>
      </div>
      <div className="col-md-5">
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 500x500"
        >
          <title>Placeholder</title>
          <rect fill="#eee" width="100%" height="100%" />
          <text fill="#aaa" dy=".3em" x="50%" y="50%">
            Your Album Here
          </text>
        </svg>
      </div>
    </div>
    <hr className="featurette-divider" />
    <div
      className="modal fade"
      id="exampleModalLong"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Kathy Reid-Naiman
            </h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="lead">
              Kathy Reid-Naiman makes children’s music so accessible that some adults secretly confess to listening to
              it just for themselves.{' '}
            </p>
            <p>
              Her songs bring the comfort of tradition and the sweetness of nostalgia – as well as the thrill of novelty
              and innovation to young listeners, and their caregivers too. For 20 years, Kathy has made high quality
              recordings for children with the diligence and professionalism you would expect from an adult recording.
              She believes that a great recording should transition smoothly between songs, and the musical arrangements
              should be varied. This simple, but disciplined approach is the reason why she has long been recognised as
              one of Canada’s leading early childhood recording artists.
            </p>
            <p>
              In her hometown of Trenton, Ontario, Kathy grew up singing in harmony with her two sisters, in the shadow
              of their jazz guitar playing dad. Kathy began playing music for children in 1980 when her children were
              young, and over the years, she has developed an enriching music program that she continues to teach in
              libraries and schools throughout Ontario.
            </p>
            <p>
              On her self-run record label, Merriweather Records Ltd., Kathy has recorded 15 CDs and one DVD for
              children. Her contribution to early literacy has been recognised across Canada through her inclusion in
              Newborn Literacy Kits in through the Ontario Early Years, BC Books for Babies, and Edmonton Public
              Libraries. Music continues to be the focus of her life and she delights in introducing children to the
              wonders of language and music
            </p>
          </div>
          <div className="modal-footer">
            <ul className="float-right list-inline">
              <li className="list-inline-item">
                <script src="https://apis.google.com/js/platform.js" />
                <div
                  className="g-ytsubscribe"
                  data-channelid="UCeEBafvohiu3_gUHsYY-jwQ"
                  data-layout="default"
                  data-count="default"
                />
              </li>
              <li className="list-inline-item">
                <a
                  className="twitter-follow-button"
                  href="https://twitter.com/kathyreidnaiman?ref_src=twsrc%5Etfw"
                  data-show-count="false"
                >
                  {' '}
                  @KathyReidNaiman
                  <script async="" src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default Featured
