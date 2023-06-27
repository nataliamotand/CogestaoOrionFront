import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './pages/Home';
import Lembretes from './pages/Lembretes';
// import Login from "./compenents/Login";

const Tab = createBottomTabNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                {/* <Tab.Screen name="Login" component={Login}></Tab.Screen> */}
                <Tab.Screen name="Home" component={Home}></Tab.Screen>
                <Tab.Screen name="Lembretes" component={Lembretes}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Routes;