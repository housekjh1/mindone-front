import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Graph = ({ datas }) => {
    const actual = datas.actual.flat();
    const predict = datas.predict.flat();
    const dateTime = datas.dateTime.flat();
    const mse = datas.mse;
    const mae = datas.mae;
    const r2 = datas.r2;
    const data = {
        labels: dateTime,
        datasets: [
            {
                label: 'Predict',
                data: predict,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
                fill: false,
                tension: 0.1
            },
            {
                label: 'Actual',
                data: actual,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
                fill: false,
                tension: 0.1
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            }
        },
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='w-[700px] h-[350px]'>
                <Line data={data} options={options} />
            </div>
            <div className='mt-[12px] text-center text-[12px] font-[1000]'>
                MSE : {mse}, MAE : {mae}, R² : {r2}
            </div>
        </div>
    );
}

export default Graph
