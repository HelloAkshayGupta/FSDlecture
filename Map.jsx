import movies from "./movies.js";
function Map(){
    return(
        <div className="movies">
            {
                movies.map(movie => (
                    <div>
                        <div >
                        <img src={movie.image}/>
                        </div>
                        <h3>{movie.id}</h3>
                        <h3>{movie.title}</h3>
                        <p>Cost: {movie.cost}</p>
                    </div>
                ))
            }
        </div>
    );
}
export default Map;