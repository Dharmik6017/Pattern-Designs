import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import axios from "axios";

const Product = (props) => {
  const { data } = props;
  const [index, setindex] = useState(2);
  const [newData, setnewData] = useState(data.Product);
  const [productData, setproductData] = useState(props.data.Product);

  //get pagination data

  const getData = async () => {
    if (newData.length === 5) {
      await axios
        .post("http://esptiles.imperoserver.in/api/API/Product/ProductList", {
          PageIndex: index,
          SubCategoryId: data.Id,
        })
        .then((res) => {
          setindex(index + 1);
          setnewData(res.data.Result);
          setproductData([...productData, ...res.data.Result]); //adding data to existing data
        })
        .catch((err) => {
          console.log("error to get new Data ::", err);
        });
    }
  };

  return (
    <View>
      <ScrollView
        style={styles.innerContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScrollEndDrag={(i) => {
          productData.length >= 5 && getData();
        }}
      >
        {productData.map((u) => {
          return (
            <View style={styles.cardContainer} key={u.Id}>
              <ImageBackground
                borderRadius={10}
                source={{ uri: u.ImageName }}
                style={styles.image}
              >
                <View>
                  <Text style={styles.priceLabel}>{u.PriceCode}</Text>
                </View>
              </ImageBackground>
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
  image: { height: 100, width: 100 },
  title: { textTransform: "capitalize", marginTop: 7, color: "#626667" },
  cardContainer: {
    marginRight: 10,
    width: 100,
  },
  priceLabel: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    backgroundColor: "#2FA7DB",
    color: "#fff",
    display: "flex",
    width: 40,
    margin: 10,
    borderRadius: 5,
  },
});
