import React, { useCallback } from 'react';
import {
  View, StyleSheet, TouchableHighlight, Animated, TouchableOpacity,
} from 'react-native';
import {
  MaterialCommunityIcons, FontAwesome,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

// import { Container } from './styles';

const AddButton = ({ color }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const buttonSize = new Animated.Value(1);
  const mode = new Animated.Value(0);
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#3377B6',
      alignItems: 'center',
      justifyContent: 'center',
      width: 72,
      height: 72,
      borderRadius: 36,
      position: 'absolute',
      top: -60,
      shadowColor: '#3377B6',
      shadowRadius: 5,
      shadowOffset: { height: 10 },
      shadowOpacity: 0.3,
      borderColor: '#FFF',
    },
    secondaryButton: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: '#3377B6',
    },
  });
  const handlePress = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 50,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
      }),
    ]).start();
  };
  const sizeStye = {
    transform: [{ scale: buttonSize }],
  };
  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -100],
  });
  const thermometerY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });
  const timeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, -24],
  });
  const timeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -150],
  });
  const pulseX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-24, 50],
  });
  const pulseY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, -100],
  });

  const handleLogout = useCallback(() => {
    dispatch(signOut());
  }, []);
  const handleNavigation = useCallback((destination, screen) => {
    handlePress();
    navigation.navigate(destination, { screen });
  }, []);

  return (
    <View style={{ position: 'absolute', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => handleNavigation('Payments', 'Payments')}
      >
        <Animated.View style={{ position: 'absolute', left: thermometerX, top: thermometerY }}>

          <View style={styles.secondaryButton}>
            <MaterialCommunityIcons name="credit-card-plus-outline" size={24} color={color} />
          </View>
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={{ position: 'absolute', left: timeX, top: timeY }}>
        <TouchableOpacity
          onPress={() => handleNavigation('Vehicles', 'Vehicles')}
        >
          <View style={styles.secondaryButton}>
            <MaterialCommunityIcons name="car" size={24} color="#FFF" />
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={{ position: 'absolute', left: pulseX, top: pulseY }}>
        <TouchableOpacity onPress={() => handleLogout()}>
          <View style={styles.secondaryButton}>
            <MaterialCommunityIcons name="logout" size={24} color={color} />
          </View>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.button, sizeStye]}>
        <TouchableHighlight onPress={handlePress} underlayColor="#3377B6">
          <View>
            <FontAwesome name={color ? 'user-circle' : 'user-circle-o'} size={32} color={color} />
          </View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
};

export default AddButton;
