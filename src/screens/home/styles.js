import {StyleSheet} from 'react-native';
import {moderateScale} from '../../helper/dimensions';
import {RED} from '../../helper/color';

const styles = StyleSheet.create({
  container: {flex: 1, margin: moderateScale(8)},
  loader: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  failureMessageContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    padding: moderateScale(12),
    alignItems: 'center',
  },
  failureMessageText: {
    fontSize: moderateScale(18),
    color: RED,
    textAlign: 'center',
  },
  failureButton: {
    backgroundColor: 'lightgreen',
    borderRadius: moderateScale(12),
    padding: moderateScale(12),
    margin: moderateScale(12),
    width: moderateScale(130),
    alignItems: 'center',
  },
});

export default styles;
