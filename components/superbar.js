import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MailIcon from '@material-ui/icons/Mail'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'
import LibraryMusic from '@material-ui/icons/LibraryMusic'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import Palette from '@material-ui/icons/Palette'
import Mail from '@material-ui/icons/Mail'
import Grid from '@material-ui/core/Grid'

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Typography variant="h6" color="inherit" noWrap>
                Tickles and Tunes
              </Typography>
            </Grid>
            <Grid item xs={5} />
            <Grid item xs={4}>
              <IconButton color="inherit" href="/music">
                <LibraryMusic />
              </IconButton>
              <IconButton color="inherit" href="/videos">
                <VideoLibrary />
              </IconButton>
              <IconButton color="inherit" href="/artshow">
                <Palette />
              </IconButton>
              <IconButton color="inherit" href="/contact">
                <Mail />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default PrimarySearchAppBar
