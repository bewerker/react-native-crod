import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import Tabs from 'react-native-tabs';
import ProfileHistory from '../ProfileScreen/ProfileHistory.js'
import ProfileProposal from '../ProfileScreen/ProfileProposal.js'

const backgroundImage = require("../../../img/backgroundblu.jpg")

class ProfileBody extends Component {

  constructor(props){
      super(props);
      this.state = {page:'proposal'};
    }

  render() {
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page}
            onSelect={el=>this.onSelectedTab(el)}
            style={styles.tabs}>
            <Text name="proposal" style={styles.textStyle}
                  selectedIconStyle={styles.tabsSelectedOne}>Your Proposals</Text>
            <Text name="history" style={styles.textStyle}
                  selectedIconStyle={styles.tabsSelectedTwo}>History votes </Text>
        </Tabs>
        {this._renderTabContent()}

      </View>


    )
  }

  _renderTabContent(){
    console.log("_renderTabContent");
    switch (this.state.page) {
      case 'proposal':
        return(
          <ProfileProposal  />
        )
      case 'history':
      return(
        <ProfileHistory />
      );
    }
  }

  onSelectedTab(el){
    this.setState({page:el.props.name})
  }

}

const styles = StyleSheet.create({
  container: {
    flex:8,
    width: null, height: null
  },
  textStyle:{
    fontSize: 18.5
  },
  tabs: {
    position:'relative',
  },
  tabsSelectedOne: {
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#1fbff1'
  },
  tabsSelectedTwo: {
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#1fbff1'
  },

});

module.exports = ProfileBody
