import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ReviewTie from "../Tiles/reviews/ReviewTie";

const ReviewsList = ({ reviews }) => {
  return (
    <FlatList
      data={reviews}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <ReviewTie review={item} />
        </View>
      )}
    />
  );
};

export default ReviewsList;

const styles = StyleSheet.create({});
