import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import api from '../../services/api';
import {useState, useCallback} from 'react'

function MoreContent() {
    const [proximosDias, setProximosDias] = useState([]);
    const [cidade, setCidade] = useState('');
    const [cidades, setNomeCidades] = useState('');

    const fetchDataHadler = useCallback(() => {
        async function searchCity(){
            const resposta = await api.get(`forecast.json?key=c9ca1b0bdbc14c4fb1b185437221609&q=${cidade}&days=10&aqi=yes&alerts=yes&lang=pt`);
            setProximosDias(resposta.data.forecast.forecastday);
            setNomeCidades(resposta.data.location.name)
        }
        searchCity();
    }, [cidade])

    return(
    <View style={styles.background}>
        <View style={styles.body}>
        <TextInput placeholder='Digite uma cidade' style={styles.input} onChangeText={cidade => setCidade(cidade)} onSubmitEditing={fetchDataHadler}></TextInput>
        <ScrollView>
        {proximosDias.map((climas, index)=>{
            return(
                <View key={index}>
                    <View style={styles.card}>
                        <View>
                            <Text>{cidade}</Text>
                            <Text>{climas.date}</Text>
                            <Text>TempMedia Dia:{climas.day.avgtemp_c} °C/ {climas.day.avgtemp_f}°F </Text>
                        </View>
                        <View>
                            <Text>{climas.day.maxtemp_c} / {climas.day.mintemp_c}</Text>
                            <Text>{climas.day.maxwind_kph}</Text>
                            <Text>Visibilidade média do Dia:{climas.day.avgvis_km}</Text>
                            <Image source={{ uri:`https://${climas.day.condition.icon}` }} style={{width: 90, height: 70}} />
                        </View>
                    </View>
                </View>
            )
        })}
        </ScrollView>
        </View>
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

export default MoreContent;