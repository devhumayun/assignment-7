import { getAllMovies } from "@/utils/getAllMovies";
import MoviesPage from "./movies/page";

export default async function Home() {
  const movies = await getAllMovies();
  return <MoviesPage />;
}
