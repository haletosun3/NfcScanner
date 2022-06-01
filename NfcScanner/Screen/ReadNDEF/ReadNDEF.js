import React, {useState, useEffect} from 'react';
import {View, Platform , Button} from 'react-native';
import AndroidPrompt from '../../Component/AndroidPrompt/AndroidPrompt'

import styles from '../../Component/CustomView.style'
import stylesComp from './ReadNDEF.style';
import LottieView from 'lottie-react-native';
import CustomButton from '../../Component/CustomButton'
import NfcManager from 'react-native-nfc-manager';
import { useDispatch } from 'react-redux';

function ReadNDEF({navigation}) {
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState(false);

  const platform = Platform.OS;
  const renderPrompt = () => {
    if (platform === 'android') {
      return (
        prompt && (
          <AndroidPrompt
            prompt={prompt}
            setPrompt={setPrompt}
            navigation={navigation}
          /> 
        )
      );
    } else return null;
  };

  const callPrompt = () => {
    setPrompt(true);
    NfcManager.start();
  };

  useEffect(() => {
    if (prompt === true) {
      console.log(prompt);
    }
  }, [prompt]);

  return (
    <View style={styles.container}>
      <View style={styles.outer_border}>
        <View style={styles.inner_border}>
          <View style={{flex: 1}}>
            <LottieView
              source={require('../../../assets/animations/98904-nfc-id-card-scan-iphone.json')}
              autoPlay
              loop
              style={stylesComp.lottie}
            />
          </View>
          <CustomButton onPress={callPrompt} text={'SCAN'} type="PRIMARY" />
          {renderPrompt()}
        </View>
        <Button title='logout' onPress={()=> dispatch({type: 'SET_USER', payload: {user: null}})} />
      </View>
    </View>
  );
}

export default ReadNDEF;
