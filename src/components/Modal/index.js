/* eslint-disable react/forbid-prop-types */
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, TouchableHighlight, Text,
} from 'react-native';
import {
  Container,
  ContainerModal,
  ModalInfo,
  ModalAlert,
  ModalText,
  ModalButton,
  ModalTextStyle,
  Modal,
  ModalView,
  ModalButtonBack,
  TextButtonBack,
  TextButtonBackColor,

} from './styles';

export default function Info({ content }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleTouch = useCallback(() => {
    setModalVisible(true);
  });

  const styles = StyleSheet.create({
    openButton: {
      backgroundColor: '#F194FF',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
  });

  return (

    <Container onPress={handleTouch}>

      <ModalButton onPress={handleTouch}>
        {content}
      </ModalButton>
      <Modal
        animationType="fade"
        visible={modalVisible}
        presentationStyle="fullscreen"
      >
        <Container>
          <ModalView>
            <TextButtonBack style={styles.modalText}>Dados da Matriz, que tal???</TextButtonBack>

            <ModalButtonBack
              style={{ backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <TextButtonBackColor>Voltar</TextButtonBackColor>
            </ModalButtonBack>
          </ModalView>
        </Container>
      </Modal>
    </Container>
  );
}

Info.propTypes = {
  content: PropTypes.object.isRequired,
};
