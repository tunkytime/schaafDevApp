import {
  createStackNavigator,
  createAppContainer,
  withOrientation
} from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import LoginScreen from "./src/screens/LoginScreen";
import BuildNew from "./src/screens/BuldNew";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    New: BuildNew,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Schaaf Development"
    }
  }
);

export default createAppContainer(navigator);
