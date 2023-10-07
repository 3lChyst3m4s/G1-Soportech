import { StyleSheet } from "react-native";
import colors from '../../../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 20,
  },
  space: {
    width: 0.5,
  },
  activeTabBox: {
    backgroundColor: '#5D6AE0',
    padding: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 85,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  statusBox: {
    backgroundColor: colors.primary,
    padding: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 85,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
    borderBottomColor: 'white',
  },  
  statusText: {
    color: "white",
    fontWeight: "light",
    fontSize: 11,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ContainerInfo: {
    borderColor: "gray",
    backgroundColor: "#E7EDFF",
    marginHorizontal: 20,
    height: 377,
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
  description: {
    color: "black",
    fontWeight: "light",
    fontSize: 14,
  },
  ContainerLog: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "gray",
    backgroundColor: "#E7EDFF",
    marginHorizontal: 20,
    height: 377,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  supportMessage: {
    flexDirection: 'row', 
    justifyContent: 'flex-end',
  },
  userMessage: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',
  },
  messageCont: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  supportTitle: {
    alignSelf: 'flex-end',
    color: colors.primary,
    fontSize: 15,
  },
  userTitle: {
    alignSelf: 'flex-start',
    color: colors.primary,
    fontSize: 15,
  },
  messageUser: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  messageText: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 10,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 10,
  },
  sendMessageButton: {
    marginLeft: 10,
    padding: 8,
    backgroundColor: colors.primary,
    color: '#fff',
    borderRadius: 10,
  },
  spaceButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

export default styles;