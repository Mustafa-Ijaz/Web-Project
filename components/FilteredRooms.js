import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context1";
import Title from "../components/title";
// function to get unique Rooms type
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function FilteredRooms({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    breakfast,
    laundary
  } = context;
  // get Unique types
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* Selection Type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            value={type}
            className="form-control"
          >
            {/* redering the jsx expression*/}
            {types}
          </select>
        </div>
        {/*End of Selection*/}
      </form>
    </section>
  );
}
