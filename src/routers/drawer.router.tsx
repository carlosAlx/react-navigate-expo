import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import { TabRouters } from "./tab.routers";

const Drawer = createDrawerNavigator();

export function DrawerRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={TabRouters}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "home",
        }}
      />
    </Drawer.Navigator>
  );
}
