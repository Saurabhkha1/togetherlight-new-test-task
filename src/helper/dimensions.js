import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const guidelineBaseWidth = 390;

export const scale = size => (width / guidelineBaseWidth) * size;
export const moderateScale = (size, factor = 0.25) =>
  size + (scale(size) - size) * factor;
