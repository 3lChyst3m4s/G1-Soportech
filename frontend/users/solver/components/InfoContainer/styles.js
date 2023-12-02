import { StyleSheet } from 'react-native'
import colors from '../../../../config/colors'
import tailwindColors from '../../../../config/tailwindColors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tailwindColors.gray[100],
  },
  infoContainer: {
    borderColor: "gray",
    backgroundColor: "#E7EDFF",
    marginHorizontal: 20,
    height: 377,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleColumn: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  subtitle: {
    color: "black",
    fontWeight: "light",
    fontSize: 14,
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 40,
    borderRadius: 40,
    width: 200,
    height: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles