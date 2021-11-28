import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  newsImg: {
    width: '100%',
    height: 300,
  },
  container: {
    padding: 15,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 20,
  },
  text: {
    marginBottom: 15,
    textAlign: 'left',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'left',
    paddingBottom: 15,
  },
});
