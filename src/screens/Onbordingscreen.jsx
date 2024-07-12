import {Text, View, Image, TextInput, Button} from 'react-native';
import {slides} from './src/slides';
import AppIntroSlider from 'react-native-app-intro-slider';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './src/screens/Homescreen';
import Loginscreen from './src/screens/Loginscreen';
import Signupscreen from './src/screens/Signupscreen';
import Singlefoodscreen from './src/screens/Singlefoodscreen';
import Categoryscreen from './src/screens/Categoryscreen';
import Cartscreen from './src/screens/Cartscreen';
import Allfoodscreen from './src/screens/Allfoodscreen';

function Onboarding(){
    const Stack = createStackNavigator();
    const buttonLabel = label => {
      return <Text className="text-[#FF7356] text-2xl">{label}</Text>;
    };
    function stackNavigation() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signupscreen} />
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="login" component={Loginscreen} />
          <Stack.Screen name="Singlefood" component={Singlefoodscreen} />
          <Stack.Screen name="category" component={Categoryscreen} />
          <Stack.Screen name="cart" component={Cartscreen} />
          <Stack.Screen name="Allfood" component={Allfoodscreen} />
        </Stack.Navigator>
      );
  
    }
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
      />
    );
}

export default Onboarding