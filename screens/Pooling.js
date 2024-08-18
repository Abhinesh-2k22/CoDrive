import { View, Text ,Image, ScrollView, Pressable} from 'react-native'
import React from 'react'
import { Icon, Avatar } from '@rneui/themed';
import Ratings from './Ratings';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from './Navbar';




const Pooling = ({navigation}) => {
  return (
  
  <ScrollView>
    <View>
      <Navbar/>
    </View>
    <View className='bg-customwhite flex-col'>
      <View className='bg-gray-400 flex rounded-2xl pl-10  mb-0 pb-10 '>  
        <Text className='font-extrabold mt-3  text-2xl'>Create New Ride</Text>
        <Pressable onPress={()=>navigation.navigate("newride")}>
        <View className='bg-violet-950 rounded-md ml-0 mr-64 mt-5 px-1 py-2  items-center'>
            <Text className='text-customwhite'>Create</Text>
        </View>
        </Pressable>
      </View>
      <View>
        <Text className=' font-semibold mt-14 ml-3 mb-5 text-xl'>Existing rides</Text>
      </View>
      <View className='bg-gray-400 rounded-md flex flex-col mb-10'>
        <View className='flex flex-row ml-5 pt-4'>
        <View className='pt-2'>
        <Avatar
              size={33}
              rounded
              title="Ag"
              containerStyle={{ backgroundColor: "red" }}
        />
        </View>
        <View className='flex-col px-5 pb-3'>
        <Text className='font-bold text-lg'>CBE-BAN</Text>
        <Text>11-05-2024</Text>
        </View>
        </View>
        <View className='bg-customlblue rounded-xl flex-row px-2 py-5'>
          <View className='flex-col'>
            <View>
              <Image className="pl-10 ml-2 pt-5 mt-2 h-28 w-28" source = {require('D:/abhi/programming/github/CoDrive-project/CoDrive/assets/adaptive-icon.png')}/>
            </View>
            <View className='pl-3 pr-32 pt-7 '>
              <Ratings/>
            </View>
            </View>
            <View className='flex-col mr-20 -ml-20 justify-around'>
               <View className='bg-customwhite rounded-sm px-10 py-2'>
                 <Text>car details</Text>
               </View>
               <View className='bg-customwhite rounded-sm px-10 py-14'>
                 <Text>description</Text>
               </View>
            </View>
          
        </View >
        <View className='flex-row justify-between'>
          <View className='flex-col justify-between place-content-start ml-5 mt-5'>
            <Text className='mt-3 font-medium'>Start Date:</Text>
            <Text className='mt-3 mb-8 font-medium'>End Date:</Text>
          </View>

          <View className='pr-10 pt-10 '>
            <Text className='text-4xl font-bold '>$700</Text>
          </View>
        </View> 
        <View className='flex-row justify-start pb-5'>
          <Text className='text-violet-700 font-semibold text-xl pl-5'>EDIT</Text>
          <Text className='text-violet-700 font-semibold text-xl pl-10'>CHAT</Text>
        </View>

      </View>
    </View>
  </ScrollView>
  
  )
}

export default Pooling