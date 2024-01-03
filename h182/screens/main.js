import React, { Component } from "react";
import {StyleSheet, Text, View, SafeAreaView, Platform, Image, ScrollView, TouchableOpacity} from "react-native";
import { Camera } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import { StatusBar } from "expo-status-bar";

export default class Main extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      faces: []
    }
    this.onFacesDetected = this.onFacesDetected.bind(this);
    }
    
    async componentDidMount() {
      const { status } = await Camera.requestPermissionsAsync();
      this.setState({ hasCameraPermission: status === "granted"});
    }

    onFacesDetected({ faces }) {
      this.setState({ faces: faces })
    }

  render(){
    return(
      <View>
        <View style={styles.middlecontainer}>
          <Camera
            style={{flex:1}}
            type={Camera.Constants.Type.front}
            faceDetectorSettings={{
              mode: FaceDetector.Constants.Mode.fast,
              detectLandmarks: FaceDetector.Constants.Landmarks.all,
              runClassifications: FaceDetector.Constants.Classifications.all
            }}
            onFacesDetected = {this.onFacesDetected}
            onFacesDetectedError = {this.onFacesDetectedError}
          />
          {this,state.faces.map((face) => (
            <Filter1 key = {`face-id-${face.faceID}`} face={face} />
          ))}
        </View>
        <View style={styles.lowerContainer}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});