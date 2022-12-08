import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../Screens/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Searchbar} from 'react-native-paper';

export default function Dashboard({navigation}) {
  const [Veichle, setVeichle] = useState([
    {
      name: 'Yamaha fz',
      key: 1,
      Date: '2022-03-31',
      service_name: 'Yamaha show room',
      No_of_service: 1,
      Veichle_type: 'bike',
    },
    {
      name: 'Hero splendor',
      key: 2,
      Date: '2022-03-31',
      service_name: 'Hero show room',
      No_of_service: 6,
      Veichle_type: 'bike',
    },
  ]);
  //For search bar

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
            {/*                
      <View
        style={{
          //backgroundColor: '#f4511e',
          height: 50,
          backgroundColor: 'pink',
          flexDirection: 'row',
        }}>
        <View style={{marginLeft: 10, justifyContent: 'center', width: '90%'}}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Dashboard
          </Text>
        </View>
        <View style={{width: '10%', justifyContent: 'center'}}>
          <Icon name="user" size={28} />
        </View>
      </View>

      <TouchableOpacity>
      <View style={{padding: 5, flexDirection: 'row'}}>
        
          <Image
            style={styles.bikeimage}
            source={require('../assets/avatar.jpg')}
          />
          <View>
          <Text
            style={{fontSize: 20, fontWeight: '600', color: '#f4511e'}}
            numberOfLines={2}>
            Welcome 
          </Text>
          <Text
            style={{fontSize: 20, fontWeight: '600', color: '#f4511e'}}
            numberOfLines={2}>
            Steve Smith
          </Text>
          </View>
         
      </View>
      </TouchableOpacity>
        */}
      {/* upcoming service..*/}
      {/*
      <View style={{padding: 5}}>
        <View style={{padding: 10, backgroundColor: 'grey', height: 250}}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{fontSize: 22, fontWeight: 'bold', fontFamily: 'Cochin'}}>
              Today Services
            </Text>
            <View style={{marginLeft: 180}}>
              <Button title="More" />
            </View>
          </View>
          <FlatList
            data={Veichle}
            numColumns={1}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    borderBottomWidth: 2,
                    marginHorizontal: 8,
                    marginVertical: 8,
                    //    flexDirection:"row",
                    height: 80,
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
      </View>
                    */}
                    {/*
      <View style={{padding: 10}}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      {/*today service */}
      {/*

      <View
        style={{
          flexDirection: 'row',
          height: 100,
          backgroundColor: 'white',
          marginLeft: 10,
        }}>
        <Text>yamah r15</Text>
      </View>
      {/*Veichle Selection*/}
      {/*}
      <View
        style={{
          flexDirection: 'row',
          height: '40%',
          padding: 10,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            backgroundColor: 'pink',
            height: '70%',
            width: '45%',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 100,
              height: 75,
              resizeMode: 'stretch',
              marginTop: 30,
            }}
            source={require('../assets/bike_image.jpg')}
          />
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            height: '70%',
            width: '45%',
          }}>
          <Image
            style={{
              width: 90,
              height: 95,
              //resizeMode: 'stretch',
              marginTop: 20,
              marginLeft: 35,
            }}
            source={require('../assets/car-logo.jpg')}
          />
        </View>
        <View></View>
      </View>
*/}      

    </View>
  );
}
