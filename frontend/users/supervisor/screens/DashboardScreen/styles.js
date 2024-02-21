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
    flex: 1,
  },
  leftColumn: {
    flex: 1,
    padding: 16,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  meterProgressContainer: {
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
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
    height: "80%",
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
    height: 190,
  },
  randomCardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  randomCardNumber: {
    fontSize: 40,
  },
  satisfactionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: "20%",
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
    fontSize: 36,
    color: '#FFD400',
  },
});


export default styles;