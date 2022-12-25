import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  //Storing login details in following states..
  const [mobileno, setMobileno] = useState('');
  const [pin, setPin] = useState(0);
  //used following states to change place holder text color..
  const [mobile_validate, setMobilevalidate] = useState(false);
  const [Pin_validate, setPinvalidate] = useState(false);

  //const [validationmsg, setValidationMsg] = useState('');

  const login_validation = () => {    
    if (mobileno === '') {
      //alert('Mobile Number Not entered');
      setMobilevalidate(true);
    } else if (pin === 0 || pin =='') {
      //alert('Pin Not Enterd');
      setPinvalidate(true);
    } else if (mobileno !== '' && pin !== 0) {
      navigation.navigate('Home_Screen');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{height: '20%', alignItems: 'flex-end', marginTop: 2}}>
        <Image
          source={require('../assets/login.png')}
          style={{height: '100%'}}
        />
      </View>
      <View
        style={{
          padding: 10,
          paddingLeft: 30,
          //justifyContent: 'space-evenly',
        }}>
        <Text style={{fontSize: 32, color: 'black', fontWeight: 'bold'}}>
          Login
        </Text>
        <Text
          style={{
            color: 'grey',
            fontWeight: '500',
            fontSize: 22,
            marginLeft: 5,
            marginTop: 5,
          }}>
          Please sign in to continue
        </Text>
      </View>
      <View style={{marginLeft: 50, marginTop: 30}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#52006A',
            backgroundColor: 'white',
            elevation: 20,
            width: '80%',
            padding: 5,
          }}>
          <Icon name="mobile" size={28} />
          <TextInput
            placeholder="Enter Your Mobile Number"
            placeholderTextColor={mobile_validate ? '#FDD835' : null}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={value => setMobileno(value)}
            style={{
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              backgroundColor: '#fff',
              color: '#424242',
              shadowColor: 'grey',
              width: '80%',
            }}
          />
        </View>
      </View>
      <View style={{marginLeft: 50, marginTop: 30}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#52006A',
            backgroundColor: 'white',
            elevation: 20,
            width: '80%',
            padding: 5,
          }}>
          <Icon name="eye-slash" size={28} />
          <TextInput
            placeholder="Enter Your 4 Digit Pin"
            placeholderTextColor={Pin_validate ? '#FDD835' : null}
            maxLength={4}
            onChangeText={value => setPin(value)}
            keyboardType="numeric"
            style={{
              paddingTop: 10,
              paddingRight: 10,
              paddingBottom: 10,
              paddingLeft: 20,
              backgroundColor: '#fff',
              color: '#424242',
              shadowColor: 'grey',
              width: '80%',
            }}
          />
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
          <Text style={{marginTop: 30, color: '#FDD835', fontWeight: 'bold'}}>
            FORGOT PIN?
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: '8%',
          width: '40%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginLeft: 200,
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FDD835',
        }}>
        <TouchableOpacity
          onPress={login_validation}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 24,
              color: 'white',
              fontWeight: '600',
              marginRight: 20,
            }}>
            Login
          </Text>
          <Icon name="arrow-circle-right" color="white" size={26} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: '20%',
          marginTop: 80,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{color: '#FDD835', fontWeight: 'bold', fontSize: 16}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
