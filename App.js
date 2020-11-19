import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Restaurant from './src/Restaurant';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://924af0800ea4.ngrok.io/api')
      .then((response) => response.json())
      .then(
        (responseJson) => {
          setIsLoaded(true);
          setRestaurants(responseJson.openRestaurants);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return <Text>Error: {error.message}</Text>;
  } else if (!isLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Restaurants</Text>
        <Image
          style={styles.slider}
          source={{
            uri:
              'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}
        />
        <View style={styles.restaurantList}>
          {restaurants.map((restaurant, index) => (
            <Restaurant
              style={styles.restaurant}
              key={index}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              imageSrc={restaurant.image_path}
              freeMeal={restaurant.free_meals}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  restaurantList: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingBottom: 20,
  },
  slider: {
    height: 200,
    width: Dimensions.get('window').width,
    marginBottom: 30,
  },
});

export default App;
