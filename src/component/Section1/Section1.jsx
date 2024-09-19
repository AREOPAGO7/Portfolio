import React from 'react';



const Section1 = () => {
    return (
      <div className='flex flex-col lg:flex-row p-8 gap-5'>
            <div className="bg-tahiti border-2 border-solid border-bermuda p-8 rounded-lg = flex-grow shadow-custom">
                <h2 className="text-white text-center text-2xl font-semibold mb-6">Frontend Skills</h2>
                <div className="grid grid-cols-3 gap-4">
                    
                </div>
            </div>

            <div className="bg-tahiti border-2 border-solid h-96 border-bermuda p-8 rounded-lg = flex-grow shadow-custom">
                <h2 className="text-white text-center text-2xl font-semibold mb-6">Backend Skills</h2>
                <div className="grid grid-cols-3 gap-4">
                    
                </div>
            </div>

            <div className="bg-tahiti border-2 border-solid border-bermuda p-8 rounded-lg = flex-grow shadow-custom">
                <h2 className="text-white text-center text-2xl font-semibold mb-6">Backend Skills</h2>
                <div className="grid grid-cols-3 gap-4">
                    
                </div>
            </div>
        </div>
    );
};

export default Section1;
