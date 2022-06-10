import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

import './MovieCard.css'

import { FaPlay } from 'react-icons/fa'
import { BsBookmarks } from 'react-icons/bs'
import Button from '../button/Buton';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = props => {

    const item  = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <FaPlay />
                </Button>
                <div className="movie-info">
                    <div className="name">
                        <h3>{item.title || item.name}</h3>
                        <h3><BsBookmarks /></h3>
                    </div>
                    <div className="rate">   
                        <h3><span>IDBM</span>{item.vote_average}</h3>
                        <p>{item.first_air_date}</p>
                    </div>
                </div>
            </div>
            
        </Link>
    );
}

export default MovieCard;