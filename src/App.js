import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profileImg from './assets/profile.png';
import btcImg from './assets/btc.png';
import coinImg from './assets/coin.svg';
import energyImg from './assets/energy.png';
import friendsImg from './assets/friends.svg';

function App() {
  const navigate = useNavigate();
  const [isCoinClicked, setIsCoinClicked] = useState(false);
  const [InviteData, setInviteData] = useState([
    { id: 1, percentage: '20%', amount: '0.000051 BTC' },
    { id: 2, percentage: '20%', amount: '0.000051 BTC' },
    { id: 3, percentage: '20%', amount: '0.000051 BTC' },
    { id: 4, percentage: '20%', amount: '0.000051 BTC' },
    { id: 5, percentage: '20%', amount: '0.000051 BTC' },
    { id: 6, percentage: '20%', amount: '0.000051 BTC' },
    { id: 7, percentage: '20%', amount: '0.000051 BTC' },
    { id: 8, percentage: '20%', amount: '0.000051 BTC' },
    { id: 9, percentage: '20%', amount: '0.000051 BTC' },
  ]);

  const handleCoinClick = async () => {
    try {
      setIsCoinClicked(true);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setTimeout(() => {
        setIsCoinClicked(false);
      }, 300);
    }
  }

  return (
    <div className="main-section relative bg-cover overflow-hidden bg-center min-h-screen flex flex-col items-center justify-between font-mono pb-10">
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
      <div className="flex flex-col items-center justify-center mt-2 px-4 w-full">
        {/* Container Wallet */}
        <div className="flex justify-between items-center w-full pt-2 space-x-2">
          {/* Container Profile */}
          <div className="rounded-md p-4 flex space-x-4 items-center md:w-auto">
            <img src={profileImg} alt="User Avatar" className="w-10 h-10 rounded-full mx-2" />
            <div className='flex space-x-4 items-center bg-white/10 rounded-xl border border-[#00FF754D] px-2 py-1'>
              <svg className='text-white w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='currentColor'><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" /></svg>
              <p className="text-white text-xs">0.00004478 BTC</p>
            </div>
          </div>
        </div>
      </div>
      {/* Container Game Coins */}
      <div className='mb-10'>
        <div className="flex justify-center items-center w-full pt-2 space-x-2 mb-4">
          <div className="rounded-md p-4 flex space-x-4 items-center md:w-auto">
            <img src={coinImg} alt="User Avatar" className="w-5 h-5 rounded-full mx-2" />
            <p className="text-white text-xl">0.00004478</p>
          </div>
        </div>
        <div className="game flex flex-col items-center justify-center px-4 w-full">
          <div onClick={handleCoinClick} className="cursor-pointer border-4 border-white/10 rounded-full">
            <img src={btcImg} alt="Coin" className={`w-10 h-10 mx-2 my-2 ${isCoinClicked ? 'animate-coin-click' : ''}`} style={{ width: '300px', height: '300px' }} />
          </div>
        </div>
      </div>
      {/* Container Progress Bar and Buttons */}
      <div className="flex flex-col justify-center items-center w-full px-4">
        {/* Progress Bar */}
        <div className="bg-white/10 mb-8 backdrop-blur rounded-2xl flex items-center w-full md:w-1/2 mb-3 md:mb-0">
          <img src={energyImg} alt="Energy" className="w-5 h-5 rounded-full my-1 mx-3" />
          <div className="flex-grow">
            <div className="relative h-2 bg-gray-300 rounded-full my-2 mr-4" style={{ boxShadow: '0 0 2.5px 5px rgba(214, 161, 58, 0.25)' }}>
              <div className="absolute top-0 left-0 rounded-full h-full bg-[#D6A13A]" style={{ width: `${(50 / 50) * 100}%` }}></div>
            </div>
          </div>
        </div>
        {/* Invite Friends */}
        <div className="bg-white/10 mb-8 backdrop-blur rounded-2xl flex items-center w-full md:w-1/2 mb-3 md:mb-0">
          <img src={friendsImg} alt="Energy" className="w-5 h-5 rounded-full my-1 mx-3" />
          <div className="flex flex-grow mr-2">
            <div className="relative h-2 bg-gray-300 rounded-full my-2 mr-2 w-full" style={{ boxShadow: '0 0 2.5px 5px rgba(214, 161, 58, 0.25)' }}>
              <div className="absolute top-0 left-0 rounded-full h-full bg-[#D6A13A]" style={{ width: `${(50 / 50) * 100}%` }}></div>
            </div>
            <div className="relative h-2 bg-gray-300 rounded-full my-2 mr-2 w-full" style={{ boxShadow: '0 0 2.5px 5px rgba(214, 161, 58, 0.25)' }}>
              <div className="absolute top-0 left-0 rounded-full h-full bg-[#D6A13A]" style={{ width: `${(50 / 50) * 100}%` }}></div>
            </div>
            <div className="relative h-2 bg-gray-300 rounded-full my-2 mr-2 w-full" style={{ boxShadow: '0 0 2.5px 5px rgba(214, 161, 58, 0.25)' }}>
              <div className="absolute top-0 left-0 rounded-full h-full bg-[#D6A13A]" style={{ width: `${(50 / 50) * 100}%` }}></div>
            </div>
            <div className="relative h-2 rounded-full my-2 mr-2 w-full">
              <div className="absolute top-0 left-0 rounded-full h-full bg-[#D6A13A]/20" style={{ width: `${(50 / 50) * 100}%` }}></div>
            </div>
            <div className="relative h-2 rounded-full my-2 mr-2 w-full">
              <div className="absolute top-0 left-0 rounded-full h-full bg-[#D6A13A]/20" style={{ width: `${(50 / 50) * 100}%` }}></div>
            </div>
          </div>
          <button className='rounded-full bg-blue-500 text-xs px-5 text-white mr-3 py-0.5'>Invite friends</button>
        </div>
        {/* Buttons */}
        <div className="grid grid-cols-3 gap-2 w-full">
          {InviteData.map((item) => (
            <button className='relative py-3 w-full mr-2 bg-white/10 text-white font-bold rounded-2xl flex flex-col items-center justify-center transform hover:scale-105 active:scale-95 text-sm' onClick={() => navigate('/pages/leaderboard')}>
              <div className='bg-[#00FF0A] rounded-full w-2 h-2 absolute top-0 right-0 m-2'></div>
              <div className="flex items-center md:w-auto">
                <img src={profileImg} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
                <div className='grid text-start'>
                  <p className="text-[#0075FF] text-xs">{item.percentage}</p>
                  <p className="text-gray-500 text-[9px] leading-none">{item.amount}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
