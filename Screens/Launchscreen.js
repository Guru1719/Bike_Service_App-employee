import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';

const Launchscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  });

  return (
    <View style={{height: '100%', alignItems: 'center',justifyContent:'center',backgroundColor:'white'}}>
      {/*
      <ImageBackground
        source={require('../assets/launch_image3.jpg')}
        style={{width: '100%', height: '70%'}}></ImageBackground>
  */}
      <Text style={{fontSize: 40, fontWeight: 'bold',fontFamily:'tahoma',color:'#FDD835'}}>
        BIKE SERVICE MANAGER...!
      </Text>

      <View style={{alignItems:'center'}}>
        <Text>Version 1.0.0</Text>
      </View>
    </View>
  );
};

export default Launchscreen;
