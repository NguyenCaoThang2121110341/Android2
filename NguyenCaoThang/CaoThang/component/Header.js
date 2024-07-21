import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('../assets/lg.jpg')} style={styles.logo} />
            {/* <Text style={styles.headerText}>App Bán Hàng</Text> */}

        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#f2f2f2',
        // paddingVertical: 5,
        // paddingHorizontal: 5,
        // marginBottom: 10,
    },
    // headerText: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    // },
    logo: {
        width: 370,
        height: 40,
        marginLeft:5,
    },
});
