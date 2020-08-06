/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { animationSucess, animationCancel, breakAnimation } from '../../../store/modules/animations/actions';

export const LIST_ITEM_HEIGHT = 54;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#f4f4f6',
    height: LIST_ITEM_HEIGHT,
  },
  name: {
    fontSize: 16,

  },
  pointsContainer: {
    borderRadius: 25,
    backgroundColor: '#44c282',
    padding: 8,
  },
  pointsContainerRefuse: {
    borderRadius: 25,
    backgroundColor: '#A12830',
    padding: 8,
  },
  points: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ({ item, isLast }) => {
  const bottomRadius = isLast ? 8 : 0;
  const dispatch = useDispatch();
  function handleAccept() {
    dispatch(animationSucess());
    setTimeout(() => {
      dispatch(breakAnimation());
    }, 2200);
  }
  function handleCancel() {
    dispatch(animationCancel());
    setTimeout(() => {
      dispatch(breakAnimation());
    }, 2000);
  }
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: bottomRadius,
          borderBottomRightRadius: bottomRadius,
        },
      ]}
    >
      <Text style={styles.name}>{item.title}</Text>
      <TouchableOpacity style={item.type === 'accept' ? styles.pointsContainer : styles.pointsContainerRefuse} onLongPress={item.type === 'accept' ? handleAccept : handleCancel}>
        <Text style={styles.points}>
          {
            item.type === 'accept' ? (
              <MaterialCommunityIcons name="check-circle-outline" size={24} color="#FAF5FF" />
            ) : (
              <FontAwesome name="exclamation-triangle" size={24} color="#FAF5FF" />
            )
          }
        </Text>
      </TouchableOpacity>
    </View>
  );
};
