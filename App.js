import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './Screens/Dashboard';
import Upcoming from './Screens/Upcoming';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddingService from './Screens/AddingService';
import UserDetails from './Screens/UserDetails';
import Launchscreen from './Screens/Launchscreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: 'false',
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'New') {
            iconName = focused ? 'plus' : 'plus';
          } else if (route.name === 'Upcoming Services') {
            iconName = focused ? 'rocket' : 'rocket';
          } else if (route.name === 'Account') {
            iconName = focused ? 'user' : 'user';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      //tabBarOptions={{
      //activeTintColor: 'tomato',
      //inactiveTintColor: 'gray',
      //}}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="New"
        component={AddingService}
        options={{
          title: 'Adding New Service',
          headerShown: false,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
      <Tab.Screen
        name="Upcoming Services"
        component={Upcoming}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={UserDetails}
        //options={{headerShown: false}}
        options={{
          title: 'Account Details',
          headerShown: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Launch" component={Launchscreen} />
        <Stack.Screen name="Home_Screen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
