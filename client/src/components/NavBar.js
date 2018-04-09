import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class NavBar extends Component {
  state = { activeItem: this.props.location.pathname}


  render() {
    const { activeItem } = this.state
    return (
        <Menu
          size='large'
          inverted
          pointing
          secondary
        >
          <Container>
            <Menu.Item as='a' href="/" active={activeItem === '/'} >Home</Menu.Item>
            <Menu.Item as='a' href="/beers" active={activeItem === '/beers'}>Beers</Menu.Item>
            <Menu.Item as='a' href="/breweries" active={activeItem === '/breweries'}>Breweries</Menu.Item>
            <Menu.Item position='right'>
              <Button as='a' href="/login">Log in</Button>
              <Button as='a' href="/register" style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Menu.Item>
          </Container>
        </Menu>
    )
  }
}

export default withRouter(NavBar);
