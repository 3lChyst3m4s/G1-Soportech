import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  webLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  mobileLayout: {
    backgroundColor: '#fff',
  },
  leftColumn: {
    flex: 1,
    padding: 16,
  },
  globalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
    marginVertical: 20,
    textAlign: 'left',
  },
  meter: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginLeft:15,
    marginRight:15,
    marginTop:10,
    marginBottom:5,
  },
  meterText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7C7D99'
  },
  meterProgressContainer: {
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  rightColumn: {
    flex: 1,
    padding: 16,
  },
  randomCardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height: "60%",
    width: "100%",
  },
  randomCard: {
    width: "48%",
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    height: 180,
  },
  randomCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
    textAlign: 'center',
  },
  randomCardNumber: {
    fontSize: 35,
    fontWeight: 'bold',
    color: "#2738C8"
  },
  satisfactionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: "10%",
    width: "100%",
    marginBottom:10,
  },
  satisfactionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  starsContainer: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 40,
    color: '#FFD400',
  },
});


export default styles;