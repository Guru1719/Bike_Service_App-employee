import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Dashboard({navigation}) {
  const [Veichle, setVeichle] = useState([
    {
      name: 'Yamaha r-15s',
      key: 1,
      Date: '2022-03-31',
      service_name: 'Yamaha show room',
      No_of_service: 1,
      Veichle_type: 'bike',
      status: 'InProgress',
    },
    {
      name: 'Hero Splendor',
      key: 2,
      Date: '2022-03-31',
      service_name: 'Yamaha show room',
      No_of_service: 1,
      Veichle_type: 'bike',
      status: 'InProgress',
    },
  ]);

  return (
    <View style={{flex: 1}}>
      {/*User name */}
      <View
        style={{
          paddingTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <View style={{width: '78%'}}>
          <Text style={{fontSize: 22, fontWeight: '400'}}>welcome</Text>
          <Text style={{fontSize: 24, fontWeight: '800'}}>Guru Nathan</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            width: 50,
            height: 50,
            borderRadius: 150 / 2,
          }}>
          <TouchableOpacity>
            <Icon name="bell" size={24} color="#E91E63" />
          </TouchableOpacity>
        </View>
        {/*
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 150 / 2,
            backgroundColor: '#BA68C8',
            alignItems: 'center',
            justifyContent: 'center',            
            marginTop: 5,
          }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Today_Services')}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>GN</Text>
          </TouchableOpacity>          
        </View>
        */}
      </View>
      {/* States*/}
      <View
        style={{
          width: '100%',
          height: '40%',
          backgroundColor: 'white',
          padding: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: '50%',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              backgroundColor: 'pink',
              width: '40%',
              height: '70%',
              padding: 5,
              marginLeft: 5,
              marginTop: 20,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Today_Services')}
              style={{alignItems: 'center'}}>
              <Text style={{fontSize: 26, fontWeight: 'bold'}}>10</Text>
              <Text>Today Completed</Text>
              <Text>Services</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'orange',
              width: '40%',
              height: '70%',
              // alignItems: 'center',
              padding: 5,
              marginLeft: 5,
              marginTop: 20,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Today_Services')}
              style={{alignItems: 'center'}}>
              <Text style={{fontSize: 26, fontWeight: 'bold'}}>5</Text>
              <Text>Today pending</Text>
              <Text>Services</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: '50%',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              backgroundColor: '#FFF176',
              width: '40%',
              height: '70%',
              padding: 5,
              marginLeft: 5,
              marginTop: 20,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Upcoming_Services');
              }}
              style={{alignItems: 'center'}}>
              <Text style={{fontSize: 26, fontWeight: 'bold'}}>7</Text>
              <Text>Upcoming</Text>
              <Text>Services</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#90CAF9',
              width: '40%',
              height: '70%',
              // alignItems: 'center',
              padding: 5,
              marginLeft: 5,
              marginTop: 20,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={{fontSize: 26, fontWeight: 'bold'}}>100</Text>
              <Text>Totally Completed</Text>
              <Text>Services</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*Today service part*/}
      <View>
        <View style={{flexDirection: 'row', padding: 5, marginTop: 20}}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('Today_Services')}
            style={{
              backgroundColor: 'tomato',
              width: 50,
              height: 20,
              alignItems: 'center',
              marginTop: 5,
            }}>
            <Text style={{fontWeight: '800'}}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: '25%'}}>
          <FlatList
            data={Veichle}
            numColumns={1}
            renderItem={({item}) => (
              <ScrollView>
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 10,
                    marginLeft: 10,
                    marginTop: 10,
                    marginRight: 10,
                  }}>
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
                      <Text>Status: {item.status}</Text>
                    </View>
                    <View>
                      <Image
                        style={styles.bikeimage}
                        source={require('../assets/bike_image.jpg')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
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
              marginTop: 10,
            }}>
            Upcoming Services
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Upcoming_Services');
            }}
            style={{
              backgroundColor: 'tomato',
              width: 50,
              height: 20,
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text style={{fontWeight: '800'}}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: '25%'}}>
          <FlatList
            data={Veichle}
            numColumns={1}
            renderItem={({item}) => (
              <ScrollView>
                <View
                  style={{
                    height: 100,
                    backgroundColor: 'white',
                    borderTopLeftRadius: 10,
                    marginLeft: 10,
                    marginTop: 10,
                    marginRight: 10,
                  }}>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      //backgroundColor: 'grey',
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
              </ScrollView>
            )}
          />
        </View>
      </View>
    </View>
  );
}

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
