import React, { Component } from 'react';
import {StyleSheet,Text,Image,Dimensions} from 'react-native';
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import * as proposalsActions from '../../reducers/proposals/proposalsActions'

import proposals from '../../data-manager/proposals'
const backgroundImage = require("../../../img/backgroundvotingup.jpg")

class Proposal extends Component {

  render() {
  // console.log(this.props.colorChange)
    return (
      <Image style={styles.container} source={backgroundImage}>
        <Text style={styles.title}>
          TEST
        </Text>

      </Image>

    )
  }

}

const styles = StyleSheet.create({
  container:{
    width: null, height:Dimensions.get('window').height/5 ,
     justifyContent: 'center'
  },
  title:{
    marginLeft: 10,
    marginTop: 40,
    fontSize: 15,
    fontWeight:'bold',
    fontSize: 19,
  },
});

module.exports = Proposal
