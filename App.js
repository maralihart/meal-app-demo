import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Restaurant from './src/Restaurant';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('https://c1f487ba9e7c.ngrok.io/api/customers/mara')
      .then((response) => response.json())
      .then(
        (responseJson) => {
          setIsLoaded(true);
          setRestaurants(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return <View>Error: {error.message}</View>;
  } else if (!isLoaded) {
    return <View>Loading...</View>;
  } else {
    return (
      <View style={styles.container}>
        {restaurants.map((restaurant) => (
          <Restaurant
            name={restaurant.name}
            cuisine={restaurant.cuisines}
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
