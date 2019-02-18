import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { NextAuth } from 'next-auth/client'
import Cookies from 'universal-cookie'
import Package from '../package'
import Styles from '../css/index.scss'
import Menu from './menu'
import Superbar from './superbar'
import Footer from './my-footer'
import CssBaseline from '@material-ui/core/CssBaseline'

export default props => (
  <React.Fragment>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{props.title || 'Tickles and Tunes'}</title>
      <style dangerouslySetInnerHTML={{ __html: Styles }} />
      <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"
      />
    </Head>
    <main>
      <CssBaseline />
      <Menu />
      {props.children}
    </main>
  </React.Fragment>
)
