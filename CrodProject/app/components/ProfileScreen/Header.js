/*
  Created by Mohammad Jafarzadeh Rezvan, Brigel Pineti

  Header
*/
'use strict';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const profileImage = require('../../../img/brigelTestImage.png');

class ProfileHeader extends Component {

  render() {
    return (
      <Image style={styles.container} source={profileImage}>
        <TouchableOpacity style={styles.pencilContainer}>
        <Icon name="pencil" style={styles.pencilIcon} />
        </TouchableOpacity>
        <Text style={[styles.profileText, styles.profileName]}>Michele Paoletti</Text>
        <Text style={styles.profileText}>23 years old</Text>
        <Text style={styles.profileText}>from Milan</Text>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3.5,
    width: null,
    height: null,
    resizeMode: 'stretch',
    paddingBottom: 5,
    paddingTop: 20,
    justifyContent: 'flex-end',
    // backgroundColor: 'blue'
  },
  profileText: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'transparent',
  },
  profileName: {
    fontSize: 25
  },
  pencilContainer: {
    position: 'absolute',
    left: Dimensions.get('window').width - 20,
    top: 10,
    backgroundColor: 'transparent',
  },
  pencilIcon: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});

module.exports = ProfileHeader;
