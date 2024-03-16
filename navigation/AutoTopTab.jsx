import { ScrollView, Text, View } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Registeration, Signin } from "../screens";
import { COLORS } from "../constants/theme";
import { AssetsImage, HeightSpacer } from "../components";

const Tab = createMaterialTopTabNavigator();

const AutoTopTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <HeightSpacer height={80} />

        <AssetsImage
          source={require("../assets/images/edly.png")}
          width={"100%"}
          height={250}
          mode={"contain"}
        />

        <View style={{height: 600}}>
          <Tab.Navigator>
            <Tab.Screen name="Signin" component={Signin} />
            <Tab.Screen name="Registeration" component={Registeration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AutoTopTab;
