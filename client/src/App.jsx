import React from "react";
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { Channel } from "stream-chat-react";
import { Cookies } from 'universal-cookie';
import { ChannelListContainer, ChannelContainer } from './components';
import './App.css';


const apiKey = 'sawqz59yesev';
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team_light">
        <ChannelListContainer
        />

        <ChannelContainer
        />
      </Chat>
    </div>
  );
}

export default App;
