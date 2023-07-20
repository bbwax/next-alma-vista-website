import { useState } from 'react';


export default function ContactPage() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
    });

    const handleInputChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });

        if (response.ok) {
            // clear the form
            setFormState({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                message: '',
            });
            alert('Message sent successfully');
        } else {
            const { message } = await response.json();
            alert(`An error occurred: ${message}`);
        }
    };

    return (
        <div className="flex flex-col md:flex-row w-full items-center justify-center md:my-4">
            <div className="w-full md:w-1/2 p-4 mt-">
                <div className='md:flex md:flex-col md:items-center md:justify-center m-4'>
                    <h2 className="text-3xl font-semibold flex justify-center pb-4">Contact Us</h2>
                    <p className='text-center'>
                        If there are any questions, concerns, or enthusiasm to learn more about this wonderful place,<br/>
                        Fill out the form below!
                        </p>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
                <form
                    className=" p-6"
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col sm:flex-col md:flex-row w-full'>
                        <div className="pr-2 w-full mb-4">
                            <label className="block mb-2">First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formState.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-slate-200  px-3 py-2 border shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div className="w-full mb-4">
                            <label className="block mb-2">Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formState.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full bg-slate-200 px-3 py-2 border  shadow-sm focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 bg-slate-200 border shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formState.phoneNumber}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border bg-slate-200 shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Message:</label>
                        <textarea
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border bg-slate-200 shadow-sm focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-min px-3 py-2 text-white bg-slate-800 rounded-lg shadow-sm hover:bg-gray-900"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}