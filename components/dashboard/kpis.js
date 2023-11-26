import React from 'react';
import 'tailwindcss/tailwind.css';

const Kpis = () => {
    return (
        <div className="flex flex-wrap  p-2">
            <div className="flex flex-col items-center p-2 m-2 w-60 bg-blue-500 text-white rounded-lg shadow-lg">
                <span className="text-lg font-semibold">Larvae</span>
                <span className="text-2xl font-bold">249</span>
            </div>
            <div className="flex flex-col items-center p-2 m-2 w-60 bg-orange-500 text-white rounded-lg shadow-lg">
                <span className="text-lg font-semibold">Pupae</span>
                <span className="text-2xl font-bold">25</span>
            </div>
            <div className="flex flex-col items-center p-2 m-2 w-60 bg-green-500 text-white rounded-lg shadow-lg">
                <span className="text-lg font-semibold">Eggs</span>
                <span className="text-2xl font-bold">1500</span>
            </div>
            <div className="flex flex-col items-center p-2 4 m-2 w-60 bg-red-500 text-white rounded-lg shadow-lg">
                <span className="text-lg font-semibold">Feed Stock</span>
                <span className="text-2xl font-bold">56</span>
            </div>
            <div className="flex flex-col items-center p-2 4 m-2 w-60 bg-blue-500 text-white rounded-lg shadow-lg">
                <span className="text-lg font-semibold">Temperature</span>
                <span className="text-2xl font-bold">56</span>
            </div>
        </div>
    );
}

export default Kpis;
