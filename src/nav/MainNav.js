import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { LoginScene, MainScene, SearchScene, MapScene, UserScene } from '../scenes';
import { Requests, UserSearch, UserDetails } from '../scenes/Admin';
import { Icon } from 'native-base';

const MainNav = TabNavigator(
{
	Main: {
		screen: MainScene,
		navigationOptions: {
			tabBarIcon: ({ tintColor }) => (<Icon name='paper' style={{fontSize: 25, color: {tintColor}}} />),
	    tabBarLabel: 'Explore',    	
		}
	},
	Search: {
		screen: SearchScene,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='paper' style={{fontSize: 25, color: {tintColor}}} />),
      tabBarLabel: 'Search',    
	  }
  },
  Map: {
    screen: MapScene,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='paper' style={{fontSize: 25, color: {tintColor}}} />),
      tabBarLabel: 'Map',    
    }
  },
  User: {
    screen: UserScene,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='paper' style={{fontSize: 25, color: {tintColor}}} />),
      tabBarLabel: 'User',    
    }
  }
},
	{
  		tabBarPosition: 'bottom',
  		animationEnabled: true,
  		tabBarOptions: {
  			showLabel: true,
    		inactiveBackgroundColor: '#363636',
    		activeBackgroundColor: '#363636', 
    		inactiveTintColor: 'white',
    		activeTintColor: 'white',
    		style: {
    			height: 0,
    			backgroundColor: '#363636',
    		}
    	}
	}
);


const AdminNav = TabNavigator(
{
  Requests: {
    screen: Requests,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='paper' style={{fontSize: 25, color: {tintColor}}} />),
      tabBarLabel: 'Map',    
    }
  },
  UserSearch: {
    screen: UserSearch,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='paper' style={{fontSize: 25, color: {tintColor}}} />),
      tabBarLabel: 'Map',    
    }
  },
  UserDetails: {
    screen: UserDetails,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='paper' style={{fontSize: 25, color: {tintColor}}} />),
      tabBarLabel: 'Map',    
    }
  }
},
  {
      tabBarPosition: 'bottom',
      animationEnabled: true,
      tabBarOptions: {
        showLabel: true,
        inactiveBackgroundColor: '#363636',
        activeBackgroundColor: '#363636', 
        inactiveTintColor: 'white',
        activeTintColor: 'white',
        style: {
          height: 0,
          backgroundColor: '#363636',
        }
      }
  }
);


const MainFinalNav = StackNavigator(
{
  Login: {
    screen: LoginScene,
    path: 'login',
  },
  Main: {
    screen: MainNav,
    path: 'main'
  },
  Admin: {
    screen: AdminNav,
    path: 'admin'
  }

},
{
  headerMode: 'none'
}

);


export default MainFinalNav;