import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
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
        {restaurants.map((restaurant) => (
          <Restaurant
            name={restaurant.name}
            cuisine={restaurant.cuisine}
            imageSrc={restaurant.image_path}
            freeMeal={restaurant.freeMeals}
          />
        ))}
      </View>
    );
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
