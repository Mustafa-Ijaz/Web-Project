import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext(); //react API for Context

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    breakfast: false,
    laundary: false
  };
  // Life cycle method
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice
    });
  }
  formatData(items) {
    let temp = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = {
        ...item.fields,
        images,
        id
      };
      return room;
    });

    return temp;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
    //console.log(room)
  };
  /*handleChange = event =>{
  const target = event.target;
  const value = event.type==="checkbox" ? target.checked:target.value;
  const name = event.target.name;
  this.setState({
    [name]:value
  },this.filterRoom)
};*/
  handleChange = event => {
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value);
  };
  filterRoom = () => {
    console.log("Hello World");
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom
        }}
      >
        {" "}
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

var RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
