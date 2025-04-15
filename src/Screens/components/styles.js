import { StyleSheet } from 'react-native';

export const colors = {
  darkgreen: '#041b15ff',
  blue: '#6a8eaeff',
  blueDark: '#55748F',
  blueLight: '#93B3CF',
  pink: '#ff82a9ff',
  pinkLight: '#FDB2C9',
  pinkDark: '#FF5288',
  orange: '#ffa737ff',
  orangeLight: '#F8C98D',
  white: '#fffffcff',
};

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 90,
    },
    h1: {
      fontSize: 25,
      fontVariant: 'bold',
      alignSelf: 'center',
      padding: 10,
      color: darkgreen
    },
    h2: {
      alignSelf: 'center',
      fontSize: 20,
      padding: 2,
      margin: 2,
      color: darkgreen
    },
    h3: {
      alignSelf: 'center',
      fontSize: 20,
      padding: 2,
      margin: 2,
      color: darkgreen
    },
    p: {
        fontSize: 18,
        padding: 2,
        margin: 2
    },
    button: {
      fontSize: 20,
    },
    input: {
      fontSize: 20,
      borderColor: darkgreen,
      borderRadius: 10,
    },
    inputLabel: {
      color: darkgreen,
      fontSize: 16,
      padding: 1,
    },
});