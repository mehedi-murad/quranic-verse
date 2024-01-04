import React from 'react';

const Modals = ({isVisible, onClose, children}) => {
    if(!isVisible) return null;
    const handleClose = e => {
        if(e.target.id ==='frame') onClose();
    }
    return (
        <div id='frame' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] '>
                <div className='flex justify-end'>
                <button className='text-white text-xl' onClick={() => onClose()}>X</button>
                </div>
                <div className='bg-white p-4 rounded-lg'>
                    {children}
                </div>

            </div>
        </div>
    );
};

export default Modals;