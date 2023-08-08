import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BeerDetailScreen = ({ route }) => {
  const { beer } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Image source={{ uri: beer.image_url }} style={styles.image} />
      <Text style={styles.name}>{beer.name}</Text>
      <Text style={styles.tagline}>{beer.tagline}</Text>
      <Text style={styles.description}>{beer.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    resizeMode: "contain",
    borderRadius: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: "#888",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
  },
});


export default BeerDetailScreen;
