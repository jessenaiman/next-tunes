import Link from 'next/link'
import { Follow } from 'react-twitter-widgets'
import { Footer } from 'react-materialize'

const MyFooter = () => (
  <Footer
    copyrights="© 2019 Tickles and Tunes"
    moreLinks={
      <div className="grey-text text-lighten-4 right">
        <Follow username="ticklesandtunes" />
      </div>
    }
    links={
      <ul className="footer-links">
        <li>
          <div className="grey-text text-lighten-3">
            <Follow username="cathyandmarcy" />
          </div>
        </li>
        <li>
          <a className="grey-text text-lighten-3" href="#!">
            <Follow username="kathyreidnaiman" />
          </a>
        </li>
      </ul>
    }
    className="example">
    <h5 className="white-text">Support independent musicians and artists</h5>
    <style jsx>
      {`
        .footer-links {
          margin-top: 15px;
        }
      `}
    </style>
  </Footer>
)

export default MyFooter
