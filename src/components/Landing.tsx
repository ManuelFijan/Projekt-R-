import React from "react";
import {Link} from "react-router-dom";

function Landing() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-800 text-gray-300">

            <div className="flex flex-col items-center p-8 rounded-lg shadow-lg bg-gray-900 w-full max-w-md">

                <div className="flex flex-col items-center mb-8">
                    <img
                        alt="Your Company"
                        src="/images/logoVeci1.png"
                        className="mx-auto h-22 w-auto"
                    />
                </div>

                <h1 className="text-xl font-bold mb-6 text-center text-white">
                    Ponude koje čvrsto stoje – baš kao vaši projekti!
                </h1>

                <div className="w-full">
                    <Link to="/sign-in">
                        <button className="w-full py-2 mb-4 rounded-full bg-white text-gray-800 font-semibold hover:bg-gray-300">
                            Prijava
                        </button>
                    </Link>

                    <div className="flex items-center justify-center mb-4">
                        <hr className="w-full border-gray-600" />
                        <span className="px-2 text-gray-400">ili</span>
                        <hr className="w-full border-gray-600" />
                    </div>

                    <Link to={"/register"}>
                        <button className="w-full py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600">
                            Registracija
                        </button>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-4 text-gray-500 text-xs flex space-x-4">
                <a href="#" className="hover:text-gray-300">O nama</a>
                <a href="#" className="hover:text-gray-300">Uvjeti poslovanja</a>
                <a href="#" className="hover:text-gray-300">Izjava o privatnosti</a>
                <a href="#" className="hover:text-gray-300">Kontakt</a>
            </div>
        </div>
    );
}

export default Landing;
