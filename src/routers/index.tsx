import { NavigationContainer } from "@react-navigation/native";

import { DrawerRouter } from "./drawer.router";

export function Router() {
  return (
    <NavigationContainer>
      <DrawerRouter />
    </NavigationContainer>
  );
}
