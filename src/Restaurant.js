import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Col, Row, Grid} from 'react-native-easy-grid';

class Restaurant extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid style={styles.container}>
        <Col size={40}>
          <Image source={{uri: this.props.imageSrc}} style={styles.logo} />
        </Col>
        <Col size={60}>
          <Text style={styles.name}>{this.props.name}</Text>
          <Text style={styles.cuisine}>
            {this.formatCuisines(this.props.cuisine.slice(0, 3))}
          </Text>
          <Text style={styles.coupon}>{this.formatFreeMeals(this.props.freeMeals)}</Text>
        </Col>
      </Grid>
    );
  }

  formatFreeMeals(freeMeals) {
    return (freeMeals * 100).toString() + '% off first meal credit';
  }

  formatCuisines(cuisines) {
    let cuisineString = '';
    if (cuisines.length >= 1) {
      for (let i = 0; i < 3; i++) {
        if (i !== cuisines.length - 1) {
          cuisineString = cuisineString.concat(cuisines[i] + ', ');
        } else {
          cuisineString = cuisineString.concat(cuisines[i]);
          break;
        }
      }
    }
    return cuisineString;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cuisine: {
    marginTop: 5,
    fontSize: 14,
  },
  logo: {
    width: 120,
    height: 100,
  },
  coupon: {
    marginTop: 10,
    backgroundColor: '#339944',
    fontSize: 14,
    color: '#fff',
    padding: 8,
    overflow: 'hidden',
    borderRadius: 5,
    fontWeight: 'bold',
    width: 200,
  },
});

export default Restaurant;
