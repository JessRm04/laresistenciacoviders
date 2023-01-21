import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale, 
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import '../tracker-seis/Tracker_seis.css';
import Layout from '../tracker-layout/Layout';
import TrackerDiecinueve from '../tracker-covid19/Tracker-covid-diecinueve';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'USA'
        },
    },
};

const labels = ['01-Jan', '03-Jan', '05-Jan', '07-Jan', '09-Jan', '11-Jan', '13-Jan', '15-Jan', '17-Jan', '19-Jan', '21-Jan', '23-Jan', '25-Jan', '27-Jan', '29-Jan'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Confirmed',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 80000000})),
            borderColor: 'rgb(0,0,255)',
            backgroundColor: 'rgb(0,0,255)',
        },
        {
            label: 'Death',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 80000000})),
            borderColor: 'rgb(255,0,0)',
            backgroundColor: 'rgb(255,0,0)', 
        },
        {
            label: 'Recovered',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 80000000})),
            borderColor: 'rgb(0,128,0)',
            backgroundColor: 'rgb(0,128,0)',
        },
    ],
};

export default function TrackerSeis() {
    return(

        <div className='grafica-container'>
            <div>
                <Layout />
                <TrackerDiecinueve />
            </div>
            <div className='container-grafica'>
                <div>
                    <div className='grafica grafica1'>
                        <Line options={options} data={data} />
                    </div>;  
                </div>
                <div>
                    <div className='grafica grafica2'>
                        <Line options={options} data={data} />
                    </div>;  
                </div>
                <div>
                    <div className='grafica grafica3'>
                        <Line options={options} data={data} />
                    </div>;  
                </div>
                <div>
                    <div className='grafica grafica4'>
                        <Line options={options} data={data} />
                    </div>;  
                </div>
            </div>
        </div>
    )
}

