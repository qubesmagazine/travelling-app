import { FlatList} from 'react-native'
import React from 'react'
import { Slides } from '../../components'

const Onboarding = () => {
  
    const slides = [
     {
        id: 1,
        image: require('../../assets/images/1.png'),
        title: "Your Next Adventure Awaits"

     },

     {
        id: 2,
        image: require('../../assets/images/2.png'),
        title: "Discover Fascinating Histories"

     },

     {
        id: 3,
        image: require('../../assets/images/3.png'),
        title: "Find Your Perfect Getaway"

     },

    ]


  return (
<FlatList
pagingEnabled
horizontal
showsHorizontalScrollIndicator={false}
data={slides}
keyExtractor={(item) => item.id}
renderItem={({item}) => <Slides item={item}/>}



/>
  )
}

export default Onboarding

