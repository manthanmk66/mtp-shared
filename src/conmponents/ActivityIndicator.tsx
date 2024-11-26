import { View, ActivityIndicator as RNActivityIndicator } from 'react-native';
import React from 'react';

const ActivityIndicator = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <RNActivityIndicator size="large" color="blue" />
    </View>
  );
};

export { ActivityIndicator };
