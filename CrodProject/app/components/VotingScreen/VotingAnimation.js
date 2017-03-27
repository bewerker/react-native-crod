'use strict'
// Android element elevation defined for middle voting image
import React, { Component } from 'react';
import {StyleSheet,Text, Image,View,Animated,PanResponder,Dimensions} from 'react-native';
let WindowWidth = Dimensions.get('window').width;
let WindowHeight = Dimensions.get('window').height;

const backgroundImage = require("../../../img/crowlogo.png")

// if dragging is less than this number the vote is yes
const voteNo = 30;
// if dragging is bigger than this number the vote is no
const voteYes = WindowWidth - voteNo;

class VotingAnimation extends Component {

  constructor(props){
      super(props);
      this.state = {
        isVoted   : false,
        pan       : new Animated.ValueXY()
      };

      // panResponder for dragging votes
      this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder    : () => !this.state.isVoted,
        onPanResponderMove              : Animated.event([null,{
            dx  : this.state.pan.x,
        }]),
        onPanResponderRelease           : (e, gesture) => {
            if(this.isDropZone(gesture)) return
            // Show animation when user not clicked
            Animated.spring(
                this.state.pan,
                {toValue:{x:0,y:0}}
            ).start();
        }
      });

  }

  /*
    @param gesture: (X) position of dragging voting
    @return {boolean}: true => user voted, false => user didnt vote
  */
  isDropZone(gesture){
    // console.log('gesture.moveX : ' + gesture.moveX);
    // console.log('voteNo : ' + voteNo);
    // console.log('voteYes : ' + voteYes);
    if (gesture.moveX < voteNo) {
      this.setState({isVoted   : true})
      this.onVoted(true)
      return true;
    }
    else if (gesture.moveX > voteYes) {
      this.setState({isVoted   : true})
      this.onVoted(false)
      return true;
    }
    else return false;
  }

  /*
    @param voted {boolean}: true=>voted yes, false=>voted no
  */
  onVoted(voted){
    /* TODO: 1. show statistics */
    /* TODO: 2. show total yes/no votes instead of the voting bar */
    /* TODO: 3. user cannot vote anymore for this topic */
  }

  render() {
    return (
        <View style={styles.votingBar}>
          <View style={styles.votingBarRed}/>
          <View style={styles.votingBarGreen}/>
          <View style={styles.votingBarMiddle} >
            <Animated.View style={[this.state.pan.getLayout(),{flex:1, elevation:1}]} {...this.panResponder.panHandlers}>
              <Image source={backgroundImage} style={styles.middleImage} />
            </Animated.View>
          </View>
        </View>

    )
  }

}

const middleButtonBigger = 15
const middleButtonWidth  = WindowWidth / 7;
const middleButtonHeight = WindowHeight*1/13*5/6 +middleButtonBigger;
const middleButtonLeft = (WindowWidth / 2) - (middleButtonWidth/2)

const styles = StyleSheet.create({
  votingBar:{
    flex:1,
    flexDirection: 'row',
  },
  votingBarRed:{
    flex:3,
    backgroundColor: 'red'
  },
  votingBarMiddle:{
    // flex:1,
    position: 'absolute',
    left:middleButtonLeft,
    top:-middleButtonBigger/2,
    width: middleButtonWidth,
    height: middleButtonHeight,
  },
  middleImage:{
    flex:1,
    width:null,
    height:null,
    resizeMode: 'stretch'
  },
  votingBarGreen:{
    flex:3,
    backgroundColor: 'green'
  },
});

module.exports = VotingAnimation