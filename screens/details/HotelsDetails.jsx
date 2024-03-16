import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppBar from "../../components/Reusable/AppBar";
import NetworkImage from "../../components/Reusable/NetworkImage";
import { COLORS, SIZES } from "../../constants/theme";
import styles from "./HotelsDetails.style";
import { DescriptionText, HeightSpacer, HotelMap, ReusableBtn, ReusableText, ReviewsList } from "../../components";
import reusable from "../../components/Reusable/reusable.style";
import { Rating } from "react-native-stock-star-rating";
import {Feather} from '@expo/vector-icons'

const HotelsDetails = ({ navigation }) => {
  const hotel = {
    "availability": {
      "start": "2024-08-20T00:00:00.000Z",
      "end": "2024-08-25T00:00:00.000Z",
    },
"coordinates": {
    "latitude": 40.689247,
    "longitude": -70.689257,
},


    "_id": "1",
    "country_id": "1",
    "title": "Prague Castle",
    "description":
      "The Czech Republic, located in the heart of Europe, is a captivating tourist destination renowned for its stunning landscapes, rich history, and vibrant culture. Nestled between Germany, Austria, Poland, and Slovakia, the Czech Republic offers visitors a diverse array of experiences, from exploring medieval castles and picturesque towns to indulging in world-class cuisine and enjoying the lively atmosphere of its cities.",
    "contact": "1",
    "imageUrl":
      "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956072/czechpic_aflusk.jpg",
    "rating": 4.7,
    "review": "1234 Reviews",
    "location": "Czech Republic",
    "price": 400,
   "_v": 1,
   "reviews": [
         {
"_id": "2",
"review": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
"rating": 4.7,
"user": {
    "_id": "3",
    "username": "Denish Slakish",
    "profile": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709394823/older2_nrq7qn.avif"
},
"updatedAt": "2024-08-09",

         },

         {
            "_id": "3",
            "review": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            "rating": 4.7,
            "user": {
                "_id": "4",
                "username": "Tala Lorman",
                "profile": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709394825/older1_x61hqv.jpg"
            },
            "updatedAt": "2024-08-09",
            
                     },

   ]
  };

let coordinates = {
   id: hotel._id,
   title: hotel.title,
   latitude: hotel.coordinates.latitude,
   longitude: hotel.coordinates.longitude,
   latitudeDelta: 0.01,
   longitudeDelta: 0.01
}

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={hotel.title}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>
      <View>
      <View style={styles.container}>
        <NetworkImage
          source={hotel.imageUrl}
          width={"100%"}
          height={220}
          radius={25}
        />

        <View style={styles.titleContainer}>
          <View style={styles.titleColumn}>
            <ReusableText
              text={hotel.title}
              family={"medium"}
              size={SIZES.xLarge}
              color={COLORS.black}
            />
            <HeightSpacer height={10} />

            <ReusableText
              text={hotel.location}
              family={"medium"}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <HeightSpacer height={15} />

            <View style={reusable.rowWithSpace("space-between")}>
              <Rating
                maxStars={5}
                stars={hotel.rating}
                bordered={false}
                color={"#FD9942"}
              />

              <ReusableText
                text={`(${hotel.review})`}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.container, {paddingTop: 90}]}>
      <ReusableText
                text={'Description'}
                family={"medium"}
                size={SIZES.large}
                color={COLORS.black}
              />
<HeightSpacer height={10}/>

<DescriptionText  text={hotel.description}/>

<HeightSpacer height={10}/>

<ReusableText
                text={'Location'}
                family={"medium"}
                size={SIZES.large}
                color={COLORS.black}
              />

<HeightSpacer height={15}/>

<ReusableText
                text={hotel.location}
                family={"regular"}
                size={SIZES.small+2}
                color={COLORS.gray}
              />

<HotelMap coordinates={coordinates}/>

<View style={reusable.rowWithSpace('space-between')}>
<ReusableText
                text={'Reviews'}
                family={"medium"}
                size={SIZES.large}
                color={COLORS.gray}
              />

       <TouchableOpacity>

        <Feather name='list' size={20}/>

        </TouchableOpacity>       
</View>

<HeightSpacer height={10}/>

<ReviewsList reviews={hotel.reviews}/>



      </View>

      <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
<View>
<ReusableText
                text={`\$ ${hotel.price}`}
                family={"medium"}
                size={SIZES.large}
                color={COLORS.black}
              />

<HeightSpacer height={5}/>

<ReusableText
                text={'Jan 01 - Dec 25'}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.gray}
              />
</View>

<ReusableBtn
onPress={() => navigation.navigate("SelectRoom")}
btnText={"Select Room"}
width={(SIZES.width - 50)/2.2}
backgroundColor={COLORS.green}
borderColor={COLORS.green}
borderWidth={0}
textColor={COLORS.white}
/>
</View>

      </View>
 
    </ScrollView>
  );
};

export default HotelsDetails;
