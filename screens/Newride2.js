import { View, Text ,TextInput,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Navbar from './Navbar';
import { Button } from 'react-native-elements';

const Newride2 = ({navigation}) => {
  const [number6, onChangeNumber6] = React.useState('');
  const [number7, onChangeNumber7] = React.useState('');
  const [number8, onChangeNumber8] = React.useState('');
  const [number9, onChangeNumber9] = React.useState('');
  const [number10, onChangeNumber10] = React.useState('');
  const [number11, onChangeNumber11] = React.useState('');
  return (
    <View>
      <ScrollView>
    <View className='bg-customlblue h-[900px] w-screen'>
        <View>
            <Navbar/>
        </View>
        <Text className='text-3xl font-extrabold mb-3 pl-3'>Enter Details:</Text>
        <View className='bg-customwhite py-5 rounded-lg'>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber6}
        value={number6}
        placeholder="Basic Price"
        keyboardType="numeric"
        
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber7}
        value={number7}
        placeholder="Your Charges"
        keyboardType="numeric"
        
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber8}
        value={number8}
        placeholder="Description"
        
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber9}
        value={number9}
        placeholder="Available Seas"
        
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber10}
        value={number10}
        placeholder="Pickup"
        
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber11}
        value={number11}
        placeholder="Drop"
        
        />

        </View>
        <Button title='save' onPress={()=>navigation.navigate("pooling")}/>
    </View>
    </ScrollView>
    </View>
  )
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default Newride2