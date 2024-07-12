import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {data} from '../data';

function Allfoodscreen({navigation}) {
  const allfoods = data.reduce((acc, curr) => {
    return acc.concat(curr.foods);
  }, []);
  // console.log(allfoods);
  return (
    <ScrollView>
    <View>
      {allfoods.map((item)=>{
        return(
          <TouchableOpacity onPress={()=>navigation.navigate('Singlefood',{foods:item})}>
            <View>
            <Image source={item.image} className="w-[200px] h-[200px] relative" />
            <View className=" px-[120px] py-[110px] shadow-sm rounded-2xl absolute bottom-[-20px]"></View>
            <Text className="text-[30px]">{item.foodName}</Text>
            <Text className="text-[30px] text-[#FF7356]">Ksh {item.price}</Text>
           
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
    </ScrollView>
  )
}
export default Allfoodscreen;
