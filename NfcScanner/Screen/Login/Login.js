import { View, Text, Image , Alert} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import Config from 'react-native-config'
import styles from './Login.style'
import stylesView from '../../Component/CustomView.style'
import CustomInput from '../../Component/CustomInput'
import CustomButton from '../../Component/CustomButton'
import usePost from '../../Hooks/usePost'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Login = ({navigation}) => {

  const {data,loading,error,post} =usePost();
  const dispatch = useDispatch();

  function handleLogin(values){
    post(Config.API_AUTH_URL, values)
    console.log(values);
  }
  if(error){
    Alert.alert("NFC SCANNER", "UPS!!!")
    console.log(error);
  }
  if(data){
    if(data.status == 'error'){
      Alert.alert("NFC CANNER","User Not Found")
    }
    else{
      dispatch({type: 'SET_USER', payload:{user} })
    }
  }

  return (
   <View style={stylesView.outer_border}>
     <View style={stylesView.inner_border}>

       <View style={styles.logo_field}>
       <Image
              style={styles.logo}
              source={require('../../Assets/images/pngegg.png')}
            />
            <Text numberOfLines={1} style={styles.sign_in}>But First Oturum Açın</Text>    
       </View>
       <Formik
       initialValues={{username:'',password:''}}
       onSubmit={handleLogin}
       >
        { ({handleChange, handleSubmit, values}) => (<View style={styles.signIn_field}>
          
          <CustomInput 
          placeholder={"username"}
          value={values.username}
          onType={handleChange('username')} 
          icon={'user'}/>

          <CustomInput 
          placeholder={"password"}
          secureTextEntry={true}
          value={values.password}
          onType={handleChange('password')} 
          icon={'key'} />

          <CustomButton 
          text={"Giriş"} 
          onPress={handleSubmit}
          type="PRIMARY" 
          loading={loading} />
        </View> )}
        </Formik>
     </View>
   </View>
  )
}

export default Login 

const user =  {
  email:'John@gmail.com',
  username:'johnd',
  password:'m38rmF$',
  name:{
      firstname:'John',
      lastname:'Doe'
  },
  address:{
      city:'kilcoole',
      street:'7835 new road',
      number:3,
      zipcode:'12926-3874',
      geolocation:{
          lat:'-37.3159',
          long:'81.1496'
      }
  },
  phone:'1-570-236-7033'
}
