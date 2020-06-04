import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile60349Navigator from '../features/UserProfile60349/navigator';
import Tutorial60348Navigator from '../features/Tutorial60348/navigator';
import NotificationList60320Navigator from '../features/NotificationList60320/navigator';
import Settings60319Navigator from '../features/Settings60319/navigator';
import Settings60311Navigator from '../features/Settings60311/navigator';
import UserProfile60309Navigator from '../features/UserProfile60309/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile60349: { screen: UserProfile60349Navigator },
Tutorial60348: { screen: Tutorial60348Navigator },
NotificationList60320: { screen: NotificationList60320Navigator },
Settings60319: { screen: Settings60319Navigator },
Settings60311: { screen: Settings60311Navigator },
UserProfile60309: { screen: UserProfile60309Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
