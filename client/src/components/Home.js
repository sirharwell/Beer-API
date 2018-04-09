import React, { Component } from 'react';
import { Header, Segment, Divider, Grid, Image } from 'semantic-ui-react';
import ReactMarkDown from 'react-markdown';
import axios from 'axios';
import dpsLogo from '../images/dpsLogo.svg';

class Home extends Component {
  state = { }

  render() {
    return(
      <Segment basic>
        <Segment basic textAlign='center'>
          <Image style={styles.centered} size='tiny' src={dpsLogo} alt='DevPoint Studios Logo' />
          <Header as='h1' style={styles.header}>DevPoint Studios React Assessment</Header>
        </Segment>
        <Grid>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Beer
              </Header>
              <Divider />
            </Segment>
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Segment inverted>
              <Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                  Breweries
              </Header>
              <Divider />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#2ecc40'
  }
}

export default Home;
