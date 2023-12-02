import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import tailwindColors from '../../config/tailwindColors';

const styles = StyleSheet.create({
  containerS: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  square: {
    position: 'absolute',
    width: '100%',
    height: 45,
    top: 0,
    backgroundColor: colors.secondary,
  },
  supportechText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    flexDirection: 'row',
    marginTop: '25%',
  },
  blueText: {
    color: '#061E4B',
  },
  tealText: {
    color: '#3484BE',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: colors.primary,
    marginVertical: 30,
    marginLeft: 50,
  },
  subtitle: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
  },
  stepSubtitle: {
    fontSize: 17,
    marginVertical: 10,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  stepActive: {
    width: 10,
    height: 10,
    backgroundColor: colors.primary,
    borderRadius: 10,
    marginRight: 10,
  },
  step: {
    width: 10,
    height: 10,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginRight: 10,
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
  cameraContainer: {
    width: '100%',
    height: 600,
    position: 'absolute',
    top: '-70%',
    zIndex: 100,
  },
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
  photosContainer: {
    width: '70%',
    height: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: tailwindColors.blue[100],
    overflow: 'hidden',
  },
  persona: {
    width: 180,
    height: 180,
    backgroundColor: 'white',
    borderRadius: 90,
    marginRight: 10,
    overflow: 'hidden',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 550,
    overflow: 'hidden',
  },
  camera: {
    width: '100%',
    height: '100%',
  },
  cameraButtons: {
    height: 160,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  photoButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 25,
  },
  stepButtons: {
    width: '70%',
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    alignItems: 'center',
    borderRadius: 20,
  },
  nextButton: {
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default styles;