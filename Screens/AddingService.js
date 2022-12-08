import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';

const AddingService = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#f4511e',
          width: '100%',
          height: '7%',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            //marginTop: 15,
            marginLeft: 130,
            fontWeight: '600',
            fontSize: 22,
            color: 'black',
          }}>
          Adding Service
        </Text>
        <View style={{marginLeft: 80}}>
          <Button title="Save" />
        </View>
      </View>
      <KeyboardAvoidingView enabled>
      <View style={{padding: 10, height: '90%',justifyContent:'space-between'}}>
        
          <Text>Veichle Name:</Text>
          <TextInput
            placeholder="Enter Veichle Name"
            style={{backgroundColor: 'white'}}
          />
          <Text>Veichle NO:</Text>
          <TextInput
            placeholder="Enter Veichle No"
            style={{backgroundColor: 'white'}}
          />
          <Text>Last Service Date:</Text>
          <TextInput
            placeholder="Enter Last Service Date"
            style={{backgroundColor: 'white'}}
          />
          <Text>Upcoming Service Date:</Text>
          <TextInput
            placeholder="Upcoming Service Date"
            style={{backgroundColor: 'white'}}
          />
          <Text>Remarks:</Text>
          <TextInput
            placeholder="Enter Remarks here.."
            style={{backgroundColor: 'white', height: 120}}
          />

      </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddingService;
