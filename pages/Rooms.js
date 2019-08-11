import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {
    Link
} from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
export default function Rooms() {
    return ( <
        >
        <
        Hero hero = "roomsHero" >
        <
        Banner title = "ROOMS"
        subtitle = "The luxury of being yourself" >
        <
        Link to = '/'
        className = 'btn-primary' >
        BACK TO HOME < /Link>  <
        /Banner> <
        /Hero> <
        RoomsContainer / >
        <
        />
    )
}