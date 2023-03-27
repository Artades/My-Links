import { AboutProps } from '@/interfaces/about.interface';
import React, { FC } from 'react';

const About:FC<{data: AboutProps}> = ({data}) => {
    return (
			<div className="w-full bg-zinc-800 h-auto rounded-md drop-shadow-lg ">
                <div className="flex flex-col w-full items-center h-full p-5" >
                    <img className="w-40  h-40 rounded-full border border-sky-300 " src={data?.avatarUrl} alt="Avatar" />
                    <h1 className="text-3xl text-white font-bold my-5">{data?.name}</h1>
                    {/* <hr  className=' bg-zinc-700 w-full my-5 opacity'/> */}
                    <button  className='py-2 px-7 bg-blue-500 text-md font-bold rounded-md text-white hover:bg-blue-400 transition hover:shadow '>Email</button>

                </div>
            </div>
		);
};

export default About;