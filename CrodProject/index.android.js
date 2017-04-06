import React, { Component } from 'react';
import {AppRegistry,Image,StyleSheet} from 'react-native';
import LauncherScreen from './app/screens/LauncherScreen'
import HomeScreen from './app/screens/HomeScreen'
import ProfileScreen from './app/screens/ProfileScreen'
import NotificationScreen from './app/screens/NotificationScreen'
import VotingScreen from './app/screens/VotingScreen'
import {Router, Scene, Actions, ActionConst} from 'react-native-router-flux';

const TabIcon = ({ selected, source }) => {
  return (
    <Image style={[styles.icon, {tintColor: selected ? '#000' :'white'}]} source={source}/>
  );
}

// define this based on the styles/dimensions you use
const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
  };
  if (computedProps.isActive) {
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};


class CrodProject extends Component {

  render() {
    return (
      <Router  getSceneStyle={getSceneStyle}>
        <Scene key='root' hideNavBar hideTabBar>
          <Scene key="footerTab"
                 tabs={true}
                 hideNavBar
                 tabBarStyle={styles.customizeFooter}>
                 <Scene key="launcherTab" source={require('./img/back-icon.png')}
                        icon={TabIcon} onPress={()=> {Actions.launcher({type: ActionConst.REFRESH}) }}>
                        <Scene key='launcher' component={LauncherScreen} hideNavBar/>
                        </Scene>
                 <Scene key="homeTab" source={require('./img/home-icon.png')}
                        icon={TabIcon} onPress={()=> {Actions.home({type: ActionConst.REFRESH})}} >
                        <Scene key='home' component={HomeScreen} hideNavBar/>
                 </Scene>
                 <Scene key="profileTab" source={require('./img/profile-icon.png')}
                        icon={TabIcon} onPress={()=> {Actions.profile({type: ActionConst.REFRESH}) }} initial >
                        <Scene key='profile' component={ProfileScreen} hideNavBar/>
                </Scene>
                 <Scene key="notificationTab" source={require('./img/notification-icon.png')}
                        icon={TabIcon} onPress={()=> {Actions.notification({type: ActionConst.REFRESH}) }}>
                        <Scene key='notification' component={NotificationScreen} hideNavBar />
                </Scene>
                {/* voting scene should be inside another scene, otherwise Actions.refresh doesnt work */}
                <Scene key='votingTab' >
                  <Scene key='voting' component={VotingScreen} hideNavBar />
                </Scene>

          </Scene>

        </Scene>


      </Router>
    )
  }

}
const styles = StyleSheet.create({

  customizeFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#88B3D9',
    //opacity: 50
  },
  icon:{
    resizeMode: 'center'
  }
  });


AppRegistry.registerComponent('CrodProject', () => CrodProject);
