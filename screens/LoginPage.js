import { SafeAreaView, Text, View ,Image, TextInput, Pressable} from 'react-native'
import React from 'react'
import { CheckBox } from '@rneui/themed';

const LoginPage = () => {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
 


  return (
    <SafeAreaView>
      <View className=" flex-row  justify-center items-center">
      <Image className="top-0 left-0 absolute" source = {require('D:/abhi/programming/github/CoDrive-project/CoDrive/assets/1.png')} />
      <Image className=" top-0 left-0 w-200 h-200 absolute" source = {require('D:/abhi/programming/github/CoDrive-project/CoDrive/assets/2.png')}/>
      </View>
      <Text className="font-bold underline underline-offset-2 text-center justify-center mt-64 text-5xl">LOGIN</Text>
      <TextInput  
        className="text-lg mx-auto mt-32 py-2 px-32 border-black border-2"
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your Email"
        keyboardType="text"
      />
      <TextInput  
        className="text-lg mx-auto mt-8 py-2 px-28 border-black border-2"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your Password"
        keyboardType="text"
      />
      <View className="flex-row -ml-2 ">
      <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
         />
       <View className="flex-row justify-between my-4 -mx-6">
        <Text> Remember me </Text>
        <Text className="pl-36 font-bold text-md"> Forgot password?</Text>
      </View>
      </View>
      
      <Pressable className="bg-indigo-300 py-4 mx-32 rounded-full mt-10">
        <Text className="font-bold mx-auto text-2xl"> Enter </Text>
      </Pressable>
      
    </SafeAreaView>
  )
}

export default LoginPage

