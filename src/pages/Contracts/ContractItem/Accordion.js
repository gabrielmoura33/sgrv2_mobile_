import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import List, { List as ListModel } from './List';

const list = {
  name: 'Total Points',
  items: [
    { name: 'Nathaniel Fitzgerald', points: '$3.45', accepted: true },
    { name: 'Lawrence Fullter Fitzgerald', points: '$3.45', accepted: true },
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f6',
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.title}>Markets</Text>
    <List {...{ list }} />
  </View>
);
