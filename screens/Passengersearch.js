import { View, Text ,TextInput,StyleSheet,Switch, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Navbar from './Navbar';
import { Button } from 'react-native-elements';

const Passengersearch = ({navigation}) => {
    const [number1, onChangeNumber1] = React.useState('');
    const [number2, onChangeNumber2] = React.useState('');
    const [number3, onChangeNumber3] = React.useState('');
    const [number4, onChangeNumber4] = React.useState('');
    const [number5, onChangeNumber5] = React.useState('');

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <ScrollView>
    <View className='bg-customlblue h-[900px] w-screen'>
     <View>
        <Navbar/>
     </View>
     <View className='bg-customwhite rounded-3xl'>
     <View className='py-5'>
     <Text className='text-2xl pl-3 pb-5'>Search for Rides!!</Text>
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
        placeholder="Start Date"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber4}
        value={number4}
        placeholder="End Date"
        
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber5}
        value={number5}
        placeholder="Luggage weight"
        
      />
      </View>
      <View className='flex-row justify-evenly pb-10'>
        <Text className='pl-10 pt-3 text-lg font-normal'>Booking for Women</Text>
        <View style={styles.container}>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
    </View>
        
      </View>

      <Button title='Search Ride' onPress={()=>navigation.navigate("searchresult")}/>

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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
  });

export default Passengersearch