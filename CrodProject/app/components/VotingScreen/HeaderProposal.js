import React, { Component } from 'react';
import { StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as proposalsActions from '../../reducers/proposals/proposalsActions';

const backgroundImage = require('../../../img/backgroundvotingup.jpg');

class Proposal extends Component {

  render() {
    // Check if it is clicked on a proposal or it is clicked on a bottom bar votting
    const title = this.props.proposalId === -1 ? this.props.proposals.proposals[0].title
    : this.props.proposals.proposals.filter((x) => { return x.id === this.props.proposalId; })[0].title;
    return (
      <Image style={styles.container} source={backgroundImage}>

        <TouchableOpacity>
          <Icon style={styles.arrow} name="arrow-left" size={35} />
        </TouchableOpacity>

        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity>
          <Icon style={styles.arrow} name="arrow-right" size={35} />
        </TouchableOpacity>

      </Image>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    width: null,
    height: Dimensions.get('window').height / 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  arrow: {
    color: 'rgba(255, 255, 255, 0.6)',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'transparent',
  }
});

// Redux boilerplate
function mapStateToProps(state) {
  return {
    proposals: state.proposals,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(proposalsActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Proposal);