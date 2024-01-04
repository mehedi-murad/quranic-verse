import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SurahDetails = () => {
    const allVerses = useLoaderData()
    // const {arabic_text, translation, sura} = verses
    return (
        <div className='bg-slate-600 text-white'>
            <h2>Details of: {allVerses.sura}</h2>
            <p>{allVerses.arabic_text}</p>
            
        </div>
    );
};

export default SurahDetails;