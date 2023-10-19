import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  square: {
    height: 35,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.secondary,
    zIndex: 20,
  },
  containerHeader: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    zIndex: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceImage: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D9D9D9',
    top: -5,
    left: -5,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  viewName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoW: { 
    width: 45, 
    height: 45, 
    marginRight: 10,
  },
  sep: {
    width: 2,
    height: 45,
    backgroundColor: 'white',
    marginRight: 10,
  },
  menu: {
    justifyContent: 'center',
  },
});

export default styles;