import {View, Text, Link, StyleSheet, ScrollView, TextInput, Image} from 'react-native';
import api from '../../services/api';
import { useState, useCallback } from 'react';
// import MoreContent from '../MoreContent';

function Home(){

    const [cidade, setCidade] = useState('London');
    const [proximosDias, setProximosDias] = useState([]);
    const [cidades, setNomeCidades] = useState([]);

    const fetchDataHandler = useCallback(() => {
        async function searchCity(){
            const resposta = await api.get(`forecast.json?key=c9ca1b0bdbc14c4fb1b185437221609&q=${cidade}&days=2&aqi=no&alerts=no&lang=pt`);
            setProximosDias(resposta.data.forecast.forecastday);
            setNomeCidades(resposta.data.location.name)

            
        }
        searchCity();
    }, [cidade])

    return(
        <View style={styles.background}>
            <ScrollView>
            <View style={styles.body}>

                <TextInput placeholder='Enter a city' style={styles.input}  placeholderTextColor="#FFF" onChangeText={cidade => setCidade(cidade)}
                onSubmitEditing={fetchDataHandler}/>

                {proximosDias.map((climas, index)=>{
                    return(
                        <View key={index}>
                            <View style={styles.card}>
                                <View style={styles.card_row}>
                                    <Text style={styles.textName}>{cidade}</Text>
                                    <Text style={styles.text}>{climas.date}</Text>
                                    <View style={styles.textMargin}>
                                        <Text style={styles.textTemp}>{climas.day.avgtemp_c}°</Text>
                                    </View>
                                </View>
                                <View style={styles.card_row}>
                                    <Text style={styles.text}>{climas.day.maxtemp_c} / {climas.day.mintemp_c}</Text>
                                    <Text style={styles.text}>Max wind: {climas.day.maxwind_kph}</Text>
                                    
                                    <Text style={styles.text}>Humidade: {climas.day.avghumidity}</Text>
                                    <Image source={{ uri:`https://${climas.day.condition.icon}` }} style={{width: 90, height: 70}} />
                                </View>
                                </View>
                            </View>
                    )
                })}
            </View>
            </ScrollView>
        </View>
    )


}
const styles = StyleSheet.create({
    input:{
        marginTop: 50,
        marginBottom: 50,
        padding: 5,
        width: 200,
        display: 'flex',
        height: "auto",
        alignItems: "flex-start",
        justifyContent: 'space-between',
        opacity: 50,
        backgroundColor: '#1B66F9A6',
        borderRadius: 5,
        color: 'white',
        
    },
    card:{
        marginBottom: 50,
        padding: 10,
        backgroundColor: '#1B66F9A6',
        borderColor: "#1B66F9A6",
        width: 320,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1,
            },
    card_row:{
        display: 'flex',
        justifyContent: 'flex-start',
        textAlign: 'right'
    },
    body:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background:{
        backgroundColor: '#1B1D2E',
        height: '100%'
    },
    text:{
        marginBottom: 5,
        color: '#FFF',
        fontSize: 16
    },
    textName:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textTemp:{
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textMargin:{
        marginTop: 50,        
    }
})
export default Home;
