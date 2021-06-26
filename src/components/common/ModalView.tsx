import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, Modal, ModalProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';

interface IModalView {
  isVisible: boolean;
  children: ReactNode;
  hideModal: () => void;
}

export default function ModalView({ children, isVisible, hideModal } : IModalView) {
  return (
    <>
      {isVisible && <View style={ styles.overlay }></View>}
      <Modal
        transparent
        onRequestClose={ () => hideModal() }
        visible={ isVisible }
        animationType="slide"
      >
        <LinearGradient
          colors={[theme.colors.secondary100, theme.colors.secondary80]}
          style={ styles.container }
        >
          <View style={ styles.header }>
            <View style={ styles.delimiter } />
          </View>
          { children }
        </LinearGradient>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: theme.colors.overlay,
  },
  container: {
    flex: 1,
    marginTop: 72,
    paddingHorizontal: 24,
  },
  header: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  delimiter: {
    width: 40,
    height: 2,
    backgroundColor: theme.colors.secondary30,
  }
});
