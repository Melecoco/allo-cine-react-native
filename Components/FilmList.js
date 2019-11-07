import React, { Component } from 'react'
import CardCreator from './CardCreator';
import { StyleSheet, Text, ScrollView, Image} from 'react-native';


const data = [{
    id: '1',
    title: 'bonjour',
    image: 'blabla'
    },
    {
    id: '2',
    title: 'au revoir',
    image: 'blabla'  
    },
    {
    id: '3',
    title: 'héhéhaha',
    image: 'blabla'  
    },
    {
    id: '4',
    title: 'héhé',
    image: 'blabla'  
    },
    {
        id: '4',
        title: 'héhé',
        image: 'blabla'  
        },
        {
            id: '4',
            title: 'héhé',
            image: 'blabla'  
            },
            {
                id: '4',
                title: 'héhé',
                image: 'blabla'  
                }
]

//import {Link} from "react-router-dom";
//import {getPosterFromApi} from './../API/TMDB'

export default function FilmList() {

    const cardCreation = ()  => {

        return (data.map( item => (
            
                <CardCreator 
                // key = {item.id}
                // id = {item.id}
                // className = 'card'
                // title = {item.title}
                // releaseYear = {item.releaseYear}
                // synopsis = {item.synopsis}
                // poster = {getPosterFromApi(item.poster)}
                data={item}
                ></CardCreator>

        )))

    }


        return(
        <ScrollView>
            {cardCreation()}
        </ScrollView>)
}