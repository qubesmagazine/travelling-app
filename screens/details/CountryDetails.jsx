import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  DescriptionText,
  HeightSpacer,
  NetworkImage,
  PopularList,
  ReusableBtn,
  ReusableText,
} from "../../components";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;

  const country = {
    _id: "1",
    country: "Czech Republic",
    description:
      "The Czech Republic, located in the heart of Europe, is a captivating tourist destination renowned for its stunning landscapes, rich history, and vibrant culture. Nestled between Germany, Austria, Poland, and Slovakia, the Czech Republic offers visitors a diverse array of experiences, from exploring medieval castles and picturesque towns to indulging in world-class cuisine and enjoying the lively atmosphere of its cities.",
    imageUrl:
      "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956072/czechpic_aflusk.jpg",
    popular: [
      {
        _id: "2",
        title: "Prague Castle",
        imageUrl:
          "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956072/czechpic_aflusk.jpg",
        rating: 4.7,
        review: "1234 Reviews",
        location: "Prague, Czech Republic",
      },
      {
        _id: "3",
        title: "Charles Bridge",
        imageUrl:
          "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956072/czechpic_aflusk.jpg",
        rating: 4.8,
        review: "1334 Reviews",
        location: "Prague, Czech Republic",
      },
    ],
    region: "Central Europe",
  };

  return (
    <ScrollView>
      <View>
        <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
        top={40}
        left={20}
        right={20}
          title={country.country}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={country.description} />

        <View style={{ alignContent: "center" }}>

        <HeightSpacer height={20}/>
          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText
              text={"Popular Destinations"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />
            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>

          </View>

          <HeightSpacer height={20}/>

          <PopularList data={country.popular} />

<ReusableBtn
  onPress={() => navigation.navigate("HotelSearch")}
  btnText={"Find Best Hotels"}
  width={SIZES.width - 40}
  backgroundColor={COLORS.green}
  borderColor={COLORS.green}
  borderWidth={0}
  textColor={COLORS.white}
/>
<HeightSpacer height={50}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },

  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  },
});
