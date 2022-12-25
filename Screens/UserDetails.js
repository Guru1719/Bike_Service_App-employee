import {View, Button, Text, ImageBackground, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';

const UserDetails = ({navigation}) => {
  const [Address, setAddress] = useState([
    '117, New Street, Keezhamoongiladi, Chidambaram,cuddalore,Tamil Nadu, India - 608102',
  ]);
  return (
    <View>
      <View style={{backgroundColor: 'grey', height: '40%'}}>
        <ImageBackground
          source={require('../assets/launch_image.jpg')}
          style={{width: '100%', height: 300}}>
          <Text style={{marginTop: 210}}>
            {' '}
            <Text
              style={{
                marginTop: 400,
                backgroundColor: 'black',
                color: 'white',
                fontSize: 24,
                fontWeight:'bold'
              }}>
              Guru Nathan
            </Text>{' '}
          </Text>
          <Text>
            {' '}
            <Text
              style={{
                marginTop: 400,
                backgroundColor: 'black',
                color: 'white',
                fontSize: 20,
                fontWeight:'bold'
              }}>
              +91 97513 65134
            </Text>{' '}
            {/*           <Icon name='right' size={20} color='green' /> */}
          </Text>
        </ImageBackground>
      </View>

      <View
        style={{
          marginTop: 20,
          borderTopLeftRadius: 20,
          borderBottomEndRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          padding: 10,
          backgroundColor: 'white',
          height: '18%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Address</Text>
        <Text style={{marginTop: 15, marginLeft: 5}}>{Address}</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          borderTopLeftRadius: 20,
          borderBottomEndRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          padding: 10,
          backgroundColor: 'white',
          height: '10%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Settings</Text>
        <ToggleSwitch
          isOn={true}
          onColor="pink"
          offColor="grey"
          label="Enable Notification                                                 "
          labelStyle={{fontWeight: '600', fontSize: 16, marginTop: 10}}
          size="small"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
        {/*
        <ToggleSwitch
          isOn={false}
          onColor="orange"
          offColor="grey"
          label="Log Out                                                                     "
          labelStyle={{fontWeight: '600', fontSize: 16, marginTop: 10}}
          size="small"
          onToggle={isOn => console.log('changed to : ', isOn)}
        />
      */}
      </View>

      <View
        style={{
          marginTop: 10,
          borderTopLeftRadius: 20,
          borderBottomEndRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          padding: 10,
          backgroundColor: 'white',
          height: '20%',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>About</Text>
        <Text style={{marginTop: 10, marginLeft: 10}}>App Version: 1.0.0</Text>
        <Text style={{marginTop: 5, marginLeft: 10}}>
          App Language: English
        </Text>
        <Text style={{marginTop: 5, marginLeft: 10}}>
          Visit: www.Techieee.com
        </Text>
      </View>
      <View style={{padding:5}}>
        <Button title='Log Out' color='pink' onPress={()=>navigation.navigate('Login')}/>
      </View>
    </View>
  );
};

export default UserDetails;
