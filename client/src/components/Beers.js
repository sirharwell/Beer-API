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


class Beers extends React.Component {
  state = { beers: [] };

  componentDidMount = () => {
    axios.get('/api/all_beers').then((res) => {
      const { entries } = res.data;
      this.setState({
        beers: entries,
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
    return (
      <div>
        <Image src='http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/4j/m4/p04jm4h3.jpg' fluid />
        <Container>
          {this.listBeers()}
        </Container>
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
