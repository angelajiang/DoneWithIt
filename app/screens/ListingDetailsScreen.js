import React, { Component } from "react";
import {
  ImageBackground,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import AppText from "../components/AppText";

class ListingDetailsScreen extends Component {
  render() {
    const { title, subTitle, image } = this.props;
    return (
      <View>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Red jacket for sale</AppText>
          <AppText style={styles.price}>$100</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;

/*
// Usage example

  return (
    <ListingDetailsScreen
      title="Red jacket for sale!"
      subTitle="$100"
      image={require("./app/assets/jacket.jpg")}
    />
  );
  */
