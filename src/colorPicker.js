import React from "react";
import { View, Text } from "react-native";
import ColorList from "./colorList";

const colors = [
  {
    title: "Total Hardness (ppm)",
    colors: [
      { id: 0, value: "#326da8" },
      { id: 110, value: "#224c75" },
      { id: 250, value: "#397fc4" },
      { id: 500, value: "#4994de" },
      { id: 1000, value: "#063059" },
    ],
  },
  {
    title: "Free Chlorine (ppm)",
    colors: [
      { id: 0, value: "#430b66" },
      { id: 110, value: "#7a0fbd" },
      { id: 250, value: "#a04ed4" },
      { id: 500, value: "#a077ba" },
      { id: 1000, value: "#917b9e" },
    ],
  },
  {
    title: "pH (ppm)",
    colors: [
      { id: 0, value: "#5c0823" },
      { id: 110, value: "#eb2f6b" },
      { id: 250, value: "#ba4c6f" },
      { id: 500, value: "#6b3c4b" },
      { id: 1000, value: "#421423" },
    ],
  },
  {
    title: "Total Alkalinity (ppm)",
    colors: [
      { id: 0, value: "#034724" },
      { id: 110, value: "#057a3e" },
      { id: 250, value: "#2bcf7b" },
      { id: 500, value: "#5cb588" },
      { id: 1000, value: "#7eab94" },
    ],
  },
  {
    title: "Cyanuric Acid (ppm)",
    colors: [
      { id: 0, value: "#507a07" },
      { id: 110, value: "#8dd60d" },
      { id: 250, value: "#80a839" },
      { id: 500, value: "#9dbd64" },
      { id: 1000, value: "#d5db27" },
    ],
  },
];

class ColorPicker extends React.Component {
  render() {
    return (
      <View>
        {colors.map((u, i) => {
          console.log("u", u);
          return <ColorList data={u} key={i} />;
        })}
      </View>
    );
  }
}

export default ColorPicker;
