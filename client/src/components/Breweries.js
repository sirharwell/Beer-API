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



class Breweries extends React.Component {
  state = { breweries: [] };

  componentDidMount = () => {
    axios.get('/api/all_breweries').then((res) => {
      const { entries } = res.data;
      this.setState({
        breweries: entries,
      })
    })
  }

  hasImage = (brewery) => {
    if (brewery.hasOwnProperty('images') === true) {
      return <Item.Image src={brewery.images.medium} />;
    } else {
      return (
        <Item.Image src="https://www.landmarkbangkok.com/images/dining/Huntsman-1.jpg"
        />
      );
    }
  };


  listBreweries = () => {
     const { breweries } = this.state;
     return breweries.map((brewery) => (
       <Segment inverted>
         <Item.Group>
          <Item>
            {this.hasImage(brewery)}
            <Item.Content>
              <Item.Header style={styles.header}>{brewery.name}</Item.Header>
              <Item.Meta style={styles.header}>Description</Item.Meta>
              <Item.Description style={styles.header}>
                {brewery.description}
              </Item.Description>
              <Item.Extra style={styles.header}>Additional Details</Item.Extra>
                {brewery.website}
            </Item.Content>
          </Item>
        </Item.Group>
       </Segment>
     ))
   }

  render() {
    return (
      <div>
        <Image src='https://media.timeout.com/images/102150069/image.jpg' fluid />
        <Container>
          {this.listBreweries()}
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

export default Breweries;
