import React from 'react';
import {StyleSheet, Text, Image} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';

function Restaurant(props) {
  return (
    <Grid style={styles.container}>
      <Col size={40}>
        <Image source={{uri: props.imageSrc}} style={styles.logo} />
      </Col>
      <Col size={60}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.cuisine}>
          {formatCuisines(props.cuisine.slice(0, 3))}
        </Text>
        {props.freeMeal > 0 ? <Coupon freeMeal={props.freeMeal} /> : null}
      </Col>
    </Grid>
  );
}

function Coupon(props) {
  return (
    <Text style={styles.coupon}>
      {(props.freeMeal * 100).toString() + '% off first meal credit'}
    </Text>
  );
}

function formatCuisines(cuisines) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
