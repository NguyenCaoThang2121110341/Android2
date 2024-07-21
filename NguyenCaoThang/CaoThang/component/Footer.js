import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
    <Text style={styles.footerText}>© 2023 - Nguyen Cao Thang</Text>
  </View>
  );
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: 'green',
        paddingVertical: 3,
        paddingHorizontal: 3,
        marginTop: 3,
      },
      footerText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'white'
      },
});
