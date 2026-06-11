import Navbar from "../components/navBar";
import { useState, useEffect } from "react";
import { useTypewriter } from "../hooks/typeWritter";
import CustomTextInput from "../components/custom_text_input";
import LoadingDot from "../components/loading_dot";


const NewPortfolio = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const displayText = useTypewriter("Frontend Developer", 150);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitStatus, setSubmitStatus] = useState(false);


    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDowlaodCv = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {

            await new Promise(resolve => setTimeout(resolve, 2000));





            const cvUrl = "/Mr.Amphai CV Resume (3).pdf";
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = "Amphai_CV.pdf";
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("can not downlaod this time", error);
        } finally {
            setIsLoading(false);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Basic validation
            if (!formData.name || !formData.email || !formData.feedback) {
                throw new Error('Please fill in all required fields');
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Your API call or form submission logic
            // const response = await submitFormToAPI(formData);

            // Success handling
            setSubmitStatus('success');
            alert('Form submitted successfully!');

            // Reset form
            setFormData({
                name: '',
                email: '',
                feedback: ''
            });

        } catch (error) {
            // Error handling
            setSubmitStatus('error');
            alert(`Submission failed: ${error.message}`);
            console.error('Form submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGitHup = () => {
        window.open("https://github.com/Amphai003");
    };

    // const handleFacebook =()=>{
    //     window.open("");
    // };
    
    

    return (
        <div className="min-h-screen bg-black">
            <div className="p-2 bg-black">
                <div className="flex flex-row items-center justify-between gap-4 pb-4 border-b border-white">
                    <h1 className="text-xl font-bold lg:text-2xl">
                        <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
                            Amphai
                        </span>
                        {" "}
                        <span className={`text-blue-500 inline-block ${isMounted ? 'animate-bounce' : ''} drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]`}>
                            DEV
                        </span>
                    </h1>
                    <Navbar />
                </div>

                <div className="px-6 pt-6 md:px-20 lg:px-40">
                    <div className="flex flex-row items-center gap-8">
                        <div className="flex-1">
                            <h1 className="mb-4 text-4xl font-bold">
                                <span className="text-white drop-shadow-[0_0_8px_rgba(225,225,255,0.7)]">
                                    Hi, I am
                                </span>
                            </h1>
                            <h2 className="text-2xl font-bold min-h-[40px]">
                                <span className="text-white drop-shadow-[0_0_8px_rgba(225,225,255,0.7)]">
                                    {displayText}
                                </span>
                            </h2>
                        </div>
                        <div className="flex justify-end flex-1">
                            <img
                                src="/src/assets/Amphai.jpg"
                                alt="Amphai"
                                className="object-cover w-48 h-48 transition-all duration-500 border-4 border-white rounded-full shadow-lg lg:w-56 lg:h-56 hover:scale-110 hover:rotate-3"
                            />
                        </div>
                    </div>

                    <div className="flex mt-10 space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 transition-colors duration-300 border-2 border-gray-400 rounded-full hover:border-white">
                            <img
                                src="/facebook.png"
                                alt="facebook"
                                className="object-cover w-8 h-8 rounded-full"
                            />
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 transition-colors duration-300 border-2 border-gray-400 rounded-full hover:border-white">
                            <img
                                src="/githup.png"
                                alt="github"
                                className="object-cover w-8 h-8 rounded-full"
                                onClick={handleGitHup}
                                title="GitHup"
                            />
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 transition-colors duration-300 border-2 border-gray-400 rounded-full hover:border-white">
                            <img
                                src="/ig.jpeg"
                                alt="instagram"
                                className="object-cover w-8 h-8 rounded-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 px-6 mt-16 md:flex-row md:px-20 lg:px-40">
                    <div className="flex justify-center flex-1 md:justify-start">
                        <img
                            src="/src/assets/Amphai.jpg"
                            alt="Amphai"
                            className="object-cover w-48 h-48 transition-all duration-500 border-4 border-white shadow-lg lg:w-56 lg:h-56 rounded-30 hover:scale-110 hover:rotate-3"
                        />
                    </div>

                    <div className="flex-1">
                        <h3 className="mb-4 text-2xl font-semibold text-center text-white md:text-left">
                            About Me
                        </h3>
                        <p className="text-white text-sm md:text-base drop-shadow-[0_0_8px_rgba(225,225,255,0.7)] text-center md:text-left">
                            I am a fresh graduate with a Bachelor's degree in Computer Engineering. I have basic knowledge of computer systems, installing OS, programming, web development and problem-solving. I can communicate in general English and I am eager to learn, gain experience, and grow in a professional working environment. I am looking for job opportunities where I can contribute and develop my skills further.
                        </p>

                        <div className="w-16 mt-4 font-bold text-center text-white transition-colors bg-blue-500 border-2 rounded-sm cursor-pointer hover:bg-blue-600">
                            <button onClick={handleDowlaodCv} disabled={isLoading}
                                className="w-full px-4 py-2 font-bold text-white transition-colors bg-blue-500 border-2 rounded-sm cursor-pointer hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed">

                                {isLoading ? <LoadingDot className="justify-center" /> : "CV"}
                            </button>

                        </div>
                    </div>
                </div>

                <h1 className="mt-10 text-2xl text-center text-white">My Projects</h1>
                <div className="grid w-full grid-cols-1 gap-6 px-6 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Project 1 */}
                    <div className="overflow-hidden transition-all duration-300 bg-gray-800 border-2 border-gray-600 rounded-lg hover:border-blue-500 hover:scale-105">
                        <div className="h-40 overflow-hidden bg-gray-700">
                            <img
                                src="/booking room.jpg" 
                                alt="CeitBOOKING"
                                className="object-cover w-full transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="mb-2 text-lg font-bold text-white">CEIT BOOKING MEETING ROOM</h3>
                            <p className="text-sm text-gray-300">
                                Using react.js ,Tailwind.css,Vite.js and using Node.js for backend.
                            </p>
                        </div>
                    </div>
                    </div>

                  

                {/* Contact Section - Side by side layout */}
                <h1 className="mt-16 text-2xl text-center text-white">Contact</h1>
                <div className="flex flex-col gap-8 px-6 mt-10 md:flex-row md:px-20 lg:px-40">
                    {/* Contact Info - Left Side */}
                    <div className="flex-1">
                        <div className="p-6 bg-gray-900 border border-gray-700 rounded-lg">
                            <h3 className="mb-4 text-xl font-bold text-white">Get in Touch</h3>
                            <div className="space-y-4">
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">Email:</span> Amphaiismyname@gmail.com
                                </p>
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">Tel:</span> +856 2054026890
                                </p>
                                <p className="text-gray-300">
                                    <span className="font-semibold text-white">Address:</span> Natham Village, Hatxayfong District, Vientiane Capital.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="flex-1">
                        <form onSubmit={handleSubmit} className="p-6 bg-gray-900 border border-gray-700 rounded-lg">
                            <h3 className="mb-4 text-xl font-bold text-white">Send Message</h3>

                            <CustomTextInput
                                label="Your Name"
                                name="name"
                                id="name"
                                type="text"
                                placeholder="Enter Your Name"
                                required={true}
                                value={formData.name}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />


                            <CustomTextInput
                                label="Your Email"
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Enter Your Email"
                                required={true}
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />


                            <CustomTextInput
                                label="Your Message"
                                name="feedback"
                                id="feedback"
                                type="textarea"
                                placeholder="Enter your message here..."
                                required={true}
                                value={formData.feedback}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                            {isSubmitStatus === 'success' && (
                                <div className="success-message">
                                    Your message has been sent successfully.
                                </div>
                            )}
                            {isSubmitStatus === 'error' && (
                                <div className="error-message">
                                    Sorry your message failed to sent . Please try agian
                                </div>
                            )}


                            <button
                                type="submit"
                                className="w-full px-4 py-3 mt-4 font-semibold text-white transition-colors bg-blue-500 rounded-md hover:bg-blue-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPortfolio;