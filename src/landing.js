import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Pattern Design"
        onPress={() => navigation.navigate("PatternDesign")}
      />
      <View style={styles.downContainer}>
        <Button
          title="Color Picker"
          onPress={() => navigation.navigate("ColorPicker")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  downContainer: { marginTop: 20 },
});
