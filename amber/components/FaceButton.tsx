import { View, TouchableHighlight, StyleSheet } from "react-native";
import Svg, { Path, Polygon } from 'react-native-svg';
import {useRouter} from 'expo-router';

interface FaceButtonProps {
  size: number;
  fillColor?: string;
}

export default function FaceButton({ size, fillColor = "#000000"}: FaceButtonProps) {
  
  const router = useRouter();
  return (
    <TouchableHighlight onPress={() => router.push('../app/facial_recognition')}>
      <View style={{width: size, height: size, position: 'absolute'}}>
        <Svg width={size * 0.8} height={size * 0.8} viewBox="-51.2 -51.2 614.40 614.40">
          <Polygon 
            points="132.414,360.484 89.489,360.484 89.489,317.551 64.915,317.551 64.915,385.058 132.414,385.058" 
            fill={fillColor} 
          />
          <Polygon 
            points="425.391,67.508 449.965,67.508 449.965,0 382.466,0 382.466,24.574 425.391,24.574" 
            fill={fillColor} 
          />
          <Polygon 
            points="89.489,24.567 132.414,24.574 132.414,0 64.915,0 64.915,67.508 89.489,67.508" 
            fill={fillColor} 
          />
          <Polygon 
            points="425.391,360.484 382.466,360.484 382.466,385.058 449.965,385.058 449.965,317.551 425.391,317.551" 
            fill={fillColor} 
          />
          <Path 
            d="M359.812,435.662c-19.166-7.168-40.989-26.526-40.989-40.965c0-9.559,0-21.502,0-37.885 c12.287-13.647,30.718-33.79,36.861-68.603c14.335-5.12,22.526-13.311,32.766-49.148c10.895-38.165-16.383-36.861-16.383-36.861 s0-20.478,0-38.221c0-30.038-13.983-118.775-116.055-118.775c-102.056,0-116.039,88.737-116.039,118.775 c0,17.742,0,38.221,0,38.221s-27.278-1.304-16.383,36.861c10.224,35.837,18.415,44.028,32.75,49.148 c6.144,34.813,24.59,54.956,36.877,68.603c0,16.382,0,28.326,0,37.885c0,14.439-23.566,34.822-40.989,40.965 c-28.062,9.895-98.04,16.871-115.319,76.338h438.181C457.749,452.701,387.666,446.086,359.812,435.662z" 
            fill={fillColor} 
          />
        </Svg>
      </View>
    </TouchableHighlight>
  );
}

