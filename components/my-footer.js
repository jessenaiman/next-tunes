import Link from 'next/link'
import { Follow } from 'react-twitter-widgets'

const MyFooter = () => (
  <footer>
    <nav className="navbar fixed-bottom navbar-light bg-light">
      <p className="float-left">© 2019 Tickles and Tunes</p>
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
          <a
            className="twitter-follow-button"
            href="https://twitter.com/TicklesAndTunes?ref_src=twsrc%5Etfw"
            data-show-count="false">
            {' '}
            @TicklesAndTunes
            <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8" />
          </a>
        </li>
      </ul>
    </nav>
  </footer>
)

export default MyFooter
