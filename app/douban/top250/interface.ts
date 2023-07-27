export interface Movie {
  visionRatings?: number;
  castRatings?: number;
  musicRatings?: number;
  plotRatings?: number;
  data: MovieDetail[];
  createdAt: number;
  updatedAt: number;
  id: string;
  originalName: string;
  imdbVotes: number;
  imdbRating: string;
  rottenRating: string;
  rottenVotes: number;
  year: string;
  imdbId: string;
  alias: string;
  doubanId: string;
  type: string;
  doubanRating: string;
  doubanVotes: number;
  duration: number;
  episodes: number;
  totalSeasons: number;
  dateReleased: string;
  totalVotes: number;
  artRatings?: number;
  actorRatings?: number;
  soundRatings?: number;
  storyRatings?: number;
  enjoymentRatings?: number;
}

export interface MovieDetail {
  createdAt: number;
  updatedAt: number;
  id: string;
  poster: string;
  name: string;
  genre: string;
  description: string;
  language: string;
  country: string;
  lang: string;
  shareImage: string;
  movie: string;
}
