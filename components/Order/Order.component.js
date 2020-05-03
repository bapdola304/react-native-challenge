import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Tab, Tabs } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import product01 from '../../assets/product01.png'
import product02 from '../../assets/product02.png'
import product03 from '../../assets/product03.png'
import { Button } from 'react-native-paper';
import AllComponent from './All.component';

class OrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapHeader}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Order</Text>
          <AntDesign name="search1" size={20} style={styles.searchIcon} color="#bfcad9" />
        </View>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: '#5d80fc' }} tabContainerStyle={{ elevation: 0 }}>
          <Tab heading="All" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.activeTextStyle} textStyle={styles.textStyle}>
            <AllComponent />
          </Tab>
          <Tab heading="Obligation" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.activeTextStyle} textStyle={styles.textStyle}>
            <Text>Obligation</Text>
          </Tab>
          <Tab heading="Submitted" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.activeTextStyle} textStyle={styles.textStyle}>
            <Text>Submitted</Text>
          </Tab>
          <Tab heading="Done" tabStyle={styles.tabStyle} activeTabStyle={styles.activeTabStyle} activeTextStyle={styles.activeTextStyle} textStyle={styles.textStyle}>
            <Text>Done</Text>
          </Tab>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 16,
  },
  searchIcon: {
    color: '#000',
    fontWeight: 'bold'
  },
  tabStyle: {
    backgroundColor: '#ffffff',
    borderColor: 'red'
  },
  activeTabStyle: {
    backgroundColor: '#ffffff'
  },
  activeTextStyle: {
    color: '#5d80fc'
  },
  textStyle: {
    color: '#585e61',
    fontWeight: '400'
  }
});

export default OrderComponent;
