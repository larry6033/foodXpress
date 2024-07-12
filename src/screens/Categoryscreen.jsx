import {Text, TextInput, View, Image, TouchableOpacity, ScrollView} from 'react-native';
function Categoryscreen({route, navigation}) {
 
  const {foods} = route.params;
  // console.log(foods);
  return(
    <ScrollView>
    <View>
    {
      foods.map(item => {
        return (
          <TouchableOpacity onPress={()=>navigation.navigate('Singlefood',{foods:item})}>
          <View className="flex justify-center items-center bg-gray-100">
           <Image source={item.image} className="w-[200px] h-[200px] relative bottom-[-30px]" />
            <View className="bg-white px-8 py-20 rounded-3xl">
            <Text className="text-[30px]">{item.foodName}</Text>
            <Text className="text-[30px] text-[#FF7356]">Ksh {item.price}</Text>
           </View>
           </View>
          </TouchableOpacity>
        );
      })
    }
    </View>
    </ScrollView>
  )
}
export default Categoryscreen;