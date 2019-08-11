import React, {
	Component
} from "react";
import {
	RoomContext
} from "../context1";
import Loading from "./Loading";
import RoomIn from "./RoomInfo";
import Titlecomp from "./title";
export default class FeaturedRoom extends Component {

	static contextType = RoomContext;

	render() {

		let {
			loading,
			featuredRooms: rooms
		} = this.context;
		rooms = rooms.map(room => {
			return <RoomIn key = {
				room.id
			}
			room = {
				room
			}
			/>;
		});
		return ( <
			section className = "featured-rooms" >
			<
			Titlecomp title = "Featured Rooms" / >

			<
			div className = "featured-rooms-center" > {
				loading ? < Loading / > : rooms
			}

			<
			/div> <
			/section>
		);
	}
}