import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ReusableTile } from '../../components';
import { COLORS } from '../../constants/theme';

const TopBookings = ({navigation}) => {

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
        }
    ];


  return (
    <View style={{margin: 20}}>

        <FlatList
        data={hotels}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
<View style={{backgroundColor: COLORS.lightWhite, marginBottom: 10, borderRadius: 16}}>
<ReusableTile item={item} onPress={() => navigation.navigate('HotelsDetails', item._id)}/>
</View>


        )}
        />
   
    </View>
  )
}

export default TopBookings

const styles = StyleSheet.create({})