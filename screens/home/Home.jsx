import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import ReusableText from '../../components/Reusable/ReusableText'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {AntDesign} from '@expo/vector-icons'
import styles from './home.style'
import HeightSpacer from '../../components/Reusable/HeightSpacer'
import { BestHotels, Places, Recommendations } from '../../components'

const Home = ({navigation}) => {
  return (
<SafeAreaView style={reusable.container}>
<View>
<View style={reusable.rowWithSpace('space-between')}>
<ReusableText
          text={'Hey User'}
          family={"regular"}
          size={TEXT.large}
          color={COLORS.black}
        />
        <TouchableOpacity style={styles.box} 
        onPress={() => navigation.navigate('Search')}
        > 
<AntDesign
   name='search1'
   size={26}

/>

        </TouchableOpacity>
</View>
<HeightSpacer height={SIZES.large}/>
<ReusableText
          text={'Places'}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places />


</View>

<HeightSpacer height={5}/>

<Recommendations/>

<HeightSpacer height={10}/>

<BestHotels/>

</SafeAreaView>
  )
}

export default Home
