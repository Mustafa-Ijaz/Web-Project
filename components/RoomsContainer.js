import React from "react";
import FileredRooms from "./FilteredRooms";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context1";
import Loading from "./Loading";
export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }

        return (
          <div>
            hellow from rooms container
            <FileredRooms rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}
