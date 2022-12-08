import { StyleSheet, Text, View, FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import styles from './styles';

const Upcoming = () => {
    const [Veichle, setVeichle] = useState([
        {
          name: 'Yamaha r-15',
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
        {
            name: 'KTM',
            key: 3,
            Date: '2022-03-31',
            service_name: 'Cdm KTM show room',
            No_of_service: 3,
            Veichle_type: 'bike',
          },
          {
            name: 'Hero Plus',
            key: 4,
            Date: '2022-03-31',
            service_name: 'Hero show room',
            No_of_service: 4,
            Veichle_type: 'bike',
          },
          {
            name: 'Passion Pro',
            key: 5,
            Date: '2022-03-31',
            service_name: 'Hero show room',
            No_of_service: 6,
            Veichle_type: 'bike',
          },
          {
            name: 'Royal enfield',
            key: 6,
            Date: '2022-03-31',
            service_name: 'Hero show room',
            No_of_service: 1,
            Veichle_type: 'bike',
          },
      
  
      ]);
    
  return (
    <View>
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
                  <Text>Service Name:{item.service_name}</Text>
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
  )
}

export default Upcoming

