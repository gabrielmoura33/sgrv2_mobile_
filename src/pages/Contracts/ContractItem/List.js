import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity,
} from 'react-native';

import Animated from 'react-native-reanimated';
import { mix, useTransition } from 'react-native-redash';
import Chevron from './Chevron';
import Item, { LIST_ITEM_HEIGHT } from './ListItem';

const { interpolate } = Animated;
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  items: {
    overflow: 'hidden',
  },
});

export default ({ list, title }) => {
  const [open, setOpen] = useState(false);
  const transition = useTransition(open);
  const height = mix(transition, 0, LIST_ITEM_HEIGHT * list.items.length);
  const bottomRadius = interpolate(transition, {
    inputRange: [0, 16 / 400],
    outputRange: [8, 0],
  });
  return (
    <TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
        <Animated.View
          style={[
            styles.container,
            {
              borderBottomLeftRadius: bottomRadius,
              borderBottomRightRadius: bottomRadius,
            },
          ]}
        >
          <Text style={styles.title}>Termo Padrao</Text>
          <Chevron {...{ transition }} />
        </Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.items, { height }]}>
        <Item
          key={0}
          item={{ title: 'Aceitar', type: 'accept' }}
        />
        <Item
          item={{ title: 'Recusar', type: 'refuse' }}
          key={1}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
