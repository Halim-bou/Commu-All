import React from "react";
import { ChannelList, ChannelListContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import CommuAllIcon from '../assets/CommuAllIcon.png';
import LogoutIcon from '../assets/logout.png';

const SideBar = () => (
	<div className="channel-list__sidebar">
		<div className="channel-list__sidebar__icon1">
			<div className="icon1__inner">
				<img src={CommuAllIcon} alt="Commu-All" width="40"></img>
			</div>
		</div>
		<div className="channel-list__sidebar__icon2">
			<div className="icon2__inner">
				<img src={LogoutIcon} alt="Logout" width="30"></img>
			</div>
		</div>
	</div>
);

const ComapanyHeader = () => (
	<div className="channel-list_header">
		<p className="channel-list__header__text">Medical Pager</p>
	</div>
);

const ChannelListContainer = () => {
	return (
		<>
			<SideBar />
			<div className="channel-list__list__wrapper">
				<ComapanyHeader />
				<ChannelSearch />
				<ChannelList
				filters={{}}
				channelRenderFilterFn={() => {}}
				List={(listProps) => (
					<TeamChannelList
					{...listProps}
					/>
				)}
				/>
			</div>
		</>
	);
}

export default ChannelListContainer;