import React from 'react';
import axios from 'axios';
import {
  Card,
  Container,
  Divider,
  Item,
  Grid,
  Image,
  Segment,
  Label,
} from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroller';


class Beers extends React.Component {
  state = { beers: [], page: 1 };

  componentDidMount = () => {
    axios.get('/api/all_beers?page=10&per_page=10').then((res) => {
      const { entries, page } = res.data;
      this.setState({
        beers: entries,
        page: page + 1,
      })
    })
  }

  hasLabel = (beer) => {
    if (beer.hasOwnProperty('labels') === true) {
      return <Item.Image src={beer.labels.medium} />;
    } else {
      return (
        <Item.Image src="https://images.crateandbarrel.com/is/image/Crate/DirectionPilsner17ozSHS16"
        />
      );
    }
  };

  listBeers = () => {
     const { beers } = this.state;
     return beers.map((beer) => (
       <Segment inverted>
         <Item.Group>
          <Item>
            {this.hasLabel(beer)}
            <Item.Content>
              <Item.Header style={styles.header}>{beer.name}</Item.Header>
              <Item.Meta style={styles.header}>Description</Item.Meta>
              <Item.Description style={styles.header}>
                {beer.description}
              </Item.Description>
              <Item.Extra style={styles.header}>Additional Details</Item.Extra>
                ABV: {beer.abv}%
            </Item.Content>
          </Item>
        </Item.Group>
       </Segment>
     ))
   }

  render() {
    const {page} = this.state;
    return (
      <div>
        <Image src='http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4j/m4/p04jm4h3.jpg' fluid />
        <InfiniteScroll
            pageStart={0}
            loadMore={loadFunc}
            hasMore={true || false}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
          <Container>
            {this.listBeers()}
          </Container>
        </InfiniteScroll>
      </div>
    )
  }
}

const styles = {
  header: {
    color: 'white'
  }
}

export default Beers;
