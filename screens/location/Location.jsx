import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Location = () => {
  const [location, setLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [coordinates, setCoordinates] = useState({
    latitude: 49.8175,
    longitude: 15.473,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    title: 'My Location',
  });

  // Function to handle user input for location
  const handleLocationInput = (text) => {
    setLocation(text);
    // Here you can implement the logic to convert 'location' into coordinates
    // and update the 'coordinates' state accordingly
  };

  // Function to handle user input for destination
  const handleDestinationInput = (text) => {
    setDestination(text);
    // Here you can implement the logic to convert 'destination' into coordinates
    // and update the 'coordinates' state accordingly
  };

  return (
    <View style={styles.container}>
      <MapView initialRegion={coordinates} style={styles.mapStyle}>
        <Marker coordinate={coordinates} title={coordinates.title} />
      </MapView>
      <TextInput
        style={[styles.input, { top: 60 }]} // Adjust 'top' as needed
        placeholder="Enter your location"
        onChangeText={handleLocationInput}
        value={location}
      />
      <TextInput
        style={[styles.input, { top: 90 }]} // Adjust 'top' as needed
        placeholder="Enter your destination"
        onChangeText={handleDestinationInput}
        value={destination}
      />
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  input: {
    position: 'absolute',
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
