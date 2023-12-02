import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  square: {
    position: 'absolute',
    width: '100%',
    height: 45,
    top: 0,
    backgroundColor: colors.secondary,
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
  loginButton: {
    width: 300,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPassword: {
    color: colors.primary,
    marginBottom: 10,
  },
  waveContainer: {
    zIndex: -1,
    left: '-50%',
    height: 300,
    width: '100%',
    position: 'absolute',
  },
  waveImage: {
    opacity: 0.9,
    width: '100%',
    height: '100%',
  },
  secondWave: {
    position: 'absolute',
    bottom: '9%',
  },
});

export default styles;