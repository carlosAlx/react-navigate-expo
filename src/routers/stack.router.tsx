import { createNativeStackNavigator} from "@react-navigation/native-stack";

import { TabRouters } from "./tab.routers";
import Profile from "../screens/Profile";

const Stack = createNativeStackNavigator();

export function StackRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Profile}
      />
    </Stack.Navigator>
  );
}
