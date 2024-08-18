import { Image, SafeAreaView, Text, View, ScrollView, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Input, Icon ,CheckBox} from '@rneui/themed';

const Signup3 = ({navigation}) => {
    const [selectedIndex, setIndex] = React.useState(0);
  return (
    <SafeAreaView>
      
    <ScrollView className="bg-customlviolet h-full w-full ">
    <Text className="text-white ml-6 my-16 font-bold  text-5xl">Enter Your Details</Text> 
    <Input
      placeholder='Name'
    />
    <Input
      placeholder='Address'
    />
    <Text className='ml-2 text-lg text-gray-400 opacity-75 '>Gender:</Text>
    <View className='flex-row '>
         <CheckBox 
           checked={selectedIndex === 0}
           onPress={() => setIndex(0)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           containerStyle={{ backgroundColor: 'rgb(93, 93, 129)'}}
         />
         <Text className='pt-3 font-semibold text-lg'>Male</Text>
    
         <CheckBox
           checked={selectedIndex === 1}
           onPress={() => setIndex(1)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           containerStyle={{ backgroundColor: 'rgb(93, 93, 129)'}}
         />
         <Text className='pt-3 font-semibold text-lg'>Female</Text>
    </View>
    <Input
      placeholder='age'
    />
    <Input
      placeholder='aadhar number'
    />
    <Input
      placeholder='liscence number(optional)'
    />
    <View className='flex-row justify-between mb-10'>
      <Text className='bg-white font-bold text-base px-5 ml-5'>Upload Photo</Text>
      <Pressable onPress={()=>navigation.navigate("passengersearch")}>
      <Text className='bg-white font-bold text-base px-5 mr-5 rounded-sm'>Save</Text>
      </Pressable>
    </View>
    </ScrollView>
    

 </SafeAreaView>
  )
}

export default Signup3