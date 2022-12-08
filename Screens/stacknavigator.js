import { createStackNavigator } from '@react-navigation/stack';
import CakeDetail from './CakeDetail';
import CakeList from './CakeList';


const Stack = createStackNavigator();

function MyStack() {
    console.log("tested")
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CakeDetail} />
      <Stack.Screen name ="Detail" component={CakeList} />
    </Stack.Navigator>
  );
}