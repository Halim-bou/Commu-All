import React from "react";
import { ChannelList, ChannelListContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import { CommuAllIcon } from '../assets/CommuAllIcon.png';

const SideBar = () => (
	<div className="channel-list__sidebar">
		<div className="channel-list__sidebar__icon">
			<img src={CommuAllIcon} alt="Commu-All" width="30"></img>
		</div>

	</div>
)

const ChannelListContainer = () => {
	return (
		<div>
			ChannelListContainer
		</div>
	);
}

export default ChannelListContainer;