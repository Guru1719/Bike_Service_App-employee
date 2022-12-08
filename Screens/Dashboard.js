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
      name: 'Yamaha r-15s',
      key: 1,
      Date: '2022-03-31',
      service_name: 'Yamaha show room',
      No_of_service: 1,
      Veichle_type: 'bike',
    },
  ]);
  //For search bar

  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 450, height: 325, resizeMode: 'stretch'}}
          source={require('../assets/dashboard_pic.jpg')}
        />
      </View>
{/*Today service part*/}
      <View style={{flexDirection: 'row', padding: 2}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 5,
            color: 'black',
            width: '85%',
          }}>
          Today Services
        </Text>
        <TouchableOpacity style={{backgroundColor:'tomato',width:50,height:20,alignItems:'center',marginTop:5}}>
          <Text style={{fontWeight:'800'}}>More</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={Veichle}
          numColumns={1}
          renderItem={({item}) => (
            <View
              style={{
                height: 100,
                backgroundColor: 'grey',
                borderTopLeftRadius: 10,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'grey',
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
                  <Text>No of Service:{item.No_of_service}</Text>
                  <Text>Status: Service pending</Text>
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
      {/*
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          marginLeft: 5,
          marginTop: 10,
          color: 'black',
          width: '85%',
        }}>
        Your States
      </Text>
      <View
        style={{
          height: '20%',
          backgroundColor: 'grey',
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          borderTopLeftRadius: 10,
          borderBottomEndRadius: 10,
          justifyContent:'space-around'
        }}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: '700'}}>
          Totally Spent on Services               :20000
        </Text>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
          This Year                                                 :10000
        </Text>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
          Last Year                                                 :10000
        </Text>
      </View>
      */}
      {/*Today service part*/}
      <View style={{flexDirection: 'row', padding: 2}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            marginLeft: 5,
            color: 'black',
            width: '85%',
            marginTop:10
          }}>
          Upcoming Services
        </Text>
        <TouchableOpacity style={{backgroundColor:'tomato',width:50,height:20,alignItems:'center',marginTop:15}}>
          <Text style={{fontWeight:'800'}}>More</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={Veichle}
          numColumns={1}
          renderItem={({item}) => (
            <View
              style={{
                height: 100,
                backgroundColor: 'grey',
                borderTopLeftRadius: 10,
                marginLeft: 10,
                marginTop: 10,
                marginRight: 10,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'grey',
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
                  <Text>No of Service:{item.No_of_service}</Text>
                  <Text>Status: Service pending</Text>
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
  );
}
