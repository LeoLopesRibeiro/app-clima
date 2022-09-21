import {View, Text, Link, Image, StyleSheet, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';

function Card(props){


    const [clima, setClima] = useState();
    const [maxima, setMax] = useState();
    const [minima, setMin] = useState();
    const [sensacao, setSencacao] = useState();
    const [umidade, setUmidade] = useState();
    const [condicao, setCondicao] = useState();
    const [uv, setUv] = useState();
    const [icon, setIcon] = useState();

    useEffect(()=> {
        async function lerCidade(){
            async function searchCity(){
                const resposta = await api.get(`forecast.json?key=e8a403fa630d442d8bf183832220209&q=${cidade}&days=2&aqi=no&alerts=no`);
                setProximosDias(resposta.data.forecast.forecastday);
            }
            searchCity();
           
            const data = resposta.data


            setClima(data.current.temp_c);
            setMax(data.forecast.forecastday[0].day.maxtemp_c);
            setMin(data.forecast.forecastday[0].day.mintemp_c);
            setSencacao(data.current.feelslike_c);
            setUmidade(data.current.humidity);
            setCondicao(data.current.condition.text);
            setUv(data.current.uv);
            setIcon(data.current.condition.icon)
        };

        lerCidade();

    }, []);
    return(
        <View style={styles.card}>
            <View>
                {/* <Text style={styles.textoPrincipal}>{props.}</Text> */}
                {/* <Text>{Aqui entra o dia da semana em que o clima esta sendo mostrado}</Text>             */}
                    <View style={styles.asideCard}>
                        <Image source={{ uri:`https://${props.icon}` }} style={{width: 90, height: 70}} />
                            <Text style={styles.tempAtual}>{props.clima}º</Text>
                    </View>  
                    <Text style={styles.termica}>Sesação térmica de: {props.sensacao}º</Text>
            </View>

            <View style={styles.textoTempo}> 
                <Text style={styles.texto}>{props.condicao}</Text> 
                <Text style={styles.texto}>{props.maxima} / {props.minima}</Text> 
                <Text style={styles.texto}>Índice uv: {props.uv}</Text> 
                <Text style={styles.texto}>Umidade: {props.umidade}%</Text>

            </View>
           
            {/* <Text>================================================</Text> */}
        </View>
        
    )
}

const styles = StyleSheet.create({
    
})

export default Card;