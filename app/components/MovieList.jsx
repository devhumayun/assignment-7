import { getAllMovies } from "@/utils/getAllMovies";
import MovieCard from "./MovieCard";

const MovieList = async () => {
    const movies = await getAllMovies()
    return (
        movies ? (
            movies?.map((movie) => (<MovieCard key={movie.id} movie={movie} />))
        ) : ("No movies found")
    )
}

export default MovieList
