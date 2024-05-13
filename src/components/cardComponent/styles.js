import {StyleSheet} from 'react-native';
import {moderateScale} from '../../helper/dimensions';
import {BLACK, LIGHTGREY, MISTYROSE, PETAL_PINK} from '../../helper/color';

const styles = StyleSheet.create({
  item: {
    backgroundColor: MISTYROSE,
    borderRadius: moderateScale(16),
    padding: moderateScale(20),
    marginVertical: moderateScale(12),
    marginHorizontal: moderateScale(16),
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: moderateScale(5),
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontSize: moderateScale(16),
    color: BLACK,
    textAlign: 'center',
  },
  body: {
    fontSize: moderateScale(14),
    textAlign: 'center',
    color: BLACK,
    padding: moderateScale(8),
  },
  subText: {
    height: moderateScale(140),
    backgroundColor: PETAL_PINK,
    padding: moderateScale(4),
    borderRadius: moderateScale(8),
  },
  hrline: {
    height: 1,
    backgroundColor: LIGHTGREY,
    marginVertical: moderateScale(8),
  },
});

export default styles;
