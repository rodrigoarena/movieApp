import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() { // se ejecuta una vez renderizado el componente, se usa generalmente para ejecutar
        const { match: { params: { id }}} = this.props; // codigo asincrono, como en este caso que tenemos que 
        this.props.getMovieDetail(id); // hacer una peticion a la API para que nos traiga la descripcion de la movie.
    }

    render() {
        return (
            <div className="movie-detail">
                Detalle de la pelicula  
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        movie: state.movieDetail
    }
}

function mapDispatchToProps (dispatch) {
    return {
        getMovieDetail: (id) => dispatch(getMovieDetail(id))
    }
}



export default connect (mapStateToProps, mapDispatchToProps) (Movie);