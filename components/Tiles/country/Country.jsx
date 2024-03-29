import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, TEXT } from '../../../constants/theme'
import ReusableText from '../../Reusable/ReusableText'
import NetworkImage from '../../Reusable/NetworkImage'
import { useNavigation } from '@react-navigation/native'


const Country = ({item}) => {
const navigation = useNavigation();


  return (
<TouchableOpacity onPress={() => navigation.navigate("CountryDetails", {item})}>
<View>

    <NetworkImage source={item.imageUrl} width={85} height={85} radius={12}/>

<ReusableText
          text={item.country}
          family={"medium"}
          size={TEXT.medium}
          color={COLORS.black}
          align={"center"}
        />


</View>

</TouchableOpacity>
  )
}

export default Country

const styles = StyleSheet.create({})