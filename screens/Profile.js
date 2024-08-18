import { View, Text } from 'react-native'
import React from 'react'
import Navbar from './Navbar';
import { Icon, Avatar } from '@rneui/themed';

const Profile = () => {
  return (
    <View>
        <View className='absolute'>
            <Navbar/>
        </View>
        <View className='bg-customlviolet rounded-md mt-10 ml-20 h-[500px] w-72'>
            <View className='flex-row pl-52 pt-3'>
            <Avatar
              size={60}
              rounded
              title="Ag"
              containerStyle={{ backgroundColor: "red" }}
            />
            </View>
            <View className='flex-col pl-5'>
                <Text className='font-extrabold text-3xl'>Agilan E D </Text>
                <Text className='font-bold'>ID:333XXX196YB</Text>
            </View >
            <View className='flex-col pl-5 items-start pt-10'>
                <Text className='font-medium text-xl py-3'>History</Text>
                <Text className='font-medium text-xl py-3'>Wallet</Text>
                <Text className='font-medium text-xl py-3'>Payment</Text>
                <Text className='font-medium text-xl py-3'>Insurance</Text>
                <Text className='font-medium text-xl py-3'>Support</Text>
                <Text className='font-medium text-xl py-3'>About</Text>

            </View>
        </View>
    </View>
  )
}

export default Profile