/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { MainNav } from './nav';
import { Root } from 'native-base';
import { LoginScene } from './scenes';
import { updateFetchedData } from './actions';
import { getRandomBook, fetchBook } from './Services';



const store = createStore(reducers);

getRandomBook().then(function(result) {
  return fetchBook(result).then(function(result) {
    debugger;
    store.dispatch(updateFetchedData(result));
    debugger;
  });
}).catch(function(err) {
  debugger;
});

export default class App extends Component<{}> {

  render() {
    return (
      <Provider store={store}>
        <Root style={styles.rootView}>
      		<MainNav />
        </Root>
      </Provider>
    );
  }
  
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  }
});
