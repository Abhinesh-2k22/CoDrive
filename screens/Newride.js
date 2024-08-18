import { View, Text ,TextInput,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Navbar from './Navbar';
import { Button } from 'react-native-elements';

const Newride = ({navigation}) => {
  const [number1, onChangeNumber1] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [number3, onChangeNumber3] = React.useState('');
  const [number4, onChangeNumber4] = React.useState('');
  const [number5, onChangeNumber5] = React.useState('');

  return (
    <View>
      <ScrollView>
    <View className='bg-customlblue h-[900px] w-screen'>
      
     <View>
        <Navbar/>
     </View>
     <View className='bg-customwhite rounded-3xl'>
     <View className='py-5'>
     <Text className='text-2xl pl-3 pb-5'>Enter New Ride Details:</Text>
     <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="From"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="To"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="Number of Passengers"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber4}
        value={number4}
        placeholder="Start Date"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber5}
        value={number5}
        placeholder="End Date"
        
      />
      </View>
      <View className='flex-row justify-evenly pb-10'>
        <Button title='Select Car'/>
        <Button title='Luggage'/>
      </View>

      <View className='items-center mb-10 pb-5'>
        <Text>!! Map interface here !!</Text>
      </View>
      <Button title='Next' onPress={()=>navigation.navigate("newride2")}/>
     </View>
     
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

export default Newride