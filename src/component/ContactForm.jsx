import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = async () => {
        try {
            const response = await emailjs.send('service_6nnped4', 'template_ns57a5c', {
                email: email,
                message: message,
            }, '8voY0hpqj-7X7Duzp'); // Your Public Key

            if (response.status === 200) {
                alert('Email sent successfully!');
                // Reset the form fields
                setEmail('');
                setMessage('');
            } else {
                alert('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending email');
        }
    };

    return (
        isOpen && (
            <div className="fixed bottom-8 right-8 shadow-lg bg-transparent backdrop-blur-sm border-white/20 border-[1px] rounded-2xl p-4 w-96 z-50">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-2 right-2 text-white hover:text-gray-700 text-2xl pr-2"
                >
                    &times;
                </button>
                <h2 className="text-lg font-bold text-white/90 mb-2 p-4">Have a project in mind?</h2>
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded mb-2 bg-[transparent] border-white/20 placeholder-white/90 text-white font-roboto"
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border-[1px] rounded mb-2 bg-transparent border-white/20 placeholder-white/90 text-white font-roboto"
                    rows="4"
                />
                <button
                    onClick={handleSend}
                    className="w-full bg-green text-white py-2 rounded hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
        )
    );
};

export default ContactForm;
