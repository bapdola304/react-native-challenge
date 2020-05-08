import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import avatar from '../assets/avatar.jpg';
import { taskList, settingList } from '../data/account';

class AccountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderList = () => {
    return (
      taskList.map(item => {
        return (
          <View style={styles.itemTask} key={item.id}>
            <MaterialCommunityIcons name={item.iconName} size={35} color="#85a1fc" />
            <Text>{item.text}</Text>
          </View>
        )
      })
    )
  }

  renderSettingList = () => {
    return (
      settingList.map(item => {
        return (
          <View style={styles.wrapItem} key={item.id}>
            <View>
              <MaterialIcons name={item.iconName} size={26} color={item.color} />
            </View>
            <View style={[styles.wrapText, item.isEndItem && styles.endItem]}>
              <Text style={styles.itemText}>{item.text}</Text>
              <View style={{ flexDirection: 'row' }}>
                {item.textArrow && <Text style={{ fontSize: 14, color: '#b3b5bc' }}>{item.textArrow}</Text>}
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#b3b5bc" />
              </View>
            </View>
          </View>
        )
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.header}>
            <MaterialCommunityIcons size={28} color="#494f54" name="bell-ring-outline" />
            <AntDesign size={28} color="#494f54" name="setting" />
          </View>
          <View style={styles.header}>
            <View>
              <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Hưng</Text>
              <View style={styles.wrapRole}>
                <View style={styles.crown}>
                  <FontAwesome5 name="crown" size={16} color="white" />
                </View>
                <View style={styles.role}>
                  <Text style={styles.roleText}>Manager</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={15} color="white" />
                </View>
              </View>
            </View>
            <View>
              <Image source={avatar} style={{ width: 80, height: 80, borderRadius: 40, borderColor: '#5d80fc', borderWidth: 1 }} />
            </View>
          </View>
          <View style={styles.task}>
            {this.renderList()}
          </View>
        </View>
        <ScrollView style={styles.content}>
          {this.renderSettingList()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  top: {
    borderBottomWidth: 1,
    borderColor: '#e1e3e6',
    paddingBottom: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 16
  },
  crown: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#5d80fc',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 9
  },
  role: {
    backgroundColor: '#5d80fc',
    paddingVertical: 3,
    paddingHorizontal: 12,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -15
  },
  roleText: {
    color: 'white',
    marginLeft: 10
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 16
  },
  wrapRole: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  content: {
    paddingHorizontal: 16
  },
  wrapItem: { flexDirection: 'row', paddingVertical: 18, justifyContent: 'space-between' },
  wrapText: { width: '80%', flexDirection: 'row', justifyContent: 'space-between' },
  itemText: { fontSize: 18, fontWeight: '400' },
  endItem: {
    borderBottomWidth: 1,
    borderColor: '#e1e3e6',
    paddingBottom: 20
  },
  itemTask: { flexDirection: 'column', alignItems: 'center' }
});

export default AccountComponent;
