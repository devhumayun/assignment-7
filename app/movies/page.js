import MovieList from "../components/MovieList";
import Sidebar from "../components/Sidebar";

const MoviesPage = () => {
  return (
    <main>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto">
        <Sidebar />
        <div className="content">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            <MovieList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MoviesPage;
