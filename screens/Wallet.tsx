import { AssetsList } from '../components/AssetsList';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function Wallet({ navigation }: RootTabScreenProps<'Wallet'>) {
  return (
    <LinearGradient colors={['#2f6437', '#0e110e', '#000000']} locations={[0, 0.7, 1]} style={styles.container}>
      <View style={styles.balanceWrapper}>
        <Text style={styles.balance}>$142.12</Text>
      </View>
      <View style={styles.contentWrapper}>
        <Text style={styles.header}>Assets</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <AssetsList />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  contentWrapper: {
    width: '94%',
    alignSelf: 'center',
    backgroundColor: '#131313',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 1
  },
  balanceWrapper: {
    height: 200,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  balance: {
    fontSize: 30,
    textAlign: 'center'
  },
  separator: {
    marginBottom: 30,
    height: 1,
    width: '100%',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 20
  }
});
