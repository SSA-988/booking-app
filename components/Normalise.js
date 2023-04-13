import { Dimensions,Platform,PixelRatio } from "react-native";

const {width:SCREEN_WIDTH} = Dimensions.get("window");

const scale = SCREEN_WIDTH / 360;

export function pixelNormalize(size){
    const newSize = size * scale;
    if(Platform.OS === "ios"){
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }else{
        Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}