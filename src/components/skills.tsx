import Aws from './common/aws';
import Cpp from './common/cpp';
import Docker from './common/docker';
import Graphql from './common/graphql';
import MongoDb from './common/mongodb';
import Postgres from './common/postgres';
import Prisma from './common/prisma';
import Typescript from './common/typescript';

function Skills() {
    return (
        <div className="bordr-2 border-emeald-600 mt-20 flex-col">
            <div className="flex gap-5 justify-center">
                <div className="text-3xl font-bold text-slate-300">Skills</div>
                <div className="border-gray-700 border-t-[1px] w-72 mt-5"></div>
            </div>

            <div className="flex justify-center items-center gap-6 mt-10">

                <button className="rounded-xl before:ease relative h-16 w-48 overflow-hidden border-2 border-blue-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-700 hover:before:-translate-x-52">
                    <span className="relative z-10">
                        <span className="flex gap-3 font-semibold justify-center mt-1">
                                <Cpp />
                                <p className='mt-2'>C++</p>
                            </span>
                        </span>
                </button>

                <button className="rounded-xl before:ease relative h-16 w-48 overflow-hidden border-2 border-blue-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-700 hover:before:-translate-x-52">
                    <span className="relative z-10">
                        <span className="flex gap-3 font-semibold justify-center mt-1">
                                <Typescript />
                                <p className='mt-2'>Typescript</p>
                            </span>
                        </span>
                </button>

                <button className="rounded-xl before:ease relative h-16 w-48 overflow-hidden border-2 border-blue-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-700 hover:before:-translate-x-52">
                    <span className="relative z-10">
                        <span className="flex gap-3 font-semibold justify-center mt-3">
                                <Docker />
                                <p className='mt-2 -ml-4'>Docker</p>
                            </span>
                        </span>
                </button>

                <button className="rounded-xl before:ease relative h-16 w-48 overflow-hidden border-2 border-blue-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-700 hover:before:-translate-x-52">
                    <span className="relative z-10">
                        <span className="flex gap-3 font-semibold justify-center mt-1">
                                <Aws />
                                <p className='mt-3 -ml-3'>AWS</p>
                            </span>
                        </span>
                </button>

                <button className="rounded-xl before:ease relative h-16 w-48 overflow-hidden border-2 border-blue-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-700 hover:before:-translate-x-52">
                    <span className="relative z-10">
                        <span className="flex gap-3 font-semibold justify-center mt-1">
                                <Graphql />
                                <p className='mt-3 -ml-3'>GraphQL</p>
                            </span>
                        </span>
                </button>


                <button className="rounded-xl before:ease relative h-16 w-48 overflow-hidden border-2 border-blue-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-700 hover:before:-translate-x-52">
                    <span className="relative z-10">
                        <span className="flex gap-3 font-semibold justify-center mt-1">
                                <Prisma />
                                <p className='mt-3 -ml-3'>Prisma</p>
                            </span>
                        </span>
                </button>

                <button className="rounded-xl before:ease relative h-16 w-48 overflow-hidden border-2 border-blue-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-700 hover:before:-translate-x-52">
                    <span className="relative z-10">
                        <span className="flex gap-3 font-semibold justify-center mt-1">
                                <MongoDb />
                                <p className='mt-3 -ml-3'>MongoDB</p>
                            </span>
                        </span>
                </button>

                <button className="rounded-xl before:ease relative h-16 w-48 overflow-hidden border-2 border-blue-900 bg-slate-900 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-20 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-slate-700 hover:before:-translate-x-52">
                    <span className="relative z-10">
                        <span className="flex gap-3 font-semibold justify-center mt-1">
                                <Postgres />
                                <p className='mt-3 -ml-3'>Postgres</p>
                            </span>
                        </span>
                </button>
            </div>
        </div>
    );
}

export default Skills