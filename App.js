import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Home
import Index from './src/screens/home/Index';
// Screens 2.1.6
import Bai1 from './src/screens/Bai2_1_6/Bai1';
import Bai2 from './src/screens/Bai2_1_6/Bai2';
// Sreens 2.2
import Bai2_2_1 from './src/screens/Bai2_2/Bai2_2_1';
import Bai2_2_2 from './src/screens/Bai2_2/Bai2_2_2';
import Bai2_2_3 from './src/screens/Bai2_2/Bai2_2_3';
// Sreens 2.3
import Bai2_3_1 from './src/screens/Bai2_3/Bai2_3_1';
import Bai2_3_2 from './src/screens/Bai2_3/Bai2_3_2';
import Bai2_3_3 from './src/screens/Bai2_3/Bai2_3_3';
import Bai2_3_4 from './src/screens/Bai2_3/Bai2_3_4';
import Bai2_3_5 from './src/screens/Bai2_3/Bai2_3_5';
import Bai2_3_6 from './src/screens/Bai2_3/Bai2_3_6';
// Sreens 2.4
import Bai2_4_1 from './src/screens/Bai2_4/Bai2_4_1';
import Bai2_4_2 from './src/screens/Bai2_4/Bai2_4_2';
import Bai2_4_3 from './src/screens/Bai2_4/Bai2_4_3';
// Sreens 3
import Bai3_1 from './src/screens/Bai3/Bai3_1';
import Bai3_1_new from './src/screens/Bai3/component_new/Bai3_1_new';
import Bai3_2 from './src/screens/Bai3/Bai3_2';
import Bai3_3 from './src/screens/Bai3/Bai3_3';
import Bai3_4 from './src/screens/Bai3/Bai3_4';
// Screens 4
import Bai4_1 from './src/screens/Bai4/Bai4_1';
import Bai4_2 from './src/screens/Bai4/Bai4_2';
import Bai4_3 from './src/screens/Bai4/Bai4_3';
// Screens 5
import Bai5_1 from './src/screens/Bai5/Bai5_1';
import Bai5_2 from './src/screens/Bai5/Bai5_2';
// Screens 6
import Bai6_1 from './src/screens/Bai6/Bai6_1';
import Bai6_2 from './src/screens/Bai6/Bai6_2';
import Bai6_3 from './src/screens/Bai6/Bai6_3';

// Screens 8
import Bai8 from './src/screens/Bai8/Bai8';

// Screens 9
import Bai9_1 from './src/screens/Bai9/Bai9_1';
import Bai9_2 from './src/screens/Bai9/Bai9_2';
// Project Karaoke
import IndexKara from './src/screens/ProjectKaraoke/IndexKara';
const App = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  // Bài 2.1.6
  function Bai2_1_6() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 1" component={Bai1} />
        <Tab.Screen name="Bài 2" component={Bai2} />
      </Tab.Navigator>
    );
  }
  // Bài 2.2
  function Bai2_2() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 2_2_1" component={Bai2_2_1} />
        <Tab.Screen name="Bài 2_2_2" component={Bai2_2_2} />
        <Tab.Screen name="Bài 2_2_3" component={Bai2_2_3} />
      </Tab.Navigator>
    );
  }

  // Bài 2.3
  function Bai2_3() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 2_3_1" component={Bai2_3_1} />
        <Tab.Screen name="Bài 2_3_2" component={Bai2_3_2} />
        <Tab.Screen name="Bài 2_3_3" component={Bai2_3_3} />
        <Tab.Screen name="Bài 2_3_4" component={Bai2_3_4} />
        <Tab.Screen name="Bài 2_3_5" component={Bai2_3_5} />
        <Tab.Screen name="Bài 2_3_6" component={Bai2_3_6} />
      </Tab.Navigator>
    );
  }
  // Bài 2.4
  function Bai2_4() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 2_4_1" component={Bai2_4_1} />
        <Tab.Screen name="Bài 2_4_2" component={Bai2_4_2} />
        <Tab.Screen name="Bài 2_4_3" component={Bai2_4_3} />
      </Tab.Navigator>
    );
  }
  // Bài 3
  function Bai3() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 3_1" component={Bai3_1} />
        <Tab.Screen name="Bài 3_2" component={Bai3_2} />
        <Tab.Screen name="Bài 3_3" component={Bai3_3} />
        <Tab.Screen name="Bài 3_4" component={Bai3_4} />
      </Tab.Navigator>
    );
  }
  // Bài 4
  function Bai4() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 4_1" component={Bai4_1} />
        <Tab.Screen name="Bài 4_2" component={Bai4_2} />
        <Tab.Screen name="Bài 4_3" component={Bai4_3} />
      </Tab.Navigator>
    );
  }
  // Bài 5
  function Bai5() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 5_1" component={Bai5_1} />
        <Tab.Screen name="Bài 5_2" component={Bai5_2} />
      </Tab.Navigator>
    );
  }
  // Bài 6
  function Bai6() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 6_1" component={Bai6_1} />
        <Tab.Screen name="Bài 6_2" component={Bai6_2} />
        <Tab.Screen name="Bài 6_3" component={Bai6_3} />
      </Tab.Navigator>
    );
  }
  // Bài 9
  function Bai9() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Bài 9_1" component={Bai9_1} />
        <Tab.Screen name="Bài 9_2" component={Bai9_2} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 26,
          },
        }}>
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Bài 2_1_6" component={Bai2_1_6} />
        <Stack.Screen name="Bài 2_2" component={Bai2_2} />
        <Stack.Screen name="Bài 2_3" component={Bai2_3} />
        <Stack.Screen name="Bài 2_4" component={Bai2_4} />
        <Stack.Screen name="Bài 3" component={Bai3} />
        <Stack.Screen name="Bài 4" component={Bai4} />
        <Stack.Screen name="Bài 5" component={Bai5} />
        <Stack.Screen name="Bài 6" component={Bai6} />
        <Stack.Screen name="Bài 8" component={Bai8} />
        <Stack.Screen name="Bài 9" component={Bai9} />
        <Stack.Screen name="Karaoke" component={IndexKara} />
        <Stack.Screen name="Bài 3_1_new" component={Bai3_1_new} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
