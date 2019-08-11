import React from 'react'
import {
    Link
} from "react-router-dom";
import defaultImage from '../images/room-2.jpeg';
import PropTypes from 'prop-types';

export default function RoomInfo({
    room
}) {
    const {
        name,
        slug,
        images,
        price
    } = room;
    return ( <
        article className = "room" >

        <
        div className = "img-container" >

        <
        img src = {
            images[0] || defaultImage
        }
        alt = "Single Room" / >

        <
        div className = "price-top" >
        <
        h6 > $ {
            price
        } < /h6> <
        p > Per Night < /p> <
        /div> <
        Link to = {
            `/rooms/${slug}`
        }
        className = "btn-primary room-link" >
        DETAILS <
        /Link>  <
        p className = "room-info" > {
            name
        } < /p>  <
        /div>  <
        /article>
    )
}
RoomInfo.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired

    })
};