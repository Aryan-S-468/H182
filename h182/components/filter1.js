import React from 'react'
import { Image, View } from 'react-native'

const Filter1 = ({
  face: {
    bounds: {
      size: { width: faceWidth, height, faceHeight },
    },
    LEFT_EYE,
    RIGHT_EYE,
    NOSE_BASE,
  }
}) => {
  const filterWidth = faceWidth
  const filterHeight = faceHeight / 3

  const transformangle = (
    angleRad = math.atan((RIGHT_EYE.y - LEFT_EYE.y) / (RIGHT_EYE.x - LEFT_EYE.x))
  ) => (angleRad * 180) / Math.PI;

  return(
    <View
      style = {{
        position: 'absolute',
        left: LEFT_EYE.x - filterWidth * 0.675,
        top: RIGHT_EYE.x - filterHeight * 0.5,
      }}>
        <Image
          source = {require('../assets/crown-pic1.png')}
          style = {{
            width: filterWidth,
            height: filterHeight,
            resizeMode: "contain",
            transform: [{ rotate: `${transformAngle()}deg`}]
          }}
        />
    </View>
  )
}