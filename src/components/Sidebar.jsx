import React, { useState, useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from './PlayerContext'

const Sidebar = () => {
  const navigate = useNavigate()
  const { playWithId } = useContext(PlayerContext)

  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState('')

  const filteredSongs = songsData.filter(
    (song) =>
      song.name.toLowerCase().includes(query.toLowerCase()) ||
      song.desc.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      
      {/* Top Section */}
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div
          onClick={() => navigate('/')}
          className='flex items-center gap-3 pl-8 cursor-pointer'
        >
          <img className='w-6' src={assets.home_icon} alt='Home' />
          <p className='font-bold'>Home</p>
        </div>

        <div
          onClick={() => setShowSearch(!showSearch)}
          className='flex items-center gap-3 pl-8 cursor-pointer'
        >
          <img className='w-6' src={assets.search_icon} alt='Search' />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className='bg-[#121212] h-[85%] rounded overflow-y-auto'>
        
        {/* Search Box */}
        {showSearch && (
          <div className='p-4'>
            <input
              type='text'
              placeholder='Search songs...'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='w-full p-2 rounded bg-[#242424] text-white outline-none'
            />
          </div>
        )}

        {/* Search Results */}
        {showSearch && query && (
          <div className='px-4 mb-4'>
            {filteredSongs.length > 0 ? (
              filteredSongs.map((song) => (
                <div
                  key={song.id}
                  onClick={() => playWithId(song.id)}
                  className='flex items-center gap-3 p-2 hover:bg-[#242424] rounded cursor-pointer'
                >
                  <img
                    src={song.image}
                    alt={song.name}
                    className='w-12 h-12 rounded'
                  />

                  <div>
                    <p className='font-medium'>{song.name}</p>
                    <p className='text-sm text-gray-400'>{song.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className='text-gray-400 py-2'>No songs found</p>
            )}
          </div>
        )}

        {/* Library Header */}
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img src={assets.stack_icon} alt='Library' />
            <p className='font-semibold'>Your Library</p>
          </div>

          <div className='flex items-center gap-3'>
            <img
              className='w-5 cursor-pointer'
              src={assets.arrow_icon}
              alt='Arrow'
            />
            <img
              className='w-5 cursor-pointer'
              src={assets.plus_icon}
              alt='Add'
            />
          </div>
        </div>

        {/* Playlist Card */}
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create your first playlist</h1>

          <p className='font-light'>
            It's easy, we'll help you
          </p>

          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Create Playlist
          </button>
        </div>

        {/* Podcast Card */}
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>Let's find some podcasts to follow</h1>

          <p className='font-light'>
            We'll keep you updated on new episodes
          </p>

          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar