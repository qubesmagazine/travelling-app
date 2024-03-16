import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
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
import { useRoute } from '@react-navigation/native';


const PlaceDetails = ({navigation}) => {
  const route = useRoute();
  const id = route.params

  const place = {
    "_id": "1",
    "country_id": "1",
    "title": "Prague Castle",
    "description":
      "The Czech Republic, located in the heart of Europe, is a captivating tourist destination renowned for its stunning landscapes, rich history, and vibrant culture. Nestled between Germany, Austria, Poland, and Slovakia, the Czech Republic offers visitors a diverse array of experiences, from exploring medieval castles and picturesque towns to indulging in world-class cuisine and enjoying the lively atmosphere of its cities.",
   "contact_id": "1",
      "imageUrl":"http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956072/czechpic_aflusk.jpg",
      "rating": 4.7,
      "review": "1234 Reviews",
      "latitude": 40.689247,
      "longitude": -70.689257,
      "location": "Prague, Czech Republic",
    "popular": [
      {
        "_id": "2",
        "title": "Prague Castle",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956053/germanyCity_bywcxj.jpg",
        "rating": 4.7,
        "review": "1234 Reviews",
        "location": "Prague, Czech Republic",
      },
      {
        "_id": "3",
        "title": "Charles Bridge",
        "imageUrl":
          "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956072/czechpic_aflusk.jpg",
        "rating": 4.8,
        "review": "1334 Reviews",
        "location": "Prague, Czech Republic",
      },
    ],
  };
  return (
    <ScrollView>
    <View>
      <NetworkImage
        source={place.imageUrl}
        width={"100%"}
        height={350}
        radius={30}
      />

      <AppBar
      top={40}
      left={20}
      right={20}
        title={place.title}
        color={COLORS.white}
        icon={"search1"}
        color1={COLORS.white}
        onPress={() => navigation.goBack()}
        onPress1={() => {}}
      />
    </View>

    <View style={styles.description}>
    <HeightSpacer height={15}/>


      <ReusableText
        text={place.location}
        family={"medium"}
        size={TEXT.large}
        color={COLORS.black}
      />

      <DescriptionText text={place.description} />

      <View style={{ alignContent: "center" }}>

      <HeightSpacer height={20}/>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Popular Hotels"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity onPress={() => {}}>
            <Feather name="list" size={20} />
          </TouchableOpacity>

        </View>

        <HeightSpacer height={20}/>

        <PopularList data={place.popular} />

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

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20,
  },


});