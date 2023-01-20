import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";
import axios from 'axios';
//import Search_data from "./Search_data";
//import Prueba from './Prueba';

function Grafica() {

    const [cases, setCases] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);

    const labels = ['01-Jan', '03-Jan', '05-Jan', '07-Jan', '09-Jan', '11-Jan', '13-Jan', '15-Jan', '17-Jan', '19-Jan', '21-Jan', '23-Jan', '25-Jan', '27-Jan', '29-Jan'];
    const data = {
        labels,
        datasets:[{
            label: 'Confirmed',
            backgroundColor: 'rgb(0,0,255)',
            borderColor: 'rgb(0,0,255)',
            borderWidth: 1,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 80000000}))
        },
        {
            label: 'Death',
            backgroundColor: 'rgb(255,0,0)',
            borderColor: 'rgb(255,0,0)',
            borderWidth: 1,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 80000000}))
        },
        {
            label: 'Recovered',
            backgroundColor: 'rgb(0,128,0)',
            borderColor: 'rgb(0,128,0)',
            borderWidth: 1,
            data: labels.map(() => faker.datatype.number({ min: 0, max: 80000000}))  
        }]
    };
    const opciones = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'USA'
            }
        }
    }

    const peticionApi = async() => {
        await axios.get('https://disease.sh/v3/covid-19/countries')
        .then(response => {
            let respuesta = response.data;
            let auxCases = [], auxDeaths = [], auxRecovered = [];
            respuesta.map(elemento => {
                auxCases.push(elemento.cases);
                auxDeaths.push(elemento.deaths);
                auxRecovered.push(elemento.recovered);
            });
            setCases(auxCases);
            setDeaths(auxDeaths);
            setRecovered(auxRecovered);
        })
    }

    useEffect(() => {
        peticionApi();
    },[])


    return (
        <div className='grafica'>
            <Line data = {data} options = {opciones} />
        </div>
    )
}

export default Grafica;
