import Image from "next/image";
import Link from "next/link";
import RatingStar from "./Rating";

const MovieCard = ({ movie }) => {
    const { poster_path } = movie
    return (

        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image className="w-full object-cover" src={poster_path} alt="poster" width={80} height={80} />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                <div className="flex items-center space-x-1 mb-5">
                    <RatingStar rating={movie.vote_average} />
                </div>
                <Link
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm bg-[#00D991]"
                    href={`/movies/${movie.id}`}
                >
                    <Image src="/tag.svg" alt="tag" height={20} width={20} />
                    <span>Details</span>
                </Link>
            </figcaption>
        </figure>
    )
}

export default MovieCard
