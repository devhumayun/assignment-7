import Image from "next/image";

const MovieCard = ({ movie }) => {
    const { backdrop_path } = movie
    console.log(backdrop_path);
    return (

        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image className="w-full object-cover" src={backdrop_path} alt="poster" width={100} height={100} />
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">Iron Man</h3>
                <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                <div className="flex items-center space-x-1 mb-5">
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                    <img src="./assets/star.svg" width={14} height={14} alt="" />
                </div>
                <a
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="./modal.html"
                >
                    <img src="./assets/tag.svg" alt="" />
                    <span>Details</span>
                </a>
            </figcaption>
        </figure>
    )
}

export default MovieCard
