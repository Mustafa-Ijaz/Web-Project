import React from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {
  Link
} from 'react-router-dom';

import Details from '../components/details';
import FeaturedRoom from '../components/FeaturedRoom'
import Imagee from '../components/StyledComp';
export default function Home() {
  return < >

    <
    Hero hero = "defaultHero" >
    <
    Banner title = "WELCOME"
  subtitle = "The art of meeting your highest expectations" >
    <
    Link to = '/rooms'
  className = 'btn-primary' >
    OUR ROOMS <
    /Link>  <
    /Banner>  <
    /Hero>  <
    Details / >
    <
    FeaturedRoom / >
    <
    Imagee / >
    <
    /> 
}
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line