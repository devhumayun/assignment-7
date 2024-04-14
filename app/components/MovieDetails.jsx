import { getSingleMovie } from "@/utils/getSingleMovie";
import Image from "next/image";
const MovieDetails = async ({ movieId }) => {
    const movie = await getSingleMovie(movieId);
    return (
        <div>
            <section>
                <div>
                    <Image
                        className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                        src={movie?.poster_path}
                        alt={movie?.title}
                        width={900}
                        height={800}
                    />
                </div>
                <div className="grid grid-cols-12 py-12 gap-8">
                    <div className="col-span-2">
                        <Image
                            src={movie?.backdrop_path}
                            alt={movie?.title}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-8">
                        <h2 className="font-bold text-slate-300 text-2xl">
                            {movie?.original_title}
                        </h2>
                        <p className="my-2 text-slate-400 italic">{movie?.overview}</p>
                        <ul className="text-slate-300 space-y-2 my-8">
                            <li>Release Date : {movie?.release_date}</li>
                            <li>Average Vote : {movie?.vote_average}</li>
                            <li>Vote Count : {movie?.vote_count}</li>
                            <li>Popularity : {movie?.popularity}</li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-4">
                        <button className="py-2 w-full bg-primary font-medium text-slate-300 rounded-md">
                            Stream In HD
                        </button>
                        <button className="py-2 w-full bg-primary font-medium text-slate-300 rounded-md">
                            Download In HD
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MovieDetails
