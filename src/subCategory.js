import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Product from "./product";

const Data = (props) => {
  const { data } = props;
  return (
    <View>
      {data &&
        data.map((u) => {
          return (
            <View key={u.Id}>
              <Text style={styles.categoryName}>{u.Name}</Text>
              <Product data={u} />
            </View>
          );
        })}
    </View>
  );
};

const SubCategory = (props) => {
  return (
    <View style={styles.container}>
      {/* if there is no data in category than Dispaly No data Component */}

      {props.data.SubCategories ? (
        <Data data={props.data.SubCategories} />
      ) : (
        <View>
          <Text>No Data Found</Text>
        </View>
      )}
    </View>
  );
};

export default SubCategory;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: "600",
  },
});
