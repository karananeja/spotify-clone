import React from 'react';
import { useDataLayerValue } from '../DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import Header from './Header';
import SongRow from './SongRow';
import '../css/Body.css';

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt='body__info' />
        <div className='body__infoText'>
          <strong>playlist</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilled className='body__shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
