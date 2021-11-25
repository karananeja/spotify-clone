import React from 'react';
import SidebarOption from './SidebarOption';
import { Home, LibraryMusic, Search } from '@mui/icons-material';
import { useDataLayerValue } from '../DataLayer';
import '../css/Sidebar.css';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
      <img
        className='sidebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <SidebarOption Icon={Home} title='Home' />
      <SidebarOption Icon={Search} title='Search' />
      <SidebarOption Icon={LibraryMusic} title='Your Library' />
      <br />
      <strong className='sidebar__title'>playlists</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
};

export default Sidebar;
