// "use client";
// import { useEffect, useState } from "react";
import { Movie } from "./interface";
import Image from "next/image";

function MovieCard(props: { movie: Movie }) {
  const { movie } = props;
  const movieData = movie.data?.[0] || {};
  return (
    <div className="m-2 flex flex-row space-x-4 rounded-md p-3 shadow-lg">
      <div
        className="relative h-[150px] w-[110px] shrink-0"
        // style={{ height: 150, width: 100, position: "relative" }}
      >
        <Image
          src={movieData.poster}
          alt="poster"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="space-y-1">
        <div className="text-md cursor-pointer text-sky-500 hover:bg-sky-600 hover:text-white">
          {movieData.name}
        </div>
        <div className="line-clamp-2 text-sm">
          介绍：{movieData.description}
        </div>
        <div className="text-sm">
          {movie.dateReleased} / {movieData.country} / {movieData.genre} /{" "}
          {movieData.language}
        </div>
        <div className="text-sm">{movie.doubanVotes}</div>
        <div className="text-sm">{movie.originalName}</div>
      </div>
    </div>
  );
}

export default function Top250({ movieList }: { movieList: Movie[] }) {
  //   const [movieList, setMovieList] = useState<Movie[]>([]);

  //   useEffect(() => {
  //     const getList = async () => {
  //       // https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn
  //       const res = await fetch(
  //         "https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=250&lang=Cn",
  //       );
  //       if (res.status === 200) {
  //         const list = await res.json();
  //         setMovieList(list);
  //         return list;
  //       }
  //       return [];
  //     };
  //     getList();
  //   }, []);

  //   const getList = async () => {
  //     // https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn
  //     const res = await fetch(
  //       "https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=250&lang=Cn",
  //     );
  //     if (res.status === 200) {
  //       const list = await res.json();
  //       return list;
  //     }
  //     return [];
  //   };
  //   const movieList: Movie[] = await getList();

  return (
    <div className="grid auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const getList = async () => {
    // https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=50&lang=Cn
    const res = await fetch(
      "https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=250&lang=Cn",
    );
    if (res.status === 200) {
      const list = await res.json();
      return list;
    }
    return [];
  };
  const movieList = await getList();
  return {
    props: {
      movieList,
    },
  };
}
