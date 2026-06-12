import React from 'react'
import NavBar from './NavBar'
import { albumsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import {songsData} from '../assets/assets'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <NavBar />

      <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overfllow-auto'>
            {albumsData.map((item) => (
            <AlbumItem
                key={item.id}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
            />
            ))}
        </div>
        </div>

        <div className="mb-4">
        <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overfllow-auto'>
            {songsData.map((item) => (
            <SongItem
                key={item.id}
                name={item.name}
                image={item.image}
                desc={item.desc}
                id={item.id}
            />
            ))}
        </div>
       
      </div>
    </>
  )
}

export default DisplayHome