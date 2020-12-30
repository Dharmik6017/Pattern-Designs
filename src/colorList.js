import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ColorList = (props) => {
  const { colors } = props.data;
  const [selectedColor, setselectedColor] = useState(props.data.colors[0]);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={[styles.selectedColor, { backgroundColor: selectedColor.value }]}
      />
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{props.data.title}</Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              let data = colors.filter((x) => {
                return JSON.stringify(x.id) === text;
              });
              console.log("data", data);
              data.length === 1 && setselectedColor(...data);
            }}
            keyboardType="numeric"
            maxLength={4}
          />
        </View>
        <View style={styles.colorListContainer}>
          {props.data.colors.map((u, i) => {
            return (
              <View style={styles.colorList} key={i}>
                <TouchableOpacity
                  style={[styles.color, { backgroundColor: u.value }]}
                  onPress={() => setselectedColor(u)}
                />
                <Text style={styles.colorId}>{u.id}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ColorList;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  innerContainer: {
    flexDirection: "row",
    // marginTop: 10,
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: { alignSelf: "center", marginRight: 40, color: "#ababab" },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ababab",
    padding: 2,
    width: 50,
    borderRadius: 5,
    height: 25,
    textAlign: "center",
  },
  color: {
    height: 20,
    width: 45,
    borderRadius: 5,
  },
  colorList: { alignItems: "center", margin: 5 },
  colorId: { color: "#ababab" },
  colorListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  selectedColor: {
    height: 20,
    width: 40,
    borderRadius: 20,
    marginTop: 16,
  },
  mainContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    margin: 10,
    padding: 0,
  },
});
