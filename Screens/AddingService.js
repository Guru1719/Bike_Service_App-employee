import React, {Component} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {MultiSelect} from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const data = [
  {label: 'Oil Change', value: '1'},
  {label: 'Chain Bracket Issue', value: '2'},
  {label: 'Bore Issue', value: '3'},
  {label: 'Wiring Issue', value: '4'},
  {label: 'Tire Change', value: '5'},
  {label: 'Water Wash', value: '6'},
  {label: 'Over Heating', value: '7'},
  {label: 'Others', value: '8'},
];

export default class AddingService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      navigate_to_issues: false,
      cust_name: '',
      cust_phone_no:'',
    };    
  }
  
  renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
        {/*<Icon style={styles.icon} color="black" name="search" size={20} />*/}
      </View>
    );
  };

  to_home = () => {
    //const navigation = useNavigation();
    alert('Service Added successfully.');
    this.setState({navigate_to_issues: false})
    //navigation.navigate('Home')
    setTimeout(() => {
      this.props.navigation.goBack();  
    }, 500);
    
  };

  renderIssueDetails = () => {
    return (
      <View style={styles.container}>
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
            Select Problems
          </Text>
        </View>
        <View style={{padding: 10}}>
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Select issues"
            value={this.state.selected}
            search
            searchPlaceholder="Search..."
            onChange={item => {
              //setSelected(item);
              this.setState({selected: item});
            }}
            renderItem={this.renderItem}
            renderSelectedItem={(item, unSelect) => (
              <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                <View style={styles.selectedStyle}>
                  <Text style={styles.textSelectedStyle}>{item.label}</Text>
                  <Icon color="black" name="trash-o" size={17} />
                </View>
              </TouchableOpacity>
            )}
          />

          {this.state.selected ? (
            <View style={{marginTop: 20}}>
              <Button title="Save" onPress={() => this.to_home()} />
            </View>
          ) : null}
        </View>
      </View>
    );
  };

  renderuserDetails = () => {
    return (
      <View>
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
              fontWeight: 'bold',
              fontSize: 22,
              color: 'white',
            }}>
            Adding Service
          </Text>
        </View>

        <View
          style={{
            padding: 10,
            marginTop: 20,
            //height: '90%',
            //justifyContent:'space-between'
            height: 350,
            //backgroundColor:'green',
            justifyContent: 'space-around',
          }}>
          <Text>Customer Name:</Text>
          <TextInput
            placeholder="Enter Customer name Name"
            onChangeText={text => this.setState({cust_name: text})}
            //value={value}
            style={{backgroundColor: 'white'}}
          />
          <Text>Veichle NO:</Text>
          <TextInput
            placeholder="Enter Veichle No"
            style={{backgroundColor: 'white'}}
          />
          <Text>Customer Mobile Name:</Text>
          <TextInput
            placeholder="Enter Veichle Name"
            style={{backgroundColor: 'white'}}
          />
          
          <Button
            title="Next"
            
            onPress={() => this.setState({navigate_to_issues: true})}
          />
          
        </View>
      </View>
    );
  };

  render() {
    return (
      <View>
        {!this.state.navigate_to_issues
          ? this.renderuserDetails()
          : this.renderIssueDetails()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //container: {padding: 10},
  dropdown: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
});
