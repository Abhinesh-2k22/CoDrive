import { View, Text, Pressable,Modal,StyleSheet } from 'react-native'
import React from 'react'
import { Icon, Avatar } from '@rneui/themed';
import Profile from './Profile';

const Navbar = ({}) => {
  return (
    <View >
        <View className='mb-10  flex-row w-screen justify-between  bg-customdviolet rounded-sm'>
            <View className='pt-14 mb-6 ml-4 flex-row justify-between'>
             <Icon name='menu' size={30} />

             <View className='ml-52 -mt-1 flex-row justify-between'>
             <View className='pt-2 pr-7'>
             <Icon 
               name="bell" 
               type="font-awesome" 
               color="#517fa4" 
               size={23} 
               />
             </View>
             <View>
             
              <Avatar
              size={37}
              rounded
              title="Ag"
              containerStyle={{ backgroundColor: "red" }}
              />
             </View> 
        
             </View>
        
            </View>  
        </View>
    </View>
  )
}

export default Navbar