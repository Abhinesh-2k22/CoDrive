import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { AirbnbRating } from '@rneui/themed';

const Ratings = () => {
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };

  return (
    <View>
          <AirbnbRating isDisabled={true} size={20} showRating={false} />
    </View>
  );
};


export default Ratings;
