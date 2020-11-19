
// Aqui crearemos nuestro REDUCER. Un REDUCER, es una funcion que reibe dos parametros:
//     STATE y ACTION.
// Dependiendo la ACTION, es decir qué accion realizara nuestra funcion, dependerá qué nuevo "estado" tendra
// nuestro STATE. 

const initialState = {
    movies: [],         // aca van las peliculas favoritas
    moviesLoaded: [],   // aca iran las llamadas a la API, serian las que queremos ver.
    movieDetail: {}     // sera un objeto (por eso se guarda en {}) con los detalles de la película 
                        // s(actores, estrellas, duracion, etc.)
};

function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") { // Estamos añadiendo pelis favoritas
        return {
          ...state,  // esto lo que hace es copiar el state sin pisar el state anterior
          movies: state.movies.concat(action.payload) // aca concatenamos las movies que ya teniamos con lo 
        }                                             // que llegue del payload. 
    }
    if (action.type === "GET_MOVIES") {
        return {
          ...state,   // copiamos todo el state sin pisar el state anterior
          moviesLoaded: action.payload.Search  // buscamos la pelicula que llega desde el payload.
        };   // aca Search es un objeto, lo podemos ver en la API, con la propiedad Search
    }
    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
            ...state,
            movies: state.movies.filter((movie) => movie.title !== action.payload.title)
        }
    }
    if (action.type === "GET_MOVIE_DETAIL") {
        return {
            ...state,
            movieDetail: {...action.payload} // al no poder pisar el state, debemos hacer spreadoperator, no
        }                                    // podemos modificarlo directamente.
    }
    return state;  // retornamos el state nuevo actualizado.
  }
  
  export default rootReducer;
  