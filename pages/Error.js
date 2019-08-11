import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {
    Link
} from 'react-router-dom';
export default function Error() {
    return ( <
        Hero >
        <
        Banner title = "404"
        subtitle = "PAGE NOT FOUND" >
        <
        Link to = "/"
        className = 'btn-primary' >
        BACK TO HOME <
        /Link> <
        /Banner> <
        /Hero>
    )
}