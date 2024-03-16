import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constants/theme'
import { ReusableTile } from '../../components'


const HotelList = ({navigation}) => {

    
    const hotels = [
        {
            "_id": "1",
            "country_id": "1",
            "title": "Czech Palace",
            "location": "Prague, Republic",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025715/spainHotels_de8psj.jpg",
            "rating": 4.7,
            "review": "1302 Reviews"
        },
        {
            "_id": "2",
            "country_id": "2",
            "title": "Eiffel Splendor",
            "location": "Paris, France",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025709/portugalHotels_toy5ft.jpg",
            "rating": 4.6,
            "review": "1486 Reviews"
        },
        {
            "_id": "3",
            "country_id": "3",
            "title": "Polish Palace",
            "location": "Krakow, Poland",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025702/portugalHotels_zhuh6y.webp",
            "rating": 4.9,
            "review": "1593 Reviews"
        },
        {
            "_id": "4",
            "country_id": "4",
            "title": "German Heights",
            "location": "Munich, Germany",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025702/italianHotels_uredfw.jpg",
            "rating": 4.8,
            "review": "1742 Reviews"
        },
        {
            "_id": "5",
            "country_id": "5",
            "title": "Spanish Serenity",
            "location": "Barcelona, Spain",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025701/swizzHotels_zxp3wh.webp",
            "rating": 4.5,
            "review": "1389 Reviews"
        },
        {
            "_id": "6",
            "country_id": "6",
            "title": "Italian Charm",
            "location": "Venice, Italy",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025697/greecHotels_on8vyb.jpg",
            "rating": 4.7,
            "review": "1478 Reviews"
        },
        {
            "_id": "7",
            "country_id": "7",
            "title": "Grecian Gem",
            "location": "Athens, Greece",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025695/germanyHotelsss_bcozdn.jpg",
            "rating": 4.6,
            "review": "1623 Reviews"
        },
        {
            "_id": "8",
            "country_id": "8",
            "title": "Swedish Splendor",
            "location": "Stockholm, Sweden",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025687/czechhotels_znt7uk.jpg",
            "rating": 4.9,
            "review": "1798 Reviews"
        },
        {
            "_id": "9",
            "country_id": "9",
            "title": "Norwegian Oasis",
            "location": "Oslo, Norway",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025697/greecHotels_on8vyb.jpg",
            "rating": 4.8,
            "review": "1605 Reviews"
        },
        {
            "_id": "10",
            "country_id": "10",
            "title": "Portuguese Paradise",
            "location": "Lisbon, Portugal",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025697/greecHotels_on8vyb.jpg",
            "rating": 4.7,
            "review": "1420 Reviews"
        },
        {
            "_id": "11",
            "country_id": "11",
            "title": "Swiss Sanctuary",
            "location": "Zurich, Switzerland",
            "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025697/greecHotels_on8vyb.jpg",
            "rating": 4.3,
            "review": "1543 Reviews"
        }
    ];



  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
<View style={{height: 50}}>
<AppBar 
top={10}
left={0}
right={0}
title={'Nearby Hotels'} color={COLORS.white} icon={'search1'} color1={COLORS.white}
onPress={() => navigation.goBack()}
onPress1={() => navigation.navigate('HotelSearch')}
/>
</View>

<View style={{paddingTop: 20}}>
<FlatList
data={hotels}
keyExtractor={(item) => item._id}
renderItem={({item}) => (
<View style={{marginBottom: 10}}>
<ReusableTile item={item} onPress={() => navigation.navigate('HotelsDetails', item._id)}/>
</View>


)}

/>

</View>
    </SafeAreaView>
  )
}

export default HotelList

const styles = StyleSheet.create({})