import {View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
// import Categoryscreen from './src/screens/Categoryscreen';
import {data} from '../data';
import {useContext, useEffect} from 'react';
import State from '../context/state';
import {StateContext} from '../context/state';
import {getDoc, doc} from 'firebase/firestore';
import {getFirestore} from 'firebase/firestore';
import app from '../../firebase';
function Homescreen({navigation}) {
  const db = getFirestore(app);

  const {currentUserId, setCurrentUserId, currentUser, setCurrentUser} =
    useContext(StateContext);
  useEffect(() => {
    // console.log(currentUserId);
    const getData = async () => {
      const docSnap = await getDoc(doc(db, 'storage', currentUserId));
      setCurrentUser(docSnap.data());
    };
    getData();
  }, []);

  return (
    <ScrollView>
    <View className="bg-white">
    
      <Text className="text-2xl text-black">{`Hi, ${currentUser.firstName}`}</Text>
      <Text>Let’s grab your food!</Text>
      <TextInput
        placeholder="Search for food"
        className="bg-[#F0F0F0] rounded-full  py-5 mx-3 my-3 px-11"></TextInput>
      <Text className="text-black text-3xl my-[4px] font-bold">
        Food Categories
      </Text>

      {data.map(item => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('category', {foods: item.foods})
            }>
            <View>
              <Image
                source={item.categoryImage}
                className="w-[100px] h-10  bg-[#F0F0F0] rounded-full p-20"
              />
              <Text className="items-center">{item.categoryName}</Text>
            </View>
          </TouchableOpacity>
        );
      })}

      <View>
        <Text className="text-black text-3xl font-bold my-[20px] ">
          Food For You
        </Text>
        <View className="shadow bg-[#F0F0F0] rounded-t-2xl ">
          {/* <Image
            source={require('../../images/githeri.jpg')}
            className="w-[500px] h-40"
          /> */}
          <Text className="text-black text-2xl">Githeri Curry</Text>
          <View className="flex justify-between">
            <Text>20 mins</Text>
            <Text>5.7</Text>
          </View>
          <Text className="text-black text-2xl">KSh 300</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
export default Homescreen;
