import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer';
import { SIZES } from '../../constants/theme';
import Country from '../Tiles/country/Country';


const Places = () => {

 const countries = [
    {
      _id: "1",
      country: "Czech",
      description: "The Czech Republic is a tourist country, known for its diverse landscape and rich history.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956072/czechpic_aflusk.jpg",
      region: "European"
    },
    {
      _id: "2",
      country: "France",
      description: "France is a top tourist destination, famous for its stunning landmarks, delicious cuisine, and rich culture.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956052/franceCity_zk5y9m.jpg",
      region: "European"
    },
    {
      _id: "3",
      country: "Poland",
      description: "Poland is a charming tourist destination, offering a mix of historical sites, picturesque landscapes, and vibrant cities.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956058/polandCity_tyjjz1.jpg",
      region: "European"
    },
    {
      _id: "4",
      country: "Germany",
      description: "Germany is a diverse tourist destination, known for its rich history, vibrant culture, and stunning natural scenery.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956053/germanyCity_bywcxj.jpg",
      region: "European"
    },
    {
      _id: "5",
      country: "Spain",
      description: "Spain is a beloved tourist destination, renowned for its sunny weather, beautiful beaches, and vibrant culture.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956058/polandCity_tyjjz1.jpg",
      region: "European"
    },
    {
      _id: "6",
      country: "Italy",
      description: "Italy is a must-visit tourist destination, famous for its art, history, and culinary delights.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956058/italyCity_vl1p4z.jpg",
      region: "European"
    },
    {
      _id: "7",
      country: "Greece",
      description: "Greece is a captivating tourist destination, known for its ancient ruins, stunning islands, and warm hospitality.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956055/greeceCity_ssz4t1.webp",
      region: "European"
    },
    {
      _id: "8",
      country: "Sweden",
      description: "Sweden is a beautiful Scandinavian country, famous for its picturesque landscapes, modern cities, and rich cultural heritage.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956058/polandCity_tyjjz1.jpg",
      region: "European"
    },
    {
      _id: "9",
      country: "Norway",
      description: "Norway is a breathtaking destination, known for its stunning fjords, Northern Lights, and outdoor adventures.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956066/norwayCity_f7bbfj.jpg",
      region: "European"
    },
    {
      _id: "10",
      country: "Portugal",
      description: "Portugal is a hidden gem in Europe, with its charming cities, beautiful beaches, and delicious cuisine.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956066/portugalCity_cl1rq3.webp",
      region: "European"
    },
    {
      _id: "11",
      country: "Switzerland",
      description: "Switzerland is renowned for its breathtaking landscapes, including the Swiss Alps, picturesque lakes, and charming villages.",
      imageUrl: "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956068/switzerland_city_vazubo.jpg",
      region: "European"
    }
  ];
  

  return (
    <View>
        <HeightSpacer height={20}/>
     <VirtualizedList
     data={countries}
     horizontal
     keyExtractor={(item) => item._id}
     showsHorizontalScrollIndicator={false}
     getItemCount={(data) => data.length}
     getItem={(data, index) => data[index]}
     renderItem={({item, index}) => (

        <View style={{marginRight: SIZES.medium}}>
<Country item={item} />
        </View>
     )}
     />
    </View>
  )
}

export default Places

const styles = StyleSheet.create({})