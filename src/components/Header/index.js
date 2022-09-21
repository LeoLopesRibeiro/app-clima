import { StyleSheet, View, Text, Image } from "react-native";

function Header(){
    return(
        <View style={styles.header}> 
            <Image source={require('../../../assets/logo.png')} style={{width: 40, height: 40}}/>
            <Text style={styles.texto}>StormApp</Text>
           
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        width: '100%',
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texto:{
        marginLeft: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
})
export default Header;