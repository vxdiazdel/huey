import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Settings from '../screens/Settings';

export default StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: () => null,
      gesturesEnabled: false,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Scenes',
      gesturesEnabled: false,
    },
  },
  Settings: {
    screen: Settings,
    mode: 'modal',
    navigationOptions: {
      title: 'Settings',
    },
  },
}, {
  headerMode: 'screen',
});
