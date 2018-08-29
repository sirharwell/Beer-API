import React from 'react';
import axios from 'axios';
import {
  Card,
  Container,
  Divider,
  Grid,
  Image,
  Label,
} from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';
import BeerView from './BeerView';

const styles = {
  container: {
    height: '700px',
    overflow: 'auto',
  },
};

class Beers extends React.Component {
  state = { beers: [], page: 1, total_pages: 2 };

  componentDidMount = () => {
    this.loadMore();
  };

  loadMore = () => {
    const { beers, page } = this.state;
    axios
      .get(`/api/all_beers?page=${page}&per_page=10`)
      .then((res) => {
        const { entries, total_pages } = res.data;
        this.setState({
          beers: beers.concat(entries),
          page: page + 1,
          total_pages: total_pages,
        });
      });
  };

  hasLabel = (beer) => {
    if (beer.hasOwnProperty('labels') === true) {
      return <Image src={beer.labels.medium} />;
    } else {
      return (
        <Label
          content="Image not found!"
          icon="warning"
        />
      );
    }
  };

  hasStyle = (beer) => {
    if (beer.hasOwnProperty('style') === true) {
      return (
        <Card.Description>
          {beer.style.name}
        </Card.Description>
      );
    } else {
      return null;
    }
  };

  listBeers = () => {
    const { beers } = this.state;
    return beers.map((beer, index) => (
      <Grid.Column key={index + 1} width={3}>
        <Card>
          {this.hasLabel(beer)}
          <Card.Content>
            <Link to={`/beers/${beer.name}`}>
              <Card.Header as="h4">
                {beer.name}
              </Card.Header>
            </Link>
            <Card.Meta>ABV: {beer.abv}%</Card.Meta>
            {this.hasStyle(beer)}
          </Card.Content>
        </Card>;
      </Grid.Column>
    ));
  };

  render() {
    const { page, total_pages } = this.state;
    return (
      <Container style={styles.container}>
        <Divider hidden />
        <InfiniteScroll
          loadMore={this.loadMore}
          hasMore={page < total_pages}
          useWindow={false}>
          <Grid>
            <Grid.Row stretched>
              {this.listBeers()}
            </Grid.Row>
          </Grid>
        </InfiniteScroll>
      </Container>
    );
  }
}

export default Beers;
