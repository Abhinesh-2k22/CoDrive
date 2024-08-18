import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { Input, Icon } from '@rneui/themed';

const Signup = ({navigation}) => {
  return (
 <SafeAreaView>
  
    <View className="bg-customlviolet h-full w-full">
    <Text className="text-white mx-auto my-20 font-extrabold text-5xl">Sign Up</Text> 
    <Input
      placeholder='Enter Username'
    />
    <Input
      placeholder='Enter Password'
    />
    <Input
      placeholder='Enter Email'
    />
    <Input
      placeholder='Enter Mobile number'
    />
     <View className="flex-row my-2">
       <Pressable onPress={()=>navigation.navigate("signup2")}><Text className="mx-5 font-bold underline">Signup as rider</Text></Pressable>
       <Pressable onPress={()=>navigation.navigate("signup3")}><Text className="mx-20 font-bold underline">Signup as Passenger</Text></Pressable>
     </View>
       <Image className=" -bottom-42 w-1=92 h-80 bottom-5 -left-5 " source={require("D:/abhi/programming/github/CoDrive-project/CoDrive/assets/Saly-3.png")}/>
     

    </View>
    
   
    
 </SafeAreaView>
  )
}

export default Signup

