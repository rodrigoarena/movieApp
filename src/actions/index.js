

export function addMovieFavorite(payload) {
    return {
        type: "ADD_MOVIE_FAVORITE",
        payload
    };
}

// Debemos especificar que tipo de accion es ('type') y tmb los datos extras de la accion ('payload')
export function removeMovieFavorite(payload) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload
    }

}

// esta es una funcion ASINCRONA, por eso retorna una function dentro de la function
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({
              type: "GET_MOVIES",
              payload: json
            });
        });
    };
}

// recibe un ID xq es la ID que nos proveera la API donde se encuentran las peliculas
// debemos ver el parametro que utilizaremos, el cual sera diferente al getMovies, los parametros aparecen
// detallados en la API
export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
          .then(response => response.json())
          .then(json => {
            dispatch({
                type: "GET_MOVIE_DETAIL",
                payload: json
              });
          });
      };
}

