import React, { Component } from "react";
import Landing from "./src/landing";
import ColorPicker from "./src/colorPicker";
import PatternDesign from "./src/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PatternDesign"
            component={PatternDesign}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ColorPicker"
            component={ColorPicker}
            options={{ title: "Color Picker" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
