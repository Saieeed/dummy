import React from 'react';
import { View, Text, TouchableOpacity, Image,TextInput, ScrollView,StyleSheet,SafeAreaView, ActivityIndicator } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends  React.Component{

render(){
  return(
      <View style= {styles.style}>
      <Image source={require("./images/logo.png")} style={{width:'60%' , height:'40%' , resizeMode:'contain'}} />

    <ActivityIndicator size={'large'}color={'#4267B2'}>
      
    </ActivityIndicator>
        <TextInput style = {styles.input}
               placeholder = "Email or Phone"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               
               />
               <TextInput style = {styles.input}
               placeholder = "Password"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
               secureTextEntry={true}
               
               
               />

               

             <TouchableOpacity
               style = {styles.submitButtonText}
               onPress = {
                  () => 0
               }>
               <Text  style={styles.log}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text  style={styles.text} >Forgot Password?</Text>
            </TouchableOpacity>

        <TouchableOpacity>
            <Text  style={styles.text2}>Sign Up for facebook</Text>
            </TouchableOpacity>

      </View>
      

  );
}




}
const styles = StyleSheet.create({
  style:{
    flex:1,
    backgroundColor:"#3b5998", 
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
  } , 

  input: {
  
    backgroundColor:"#FFFFFF",
    margin: 8,
    height: 40,
    width:'80%',
    borderColor : 'black',
    borderWidth: .8,
    paddingLeft:'5%',
    // fontWeight:'bold'
 },
 submitButtonText:{
  fontWeight:'bold',
  color: 'white',
  margin: 8,
  height: 40,
  width:'80%',
  justifyContent:'center',
  borderColor : 'black',
  backgroundColor:"#4267B2",
  alignItems:'center',



},
log: {
  color :'white',
  fontWeight:'bold'


},
text: {
  color :'white',
  textDecorationLine :'underline',

}
,text2:{
  color :'white',
  alignItems:'center',
  justifyContent:'center',
   //Here is the trick
  textDecorationLine :'underline',
  marginTop:'40%',
  bottom:0,
  
 //Here is the trick
}
  });