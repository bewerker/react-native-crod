import React, { Component } from 'react';
import {StyleSheet,TextInput,TouchableOpacity,Image,Text,View} from 'react-native';
import ViewContainer from '../components/ViewContainer.js'
import Header from '../components/HomeScreen/Header.js'
import Body from '../components/HomeScreen/Body.js'

class HomeScreen extends Component {


  render() {

    return (
      <ViewContainer>
      {/*The id of the category icon coming from HomeScreen/CategoryMenu.js is passed as a prop in the HomeScreen/Header.js  */}
      <Header categoryId = {this.props.categoryId} />
      <Body />
      </ViewContainer>

    )
  }

}

const styles = StyleSheet.create({

});

module.exports = HomeScreen
