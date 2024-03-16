import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AssetsImage, HeightSpacer, ReusableBtn, ReusableText, ReusableTile } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'

const Succesful = ({navigation}) => {

    const hotel = {

        "_id": "3",
        "country_id": "3",
        "title": "Polish Palace",
        "imageUrl": "http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709025702/portugalHotels_zhuh6y.webp",
        "rating": 4.9,
        "review": "1593 Reviews",
        "location": "Krakow, Poland",
    }
  return (
    <View>
<View style={{marginTop: '40%'}}>
<AssetsImage
 source={require('../../assets/images/mark.avif')}
 width={'100%'}
  height={200}
  mode={'contain'}
/>

<HeightSpacer height={40}/>

<View style={{alignItems: 'center'}}>
<ReusableText
        text={'Booking Successful'}
        family={"medium"}
        size={TEXT.xLarge}
        color={COLORS.black}
      />
      <HeightSpacer height={20}/>
      <ReusableText
        text={'You Can Find Your Booking Details Below'}
        family={"regular"}
        size={SIZES.medium}
        color={COLORS.gray}
      />
   <HeightSpacer height={20}/>
</View>

<View style={{margin: 20}}>
<ReusableText
        text={'Room Details'}
        family={"bold"}
        size={SIZES.medium}
        color={COLORS.dark}
      />

<HeightSpacer height={20}/>

<ReusableTile item={hotel}/>

<HeightSpacer height={40}/>

<ReusableBtn
onPress={() => navigation.navigate("Bottom")}
btnText={"Done"}
width={SIZES.width - 50}
backgroundColor={COLORS.green}
borderColor={COLORS.green}
borderWidth={0}
textColor={COLORS.white}
/>



</View>
</View>
    </View>
  )
}

export default Succesful

const styles = StyleSheet.create({})