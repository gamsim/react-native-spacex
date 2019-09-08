import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import PhotosScreen from '../screens/PhotosScreen';
import TabImage from '../components/TabImage';

import colors from '../constants/colors';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Home',
    animationEnabled: false,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    }),
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.black
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const PhotosStack = createStackNavigator(
  {
    Photos: PhotosScreen
  },
  {
    initialRouteName: 'Photos',
    animationEnabled: false,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    }),
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.black
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Photos: PhotosStack
  },
  {
    defaultNavigationOptions: ({navigation}: any) => ({
      tabBarOptions: {
        showLabel: false,
        style: {
          borderTopWidth: 0,
          backgroundColor: colors.grey
        }
      },
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconName;

        if (routeName === 'Home') {
          iconName = `tabHome`;
        } else if (routeName === 'Photos') {
          iconName = `tabPhotos`;
        }
        return (
          <TabImage
            iconName={iconName}
            size={32}
            color={focused ? colors.purple : colors.black}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default createAppContainer(AppNavigator);
