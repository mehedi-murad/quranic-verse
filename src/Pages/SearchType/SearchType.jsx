import React, { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';

const SearchType = () => {
    const [surah, setSurah] = useState([])

    useEffect(() => {
        fetch('https://al-quran-server.vercel.app/surah')
        .then(res => res.json())
        .then(data => {
            setSurah(data)
        })
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                surah.map(item =>
                    
                    <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{item.englishName}</h2>
                        <p>Total Ayahs: {item.numberOfAyahs}</p>
                        <p>Revelation Place: {item.revelationType}</p>
                    </div>
                    </div>
                    )
            }
        </div>
    );
};

export default SearchType;