import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

import { useLoaderData } from 'react-router-dom';
import './Statistics.css'
const Statistics = () => {
    const loadData = useLoaderData()
    const data = loadData.data;
    // const { total } = data
    console.log(data);
    return (
        <div className='statistics'>
            <h1>Statistics BarChart for quiz Total and Name  !</h1>
            <BarChart width={900} height={450} data={data}>
                <XAxis dataKey="name" stroke="#1780d6e9" />
                <YAxis />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey="total" fill="#1780d6e9" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Statistics;