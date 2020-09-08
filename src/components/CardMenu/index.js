/* eslint-disable react/forbid-prop-types */
import React, { useCallback } from 'react';
// import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { signOut } from '../../store/modules/auth/actions';

import {
  Menu,
  MenuImage,
  MenuTitle,
} from './styles';

export default function CardMenu({ menu }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogout = useCallback(() => {
    dispatch(signOut());
  }, []);

  const handleNavigation = useCallback((destination, screen) => {
    if (destination === 'logout') {
      handleLogout();
    } else {
      navigation.navigate(destination, screen);
    }
  }, []);

  return (
    <Menu onPress={() => handleNavigation(menu.from, menu.from)}>
      <MenuImage source={menu.img} />
      <MenuTitle>{menu.title}</MenuTitle>
    </Menu>
  );
}

CardMenu.propTypes = {
  menu: PropTypes.object.isRequired,
};
