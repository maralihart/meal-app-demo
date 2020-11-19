import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class Restaurant extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.imageSrc}} style={styles.logo} />
        <Text style={styles.name}>{this.props.name}</Text>
        <Text style={styles.cuisine}>{this.formatCuisines(this.props.cuisine)}</Text>
      </View>
    );
  }

  formatCuisines(cuisines) {
    let cuisineString = '';
    if (cuisines.length >= 1) {
      for (let i = 0; i < 3; i++) {
        if(i != cuisines.length-1 || i != 2) {cuisineString = cuisineString.concat(cuisines[i] + ", ")}
        else {
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
  },
  cuisine: {
    fontSize: 14,
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default Restaurant;
