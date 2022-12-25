import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-gesture-handler';

const Signup = ({navigation}) => {
  //Storing Signup details in following states..
  const [mobileno, setMobileno] = useState('');
  const [ShopName, setShopName] = useState('');
  const [pin, setPin] = useState(0);
  const [Repin, setRePin] = useState(0);

  //used following states to change place holder text color..
  const [shop_validate, setShopvalidate] = useState(false);
  const [mobile_validate, setMobilevalidate] = useState(false);
  const [Pin_validate, setPinvalidate] = useState(false);
  const [RePin_validate, setRePinValidate] = useState(false);

  //Validating sign up details..
  //Need to add api validation in upcoming function..
  const Signup_validation = () => {
    if (mobileno !== '' && pin !== 0 && ShopName !== '' && Repin !== 0) {
      navigation.navigate('Home_Screen');
    } else if (mobileno === '') {
      setMobilevalidate(true);
      //      alert('Mobile Number Not entered');
    } else if (ShopName === '') {
      setShopvalidate(true);
      //    alert('Shop Name Not entered');
    } else if (pin === 0) {
      setPinvalidate(true);
      //  alert('Pin Not Enterd');
    } else if (Repin === 0) {
      setRePinValidate(true);
      //  alert('Re-Pin Not Enterd');
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
          padding: 2,
          paddingLeft: 30,
          //justifyContent: 'space-evenly',
        }}>
        <Text style={{fontSize: 32, color: 'black', fontWeight: 'bold'}}>
          Create Account
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
            placeholder="Enter Mobile Number"
            placeholderTextColor={mobile_validate ? '#FDD835' : null}
            maxLength={10}
            onChangeText={value => setMobileno(value)}
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
          <Icon name="home" size={28} />
          <TextInput
            placeholder="Enter Your Shop Name"
            placeholderTextColor={shop_validate ? '#FDD835' : null}
            maxLength={20}
            onChangeText={value => setShopName(value)}            
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
          <Icon name="low-vision" size={28} />
          <TextInput
            placeholder="Enter Your New 4 Digit Pin"
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
            placeholder="Re-enter Your Pin"
            placeholderTextColor={RePin_validate ? '#FDD835' : null}
            maxLength={4}
            onChangeText={value => setRePin(value)}
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
          onPress={Signup_validation}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 22,
              color: 'white',
              fontWeight: '600',
              marginRight: 20,
            }}>
            SIGN UP
          </Text>
          <Icon name="arrow-circle-right" color="white" size={26} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: '20%',
          //marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>
            Already have a account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#FDD835', fontWeight: 'bold', fontSize: 16}}>
              Sign IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
