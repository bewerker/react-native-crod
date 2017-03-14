import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'
import Initial from '../components/LauncherScreen/Initial'
import Information from '../components/LauncherScreen/Information'
import Login from '../components/LauncherScreen/Login'


class LauncherScreenLogin extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Swiper loop={false} autoplay={true} showsPagination={false} autoplayTimeout={5} >
        <Initial />
        <Information />
        <Login navigator={this.props.navigator} />
      </Swiper>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#024287',
  },
  input: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
  },
  password: {
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
    marginBottom: 30
  },
  buttonContainer: {
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    marginBottom: 10,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#024287'
  },
  loginText: {
    color: 'white',
    alignSelf: "center"
  },
});

module.exports = LauncherScreenLogin
