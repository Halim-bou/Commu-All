import React, { Children } from 'react'

import { AddChannel } from '../assets'


const TeanChannelList = ({children, error = false, loading, type}) => {
  if (error) {
    return type == 'team' ? (
      <div className='team-channel__list'>
        <p className='team-channel-list__message'>
          connection Problem, please Try again after a moment.
        </p>
      </div>
    ) : null;
  }
  if(loading) {
    return (
      <div className='team-channel__list'>
        <p className='team-channel-list__message loading'>
          {type == 'team' ? "Channels" : "Messages" }loading ....
        </p>
      </div>
    )
  }
  return (
    <div className='team-channel-list'>
      <div className='team-channel-list__header'>
        <p className='team-channel-list__header__title'>
          {type == 'team' ? "Channels" : "Direct Messages"}
        </p>
        {/*Buttom -add channel */}
      </div>
      {children}
    </div>
  )
};

export default TeanChannelList;