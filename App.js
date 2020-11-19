import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Restaurant from './src/Restaurant';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  componentDidMount() {
    const response = fetch('https://c1f487ba9e7c.ngrok.io/api/customers/mara')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({'restaurants': responseJson.openRestaurants});
      })
      .catch(error => {console.log(error)});
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.restaurants.map((restaurant, index) => (
          <Restaurant name={restaurant.name} cuisine={restaurant.cuisines} imageSrc={restaurant.image_path} />
        ))}
      </View>
    );
  };

  async getAPIData() {
    const response = await fetch('https://c1f487ba9e7c.ngrok.io/api/customers/mara')
      .then(response => response.json())
      .then((responseJson) => {
        console.log("API called");
        return responseJson.openRestaurants;
      })
      .catch(error => {console.log(error)});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
