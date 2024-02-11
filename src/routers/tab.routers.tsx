import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import New from "../screens/New";
import Feed from "../screens/Feed";

const Tab = createBottomTabNavigator();

export function TabRouters() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="feed" component={Feed} />
      <Tab.Screen name="new" component={New} />
    </Tab.Navigator>
  );
}
