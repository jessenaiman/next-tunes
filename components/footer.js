import Link from 'next/link'
import { Follow } from 'react-twitter-widgets'

const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Support independent musicians</h5>
          <p className="grey-text text-lighten-4">Follow and subscribe to artists to show your support.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Kathy Reid-Naiman
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Sally Jaegar
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Cathy Fink and Marcy Marxer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2014 Copyright Text
        <ul className="float-right list-inline">
          <li className="list-inline-item">
            <script src="https://apis.google.com/js/platform.js" />
            <div
              className="g-ytsubscribe"
              data-channelid="UC_THbKUe6o-K64vh7gWCPyQ"
              data-layout="default"
              data-count="default"
            />
          </li>
          <li className="list-inline-item">
            <Follow username="ticklesandtunes" />
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
