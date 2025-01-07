import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import BackButton from "../components/BackButton";

interface User {
    firstName: string;
    lastName: string;
    email: string;
    primaryBusinessArea: string;
    profilePicture: string;
}

function ProfilePage() {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>({
        firstName: "Ivo",
        lastName: "Ivić",
        email: "ivo@gmail.com",
        primaryBusinessArea: "Grubi radovi",
        profilePicture: "/images/worker.jpg",
    });

    const [formData, setFormData] = useState<User>({ ...user });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setUser({ ...formData });

        alert("Podaci uspješno ažurirani!");
    };

    return (
        <>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-800 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Logo />
                    <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-orange-500">
                        Moj Profil
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <BackButton to="/homepage" />
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="flex flex-col items-center">
                                <img
                                    src={user.profilePicture}
                                    alt="Profile"
                                    className="h-24 w-24 rounded-full object-cover mb-4"
                                />
                            </div>

                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Ime
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                    Prezime
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="primaryBusinessArea" className="block text-sm font-medium leading-6 text-gray-900">
                                    Primarno područje poslovanja
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="primaryBusinessArea"
                                        name="primaryBusinessArea"
                                        required
                                        value={formData.primaryBusinessArea}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm"
                                    >
                                        <option>Grubi radovi</option>
                                        <option>Voda i plin</option>
                                        <option>Elektrika</option>
                                        <option>Keramika</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                >
                                    Ažuriraj Profil
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfilePage;