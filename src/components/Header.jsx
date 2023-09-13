

function Header(props) {

    return (
        <header>
            <h1>🍿 Popcorn Time! 🍿</h1>

            { props.numberOfMovies > 0
                ? <h2>Number of movies: {props.numberOfMovies}</h2>
                : <h2>Sorry, no movies to display</h2>
            }

        </header>
    );
}

export default Header

 // let message;
    // if(moviesToDisplay.length > 0) {
    //     message = <h1>Number of movies: {moviesToDisplay.length}</h1>

    // } else {
    //     message = <h1>Sorry, no movies to display</h1>
    // }
