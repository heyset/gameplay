import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, KeyboardAvoidingView, Platform, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import Layout from '../components/common/Layout';
import CategorySelect from '../components/common/CategorySelect';
import Icon from '../components/common/Icon';
import InputField from '../components/newGameplay/InputField';
import Button from '../components/common/Button';
import ModalView from '../components/common/ModalView';
import ServerSelect from '../components/newGameplay/ServerSelect';

import { CategoryId } from '../assets/ts/categories';
import { theme } from '../global/styles/theme';


export default function NewGameplay() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | null>(null);
  const [showServerModal, setShowServerModal] = useState(false);
  const navigator = useNavigation();

  function toggleSelectedCategory(categoryId : CategoryId) {
    setSelectedCategory((previous) => (
      previous !== categoryId ? categoryId : null
    ));
  }

  return (
    <>
      <Layout header={{ title: "Marcar um gameplay", backIcon: true, shareIcon: false, }}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView>
            <View style={[styles.section]}>
              <Text style={[styles.label, styles.wrapper]}>Categoria</Text>
              <CategorySelect
                selectedCategory={selectedCategory}
                toggleSelectedCategory={toggleSelectedCategory}
                usesCheckbox
              />
            </View>
            <View style={[styles.section, styles.wrapper]}>
              <View style={styles.serverSelectContainer}>
                <RectButton
                  style={styles.serverSelectButton}
                  onPress={() => setShowServerModal(true) }  
                >
                  <Icon
                    size="small"
                  />
                  <View style={styles.serverSelectLabel} >
                    <Text style={[styles.label, styles.serverSelectLabelText]} >Selecione um servidor</Text>
                    <Ionicons
                      name="chevron-forward"
                      color={theme.colors.highlight}
                      width={8}
                      height={8}
                    />
                  </View>
                </RectButton>
              </View>
            </View>
            <View style={[styles.section, styles.wrapper, styles.dateInputContainer]}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.dateInput} >
                  <InputField size="small" keyboardType="numeric" maxLength={2} />
                  <Text style={styles.separator}>/</Text>
                  <InputField size="small" keyboardType="numeric" maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Horário</Text>
                <View style={styles.dateInput} >
                  <InputField size="small" keyboardType="numeric" maxLength={2} />
                  <Text style={styles.separator}>:</Text>
                  <InputField size="small" keyboardType="numeric" maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[styles.sectionDouble, styles.wrapper]}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Descrição</Text>
                <Text style={styles.labelSmall}>100</Text>
              </View>
              <InputField size="large" multiline maxLength={100} numberOfLines={4} />
            </View>
            <View style={[styles.wrapper, styles.sectionDouble]}>
              <Button
                size="large"
                callToAction="Marcar"
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Layout>

      <ModalView
        isVisible={ showServerModal }
        hideModal={ () => setShowServerModal(false) }
      >
        <RectButton onPress={() => setShowServerModal(false) }>
          <ServerSelect />
        </RectButton>
      </ModalView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    marginBottom: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  labelSmall: {
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    marginBottom: 12,
  },
  wrapper: {
    paddingHorizontal: 24,
  },
  section: {
    marginBottom: 28,
  },
  sectionDouble: {
    marginBottom: 56,
  },
  serverSelectButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  serverSelectContainer: {
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
  },
  serverSelectLabel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  serverSelectLabelText: {
    marginBottom: 0,
  },
  dateInputContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    fontSize: 15,
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text500,
    marginHorizontal: 4,
  },
});
