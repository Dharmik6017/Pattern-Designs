import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const Product = (props) => {
  return (
    <View>
      <ScrollView
        style={styles.innerContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {props.data.map((u) => {
          return (
            <View style={styles.cardContainer} key={u.Id}>
              <Image source={{ uri: u.ImageName }} style={styles.image} />
              <Text style={styles.title}>{u.Name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  image: { height: 100, width: 100, borderRadius: 10 },
  title: { textTransform: "capitalize", marginTop: 7, color: "#626667" },
  cardContainer: {
    marginRight: 10,
    width: 100,
  },
});
