/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import HotelsScreen from './screens/HotelsScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaProvider style={styles.backgroundStyle}>
      <GestureHandlerRootView style={styles.backgroundStyle}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={styles.backgroundStyle.backgroundColor}
        />
        <SafeAreaView>
          <HotelsScreen />
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  gestureHandlerView: {flex: 1},
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
