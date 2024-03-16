import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopBookings, TopInfo, TopTrips } from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { HeightSpacer, NetworkImage, ReusableText } from '../components';
import AppBar from '../components/Reusable/AppBar';



const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{flex: 1}}>
        <View style={{backgroundColor: COLORS.lightWhite}}>
<View>

<NetworkImage
source={'http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709729728/search_rbgp0a.jpg'}
width={'100%'}
height={300}
radius={0}

/>

<AppBar
  top={40}
  left={20}
  right={20}
  color={COLORS.white}
  icon={'logout'}
  color1={COLORS.white}
onPress1={() => {}}

/>

<View style={styles.profile}>

<Image
source={{uri: 'http://res.cloudinary.com/dpfu0vwqa/image/upload/v1709728727/proofile_fcbrvv.jpg'}}
style={styles.image}

/>

<HeightSpacer height={5}/>
<View>
<View style={{alignItems: 'center'}}>
<ReusableText
text={'Danish Balan'}
family={'medium'}
size={SIZES.medium}
color={COLORS.black}


/>

</View>
</View>
<HeightSpacer height={5}/>
<View style={styles.name}>
<View style={{alignItems: 'center'}}>
<ReusableText
text={'okwudilionyido@gmail.com'}
family={'medium'}
size={SIZES.medium}
color={COLORS.black}


/>

</View>
</View>

</View>

</View>
        </View>
    <Tab.Navigator>
        <Tab.Screen name='Bookings' component={TopBookings} />
        <Tab.Screen name='Trips' component={TopTrips} />
        <Tab.Screen name='Info' component={TopInfo} />
    </Tab.Navigator>
    </View>
  )
}

export default TopTab

const styles = StyleSheet.create({
    profile: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 110,
        alignItems: 'center'


    },

    image: {
resizeMode: 'cover',
width: 100,
height: 100,
borderColor:  COLORS.lightWhite,
borderWidth: 2,
borderRadius: 90,

    },
name: {
   backgroundColor: COLORS.blue,
   padding: 5,
   borderRadius: 12,


}



})