import React, { Component } from 'react';
import { ScrollView, StyleSheet,TextInput,TouchableOpacity,Image,Text,View,ListView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import proposals from '../../data-manager/proposals'
import ProposalTitle from './ProposalTitle'
import {Actions, ActionConst} from 'react-native-router-flux';

const voteNoSource = require("../../../img/dislike.png")
const voteYesSource = require("../../../img/like.png")
const dividerImage = require("../../../img/dividerblue.jpg")


class ProposalFeed extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(proposals),
    };
  }

  render() {
    return (
      <View style={styles.proposalFeed}>
        <View style={styles.angleRightRoot}>
          <Icon name={!this.props.changeArrow ? 'angle-right' : 'angle-left'} style={styles.angleRight} size={40} />
        </View>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(proposal) => {return this._renderProposalRow(proposal)} }
      />

      </View>
    )
  }

  /*
    Rendering Each row of ListView
    TODO: get the user info and show history for only that user.
    @param proposal: the proposal elements from /data-manager/proposal.js
  */
  _renderProposalRow(proposal){
    // console.log(proposal);
    return(
      <View>

      <TouchableOpacity style={styles.rowProposalRoot} onPress={this.proposalClicked.bind(this,proposal)}>
      <ProposalTitle text={proposal.title} />

        <Text style={styles.deadline}>
            {proposal.deadline}
        </Text>

      </TouchableOpacity>
      <Image style={{height: 2}} source={dividerImage}/>
      </View>
    )
  }

  /*
    When the row of proposal clicked
    @param proposal: the proposal elements from /data-manager/proposal.js
    TODO: change the proposal object with proposal id
  */
  proposalClicked = (proposal) => {
    Actions.voting({type: ActionConst.REFRESH, proposalId: proposal.id})
  }
}

const styles = StyleSheet.create({
  proposalFeed:{
    flexDirection: 'row',
    flex:8,
    backgroundColor: 'white'
  },
  rowProposalRoot:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  deadline: {
    fontSize: 10,
    flex:1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  angleRightRoot: {
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#1fbff1',
    justifyContent: 'center'
  },
  angleRight: {
    color: 'white',
  },
});


module.exports = ProposalFeed
