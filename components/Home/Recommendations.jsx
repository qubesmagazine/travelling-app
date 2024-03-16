import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import {Feather} from '@expo/vector-icons'
import ReusableTile from '../Reusable/ReusableTile';


const Recommendations = () => {
   const navigation = useNavigation();



   
   const recommendations = [
    {
        "_id": "1",
        "country_id": "1",
        "title": "Statue of Liberty",
        "location": "CZECH",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956072/czechpic_aflusk.jpg",
        "rating": 4.7,
        "review": "1234 Reviews"
    },
    {
        "_id": "2",
        "country_id": "2",
        "title": "Grand of Beauty",
        "location": "France",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956052/franceCity_zk5y9m.jpg",
        "rating": 4.8,
        "review": "1454 Reviews"
    },
    {
        "_id": "3",
        "country_id": "3",
        "title": "Land of Islanders",
        "location": "Poland",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956058/polandCity_tyjjz1.jpg",
        "rating": 4.6,
        "review": "1554 Reviews"
    },
    {
        "_id": "4",
        "country_id": "4",
        "title": "Mountain Majesty",
        "location": "Germany",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956053/germanyCity_bywcxj.jpg",
        "rating": 4.9,
        "review": "1654 Reviews"
    },
    {
        "_id": "5",
        "country_id": "5",
        "title": "City of Lights",
        "location": "Spain",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956058/polandCity_tyjjz1.jpg",
        "rating": 4.5,
        "review": "1354 Reviews"
    },
    {
        "_id": "6",
        "country_id": "6",
        "title": "Sunny Shores",
        "location": "Italy",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956058/italyCity_vl1p4z.jpg",
        "rating": 4.6,
        "review": "1444 Reviews"
    },
    {
        "_id": "7",
        "country_id": "7",
        "title": "Cultural Capital",
        "location": "Greece",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956055/greeceCity_ssz4t1.webp",
        "rating": 4.7,
        "review": "1674 Reviews"
    },
    {
        "_id": "8",
        "country_id": "8",
        "title": "Garden Paradise",
        "location": "Sweeden",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956058/polandCity_tyjjz1.jpg",
        "rating": 4.8,
        "review": "1784 Reviews"
    },
    {
        "_id": "9",
        "country_id": "9",
        "title": "Historic Haven",
        "location": "Norway",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956066/norwayCity_f7bbfj.jpg",
        "rating": 4.7,
        "review": "1564 Reviews"
    },
    {
        "_id": "10",
        "country_id": "10",
        "title": "Praise Paradise",
        "location": "Portugal",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956066/portugalCity_cl1rq3.webp",
        "rating": 4.8,
        "review": "1404 Reviews"
    },
    {
        "_id": "11",
        "country_id": "11",
        "title": "Historic Haven City",
        "location": "Switzerland",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1708956068/switzerland_city_vazubo.jpg",
        "rating": 4.3,
        "review": "1564 Reviews"
    }
];


  return (
    <View style={styles.container}>
        <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 20}]}>
        <ReusableText
          text={'Recommendations'}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Recommended')
        }>
<Feather
name="list"
size={20}
/>
        </TouchableOpacity>
        </View>
        <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item._id}
        contentContainerStyle={{columnGap: SIZES.medium}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
<ReusableTile item={item} onPress={() => navigation.navigate('PlaceDetails', item._id)}/>

        )}
        />
  
    </View>
  ) 
}

export default Recommendations

const styles = StyleSheet.create({
container: {
   paddingTop: 30

}


})