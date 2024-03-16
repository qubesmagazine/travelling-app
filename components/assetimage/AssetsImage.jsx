
import { Image, StyleSheet } from "react-native";
import React from "react";

const AssetsImage = ({ source, width, height, radius, mode}) => {
  return (
    <Image
      source={source}
      style={[styles.image(width, height, radius, mode), { borderRadius: radius }]}
    />
  );
};

export default AssetsImage;

const styles = StyleSheet.create({
  image: (width, height, radius, mode) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: mode,
  }),
});





// import React from 'react';
// import { StyleSheet, Image } from 'react-native';

// const AssetsImage = ({ source }) => {
//   return (
//     <Image
//       source={source}
//       style={styles.image}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   image: {

//     height: 200,
//     aspectRatio: 1,
//     borderRadius: 200,
//     justifyContent: 'center',
//     alignSelf: 'center',
    
//   },
// });

// export default AssetsImage;
