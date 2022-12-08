import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserDetails = () => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/launch_image.jpg')}        
        style={{width: '100%', height: '70%'}}>
          <View style={{
            marginTop:180
          }}>
        <Text>
          {' '}
          <Text style={{
            marginTop:400,
            backgroundColor: 'black', color: 'white',
          fontSize:24,

        }}>
            Guru Nathan
          </Text>{' '}
        </Text>
        <Text>
          {' '}
          <Text style={{
            marginTop:400,
            backgroundColor: 'black', color: 'white',
          fontSize:20,

        }}>
            +91 97513 65134
          </Text>{' '}
{/*           <Icon name='right' size={20} color='green' /> */}
        </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default UserDetails;
