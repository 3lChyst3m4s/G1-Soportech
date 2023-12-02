import { StyleSheet } from 'react-native'
import colors from '../../../../config/colors'
import tailwindColors from '../../../../config/tailwindColors'

const styles = StyleSheet.create({
  logContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "gray",
    backgroundColor: tailwindColors.blue["100"],
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    height: 500,
  },
  form: {
    width: '100%',
    height: '80%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: tailwindColors.gray["900"],
    backgroundColor: tailwindColors.gray["100"],
    position: 'absolute',
    top: 20,
    left: 15,
    zIndex: 10,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: tailwindColors.gray["900"],
    textAlign: 'center',
    marginTop: 10,
  },
  ratingContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'space-between',
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: tailwindColors.gray["900"],
    paddingLeft: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: '80%',
  },
  commentInput: {
    width: '90%',
    height: '40%',
    borderWidth: 1,
    borderColor: tailwindColors.gray["900"],
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
    alignSelf: 'center',
  },
  submitButton: {
    width: '30%',
    height: '10%',
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  messageContainer: {
    width: '100%',
    height: '85%',
    marginBottom: 10,
  },
});

export default styles