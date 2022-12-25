import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
//import styles from './styles';

const Today_Services = ({navigation}) => {
  const [Veichle, setVeichle] = useState([
    {
      name: 'Yamaha r-15 new',
      No: 'TN 91 M4712',
      key: 1,
      Date: '2022-03-31',
      cust_name: 'Guru',
      cust_no: '9080344421',
      No_of_service: 1,
      Veichle_type: 'bike',
      service_Status: 'Pending',
      issues: 'Oil Change, Water Service, Heat Issue, Borring Issue, Others'
    },
    {
      name: 'Hero splendor',
      No: 'TN 91 M4712',
      key: 2,
      Date: '2022-03-31',
      cust_name: 'Swathi',
      cust_no: '9080344421',
      No_of_service: 6,
      Veichle_type: 'bike',
      service_Status: 'Pending',
      issues: 'Oil Change, Water Service, Heat Issue, Borring Issue, Others'
    },
    {
      name: 'KTM',
      No: 'TN 91 M4712',
      key: 3,
      Date: '2022-03-31',
      cust_name: 'Shruthi',
      cust_no: '9751365134',
      No_of_service: 3,
      Veichle_type: 'bike',
      service_Status: 'InProgress',
      issues: 'Oil Change, Water Service, Heat Issue, Borring Issue, Others'
    },
    {
      name: 'Hero Plus',
      No: 'TN 91 M4712',
      key: 4,
      Date: '2022-03-31',      
      cust_name:'Gowtham',
      cust_no: '9840252600',
      No_of_service: 4,
      Veichle_type: 'bike',
      service_Status: 'InProgress',
      issues: 'Oil Change, Water Service, Heat Issue, Borring Issue, Others'
    },
    {
      name: 'Passion Pro',
      No: 'TN 91 M4712',
      key: 5,
      Date: '2022-03-31',      
      cust_name:'Guru',
      cust_no: '9080344421',
      No_of_service: 6,
      Veichle_type: 'bike',
      service_Status: 'Pending',
      issues: 'Oil Change, Water Service, Heat Issue, Borring Issue, Others'
    },
    {
      name: 'Royal enfield',
      No: 'TN 91 M4712',
      key: 6,
      Date: '2022-03-31',      
      cust_name:'Guru',
      cust_no: '9080344421',
      No_of_service: 1,
      Veichle_type: 'bike',
      service_Status: 'InProgress',
      issues: 'Oil Change, Water Service, Heat Issue, Borring Issue, Others'
    },
  ]);

  return (
    <View>
      {/*

              <View
          style={{
            backgroundColor: '#f4511e',
            width: '100%',
            height: 60,
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
            Today Services
          </Text>
        </View>
          */}
      <FlatList
        data={Veichle}
        numColumns={1}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Service Details', {Service: item});
              }}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                borderBottomWidth: 2,
                marginHorizontal: 8,
                marginVertical: 8,
                //    flexDirection:"row",
                height: 100,
              }}>
              <View style={{width: '75%'}}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    fontFamily: 'Cochin',
                  }}>
                  {item.name}
                </Text>
                <Text>Date:{item.Date}</Text>
                <Text>Service Status:{item.service_Status}</Text>
                <Text>No of Service:{item.No_of_service}</Text>
              </View>
              <View>
                <Image
                  style={styles.bikeimage}
                  source={require('../assets/bike_image.jpg')}
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Today_Services;

const styles = StyleSheet.create({
  bikeimage: {
    width: 100,
    height: 75,
    resizeMode: 'stretch',
  },
  states_no: {
    fontSize: 22,
    fontWeight: '800',
    color: 'black',
  },
});
