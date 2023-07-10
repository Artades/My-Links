import React from 'react';

const SkeletonProjectItem = () => {
    return (
        <div className="rounded-lg h-[200px] w-full flex  animate-pulse">
            <div className="w-full h-full flex flex-col items-start gap-2">
                <span className="w-20 h-4 bg-zinc-500 mb-2 rounded-lg"></span>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-zinc-500"></div>

                        <span className="w-32 h-3 bg-zinc-500 rounded-lg mt-3"></span>

                </div>

                <div className={"w-full flex flex-col items-start gap-2"}>
                    <span className="w-full h-4 bg-zinc-500 rounded-lg"></span>
                    <span className="w-full h-4 bg-zinc-500 rounded-lg"></span>
                </div>

            </div>
            <span className="w-20 h-4 bg-zinc-500 rounded-lg absolute bottom-3"></span>
        </div>
    );
};

export default SkeletonProjectItem;
