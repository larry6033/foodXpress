import {Text, View, Image, TextInput, Button} from 'react-native';
import {slides} from './src/slides';
import AppIntroSlider from 'react-native-app-intro-slider';
// import {createStackNavigator} from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './src/screens/Homescreen';
import Loginscreen from './src/screens/Loginscreen';
import Signupscreen from './src/screens/Signupscreen';
import Singlefoodscreen from './src/screens/Singlefoodscreen';
import Categoryscreen from './src/screens/Categoryscreen';
import Cartscreen from './src/screens/Cartscreen';
import Allfoodscreen from './src/screens/Allfoodscreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {Icon} from 'react-native-vector-icons/fontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profilescreen from './src/screens/Profilescreen';
import State from './src/context/state';
function App() {
  // const Stack = createStackNavigator();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const [showStack, setShowStack] = useState(false);
  const buttonLabel = label => {
    return <Text className="text-[#FF7356] text-2xl">{label}</Text>;
  };
  function StackNavigation() {
    return (
      <Stack.Navigator
       initialRouteName="Home"
      >
        <Stack.Screen name="login" component={Loginscreen} />
        <Stack.Screen name="Signup" component={Signupscreen} />
        <Stack.Screen name="cart" component={Cartscreen} />
        {/* <Stack.Screen name="Allfood" component={Allfoodscreen} /> */}
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Singlefood" component={Singlefoodscreen} />
        <Stack.Screen name="category" component={Categoryscreen} />
        <Stack.Screen name="profile" component={Profilescreen} />
      </Stack.Navigator>
    );
  }

  function TabNavigation() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="homeTab"
          component={StackNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="home" color="black" size={30} />,
          }}
        />
        <Tab.Screen
          name="MenuTab"
          component={Allfoodscreen}
          options={{
            tabBarLabel: 'Menu' ,
            tabBarIcon: () => <Icon name="bars" color="black" size={30} />,
          }}
        />
        <Tab.Screen
          name="cartTab"
          component={Cartscreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: () => (
              <Icon name="shopping-cart" color="black" size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={Profilescreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => <Icon name="user" color="black" size={30} />,
          }}
        />
      </Tab.Navigator>
    );
  }
  if (!showStack) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View>
              <Image source={item.image} />
              <Text className="text-black text-4xl font-bold text-center my-6">
                {item.title}
              </Text>
              <Text className="text-2xl text-center">{item.description}</Text>
            </View>
          );
        }}
        showSkipButton
        renderSkipButton={() => buttonLabel('skip')}
        renderNextButton={() => buttonLabel('next')}
        renderDoneButton={() => buttonLabel('Done')}
        onSkip={() => setShowStack(true)}
        onDone={() => setShowStack(true)}
      />
    );
  } else {
    return (
      <State>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </State>
    );
  }
}

export default App;
