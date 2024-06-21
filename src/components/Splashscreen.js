import '../App.css';
import { useNavigate } from 'react-router-dom';
import btcImg from '../assets/btc.png';
import { useState, useEffect } from 'react';
function Splashscreen() {
    const navigate = useNavigate();
    const [showSplash, setShowSplash] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        let interval;
        // Function to simulate loading progress for 3 seconds
        const simulateLoading = () => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10; // Update progress every 10%
                setLoadingProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval); // Clear interval when progress reaches 100%
                    setTimeout(() => {
                        setShowSplash(false); // Hide splash screen after loading completes
                        navigate('/main'); // Navigate to main screen
                    }, 500); // Optional delay before navigating (adjust as needed)
                }
            }, 300); // Update progress every 300 ms (adjust as needed)
        };

        // Start simulating loading when component mounts
        simulateLoading();

        // Cleanup: clear the interval if component unmounts or setShowSplash(false) is called
        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <>
            {showSplash ? (
                <div className='main-section w-full h-screen overflow-hidden relative bg-cover'>
                    <div className='absolute w-[75vh] h-[75vh] -left-36 -top-10 rounded-full z-[-1]'
                        style={{
                            background: 'radial-gradient(circle, rgba(0, 117, 255, 0.3) 0%, rgba(0, 117, 255, 0) 75%)',
                        }}
                    ></div>
                    <div className='absolute w-[75vh] h-[75vh] -right-36 -bottom-10 rounded-full z-[-1]'
                        style={{
                            background: 'radial-gradient(circle, rgba(216, 103, 7, 0.3) 0%, rgba(216, 103, 7, 0) 75%)',
                        }}
                    ></div>

                    <div className="game flex jsutify-center items-center justify-center px-4 w-full h-full">
                        <div className='text-center'>
                            <div className="cursor-pointer border-4 border-white/10 rounded-full max-w-fit mx-auto">
                                <img src={btcImg} alt="Coin" className={`w-10 h-10 mx-2 my-2`} style={{ width: '200px', height: '200px' }} />
                            </div>
                            <p className='mt-5 text-white font-semibold text-lg font-sans'>Welcome to BitMine! <br /><span className='font-normal'>Unleash the power of digital mining</span></p>
                            <div className="pt-2">
                                <div className="relative h-2 bg-gray-300 rounded-full my-2" style={{ boxShadow: '0 0 2.5px 5px rgba(214, 161, 58, 0.25)' }}>
                                    <div className="absolute top-0 left-0 rounded-full h-full bg-[#D6A13A]" style={{ width: `${loadingProgress}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                // Render main screen or navigate to it
                navigate('/main')
            )}
        </>
    );
}

export default Splashscreen;