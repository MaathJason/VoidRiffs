import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/LoginScreen";
import Home from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function AppNavigation(){
    return(
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}