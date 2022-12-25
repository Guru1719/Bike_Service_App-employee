import {Animated, View, Text, StyleSheet, Button} from 'react-native';
import React, {useState, useRef} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
//import CollapseView from 'react-native-collapse-view';

const data = [
  {label: 'Pending', value: '1'},
  {label: 'InProgress', value: '2'},
  {label: 'Completed', value: '3'},
];

export default function TodayServiceDetail({route, navigation}) {
  const {Service} = route.params;
  const [value, setValue] = useState(Service.service_Status);
  const save_process = ()=>{
    alert('Details saved Succesfully!!')
    setTimeout(() => {
      navigation.navigate('Home')  
    }, 1000);
    
  }

  return (
    <View style={{padding: 10}}>
      <View
        style={{
          //justifyContent: 'space-evenly',
          height: '40%',
          backgroundColor: 'white',
          padding: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
          Bike & User Details
        </Text>
        <Text style={styles.Text_Design}>Bike Model:{Service.name}</Text>
        <Text style={styles.Text_Design}>Bike No:{Service.No}</Text>
        <Text style={styles.Text_Design}>Service Date:{Service.Date}</Text>
        <Text style={styles.Text_Design}>
          Customer Name: {Service.cust_name}
        </Text>
        <Text style={styles.Text_Design}>
          Customer Mobile Number:{Service.cust_no}
        </Text>
      </View>
      <View
        style={{
          //justifyContent: 'space-evenly',
          height: '15%',
          backgroundColor: 'white',
          marginTop: 10,
          padding: 10,
          
        }}>
        <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
          Issue Summary
        </Text>
        <Text style={styles.issuedetails}>{Service.issues}</Text>
      </View>

      <View style={{height: '20%', backgroundColor: 'white', marginTop: 10,padding:10}}>
        <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold'}}>
          Bill Details
        </Text>
        <Text style={styles.billdetails}>Spair rate: 300</Text>
        <Text style={styles.billdetails}>Service Charge: 300</Text>
        <Text style={styles.billdetails}>Total Amount: 1000</Text>
        
      </View>

      <View
        style={{
          //justifyContent: 'space-evenly',
          //height: '10%',
          backgroundColor: 'white',
          marginTop: 10,
          padding: 10,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 22,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Status :
        </Text>
        <Dropdown
          style={{
            //margin: 16,
            height: 50,
            width: 120,
            marginLeft: 20,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.5,
          }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          labelField="label"
          valueField="Value"
          placeholder="Select Status"
          searchPlaceholder="Search..."
          Value={Service.service_Status}
          onChange={item => {
            setValue(item.value);
          }}
        />
      </View>
      <View style={{marginTop: 30}}>
        <Button title="Save"  onPress={save_process}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text_Design: {
    fontSize: 16,
    color: 'grey',
    fontWeight: '400',
    marginLeft: 15,
  },
  billdetails:{
    marginLeft: 20,
    marginTop: 10,
    fontSize: 14,
    fontWeight:'600'
  },
  issuedetails:{
    marginLeft: 20,
    marginTop: 10,
    fontSize: 14,
    fontWeight:'400',
    
  }

});
