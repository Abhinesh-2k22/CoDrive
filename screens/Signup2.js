import { Image, SafeAreaView, Text, View, ScrollView, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Input, Icon ,CheckBox} from '@rneui/themed';

const Signup2 = ({navigation}) => {
  const [selectedIndex, setIndex] = React.useState(0);
  
  
  return (
    <SafeAreaView>
      
    <ScrollView className="bg-customlviolet h-full w-full">
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
      placeholder='liscence number'
    />
    <Input
      placeholder='registration number'
    />
    <Input
      placeholder='mileage'
    />

    <View className='flex-row'>
      <Text className='text-lg pt-2 pl-2 text-customwhite'>Save car as:</Text>
      <Input
          placeholder='enter car name'
          
      />
    </View>
    <View className='flex-row justify-between'>
      <Text className='bg-white font-bold text-base px-5 ml-5'>Upload Photo</Text>
      <Pressable onPress={()=>navigation.navigate("pooling")}><Text className='bg-white font-bold text-base px-5 mr-5 rounded-sm'>Save</Text></Pressable>
    </View>
    
    <View className='flex-row justify-between pl-5 mt-10 mb-10 pr-5'>
      <Text className=' text-customwhite underline-offset-4'>Register another vehicle ?</Text>
      <Text className='text-customwhite text-base underline'>Register</Text>  
    </View>
    </ScrollView>
    

 </SafeAreaView>
  )
}

export default Signup2