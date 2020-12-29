import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import {} from "react-native-gesture-handler";
import axios from "axios";
import SubCategory from "./subCategory";
import FilterIcon from "../assets/icons/filter.png";
import SearchIcon from "../assets/icons/search.png";

class Home extends React.Component {
  state = {
    activeIndexData: {},
    category: [],
  };

  async componentDidMount() {
    await axios
      .post("http://esptiles.imperoserver.in/api/API/Product/DashBoard", {
        CategoryId: 0,
        DeviceManufacturer: "Google",
        DeviceModel: "Android SDK built for x86",
        DeviceToken: " ",
        PageIndex: 1,
      })
      .then((res) => {
        console.log("response", res.data.Result);
        this.setState({
          category: res.data.Result.Category,
          activeIndexData: res.data.Result.Category[0],
        });
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  getCategoryData = async (id, index) => {
    const data = await axios
      .post("http://esptiles.imperoserver.in/api/API/Product/DashBoard", {
        CategoryId: id,
        PageIndex: index,
      })
      .catch((res) => {
        return res;
      })
      .catch((err) => {
        console.log("err", err);
      });
    // this.setState({});
    console.log("data in Method", data);
    this.setState({ activeIndexData: data.data.Result.Category[0] });
    return data;
  };

  render() {
    const { activeIndexData } = this.state;
    console.log("this.state.activeIndexData", this.state.activeIndexData);
    return (
      <View>
        <View style={styles.InnerContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginTop: 10,
              marginRight: 100,
            }}
          >
            <Image
              source={FilterIcon}
              style={[styles.icon, { marginRight: 20 }]}
            />
            <Image source={SearchIcon} style={styles.icon} />
          </View>
          <ScrollView horizontal>
            {this.state.category.map((u) => {
              return (
                <TouchableOpacity
                  key={u.Id}
                  style={styles.innerContainerStyle}
                  onPress={(data) => {
                    console.log(u);
                    if (u.Id !== activeIndexData.Id) {
                      this.getCategoryData(u.Id, 2);
                    }
                  }}
                >
                  <Text
                    style={{
                      color:
                        this.state.activeIndexData.Id === u.Id
                          ? "#fff"
                          : "#ababab",
                    }}
                  >
                    {u.Name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* {this.state && this.state.activeIndexData && (
          <SubCategory data={this.state.activeIndexData} />
        )} */}
        <SubCategory data={this.state.activeIndexData} />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },

  innerContainerStyle: { padding: 10 },
  InnerContainer: { backgroundColor: "#1F1F1F" },
  icon: {
    height: 20,
    width: 20,
  },
});
