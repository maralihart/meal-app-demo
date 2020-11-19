import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  Bullets,
} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
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
        <ImageBackground
          style={styles.slider}
          source={{
            uri:
              'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          }}>
          <Grid style={styles.dealAlert}>
            <Col size={80}>
              <Text>50% off your first order at Trinity, today only</Text>
            </Col>
            <Col size={20}>
              <Image
                style={styles.arrow}
                source={{
                  uri:
                    'https://www.jing.fm/clipimg/full/0-6641_arrow-transparent-background-image-right-arrow-icon-android.png',
                }}
              />
            </Col>
          </Grid>
        </ImageBackground>
        <View style={styles.restaurantList}>
          {restaurants.map((restaurant, index) => (
            <Restaurant
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
  dealAlert: {
    width: 300,
    height: 20,
    backgroundColor: '#fff',
    marginTop: 120,
    marginBottom: 25,
    marginLeft: 80,
    padding: 10,
    justifyContent: 'center',
  },
  arrow: {
    margin: 10,
    width: 35,
    height: 15,
    resizeMode: 'contain',
  },
});

export default App;
