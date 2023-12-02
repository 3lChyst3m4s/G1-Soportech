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
  messageContainer: {
    width: '100%',
    height: '85%',
    marginBottom: 10,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 40,
    width: 200,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles