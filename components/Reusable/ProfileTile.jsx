import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import ReusableText from "./ReusableText";
import reusable from "./reusable.style";
import { COLORS, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";

const ProfileTile = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[reusable.rowWithSpace("space-between"), styles.container]}
    >
      <View style={styles.infoProfile}>
        <AntDesign name={icon} size={15} />
        <WidthSpacer width={5} />
        <ReusableText
          text={title}
          family={"regular"}
          size={TEXT.medium}
          color={COLORS.dark}
        />
      </View>
      <View>
        <AntDesign name="right" size={15} />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileTile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },

  infoProfile: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
