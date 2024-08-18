import { SafeAreaView, Text, View ,Image, TextInput, Pressable, ScrollView,button} from 'react-native'
import React from 'react'
import { CheckBox } from '@rneui/themed';

const LoginPage = ({navigation}) => {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
 


  return (
    <SafeAreaView>
      <ScrollView>
      <View className=" flex-row  justify-center items-center ">
      <Image className="top-0 left-0 absolute" source = {require('D:/abhi/programming/github/CoDrive-project/CoDrive/assets/1.png')} />
      <Image className=" top-0 left-0 w-200 h-200 absolute" source = {require('D:/abhi/programming/github/CoDrive-project/CoDrive/assets/2.png')}/>
      </View>
      <Text className="font-bold underline underline-offset-2 text-center justify-center mt-64 text-5xl">LOGIN</Text>
      <TextInput  
        className="text-md mx-3 text-center mt-16 py-2  border-black border-2"
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your Email"
        keyboardType="text"
      />
      <TextInput  
         className="text-md mx-3 text-center mt-10 py-2  border-black border-2"
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your Password"
        keyboardType="text"
      />
      <View className="flex-row -ml-3 ">
      <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
           containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
         />
       <View className="flex-row justify-between my-4 -mx-6">
        <Text> Remember me </Text>
        <Text className="pl-28 font-bold text-md"> Forgot password?</Text>
      </View>
      </View>
      
      <Pressable className="bg-customlblue py-2 mx-28 rounded-xl mt-8" >
        <Text className="font-bold mx-auto text-2xl"> Enter </Text>
      </Pressable>
      <View className="flex-row mt-8 ml-5 text-md mb-10">
      <Text>Dont have an account?</Text>
      <Pressable onPress={()=>navigation.navigate("signup1")}>
      <Text className="underline underline-offset-2 text-purple-400">signup</Text>
      </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginPage

