import { getSingleMovie } from "@/utils/getSingleMovie";
import Image from "next/image";

const MovieDetailsPage = async ({ params: { movieId } }) => {
  const movie = await getSingleMovie(movieId);
  const {
    title,
    poster_path,
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    popularity,
    vote_count,
    overview,
  } = movie;

  return (
    <section>
      <div>
        <Image
          className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
          src={poster_path}
          alt={title}
          width={900}
          height={800}
        />
      </div>
      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2">
          <Image
            src={backdrop_path}
            alt={title}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {original_title}
          </h2>
          <p className="my-2 text-slate-400 italic">{overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>Release Date : {release_date}</li>
            <li>Average Vote : {vote_average}</li>
            <li>Vote Count : {vote_count}</li>
            <li>Popularity : {popularity}</li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Stream In HD
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            Download In HD
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
