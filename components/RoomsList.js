import React from "react";
import Room from "./RoomInfo";
export default function RoomsList({
  rooms
}) {
  if (rooms.length === 0) {
    return ( <
      div className = "empty-search" >
      <
      h5 > NO ROOM AVAILIBLE IN THIS PRICE RANGE < /h5> < /
      div >
    );
  }
  return ( <
    section className = "roomslist" >
    <
    div className = "roomslist-center" > {
      rooms.map(item => {
        return <Room key = {
          item.id
        }
        room = {
          item
        }
        />; 
      })
    } <
    /div> < /
    section >
  );
}