import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  square: {
    width: 412,
    height: 35,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  supportechText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    flexDirection: 'row',
    marginTop: '30%',
  },
  blueText: {
    color: '#061E4B',
  },
  tealText: {
    color: '#3484BE',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
  blueBorder: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  forgotPassword: {
    color: colors.primary,
    marginBottom: 10,
  },
  // Wave styles
  waveContainer: {
    position: 'absolute',
    left: -206,
    bottom: -360,
    flexDirection: 'row',
  },
  waveImage: {
    width: 412,
    height: 300,
  },
  secondWave: {
    position: 'absolute',
    bottom: '9%',
  },
});

export default styles;