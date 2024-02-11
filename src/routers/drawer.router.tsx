import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

import { TabRouters } from "./tab.routers";
import { StackRouter } from "./stack.router";

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

       <Drawer.Screen
        name="profile"
        component={StackRouter}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          drawerLabel: "My Profile",
        }}
      />
    </Drawer.Navigator>
  );
}
