import { NavigationContainer } from "@react-navigation/native";
import { TabRouters } from "./tab.routers";

export function Router() {
  return (
    <NavigationContainer>
      <TabRouters />
    </NavigationContainer>
  );
}
