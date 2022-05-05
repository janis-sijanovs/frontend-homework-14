/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import shows from './data/shows';

type episode = {
    id: number,
    title: string,
    season: number,
    episode: number,
    released: string
  }

  type show = {
    id: number,
    title: string,
    description: string,
    year: number,
    isPopular: boolean,
    available: boolean,
    ratingDetails: {
      rating: number,
      count: number
    },
    genres: string[],
    episodes: episode[]
  }

const titles = (array: show[]): string[] => array.map(({ title }) => (title));

const ids = (array: show[]): number[] => array.map(({ id }) => (id));

const ratings = (array: show[]): number[] => array.map(({ ratingDetails }) => (ratingDetails.rating));

const ratingsToFloat = (array: show[]): number[] => array.map(({ ratingDetails }) => (+ratingDetails.rating.toFixed(2)));

const capitaliseGenres = (array: show[]): show[] => array.map((movie) => ({ ...movie, genres: movie.genres.map((genre) => genre[0].toUpperCase() + genre.slice(1)) }));

const doubleRaitingCount = (array: show[]): show[] => array.map((movie) => ({ ...movie, ratingDetails: { ...movie.ratingDetails, count: movie.ratingDetails.count * 2 } }));

const getIdTitleDesc = (array: show[]): {id: number, title:string, description:string}[] => array.map(({ id, title, description }) => ({ id, title, description }));

const increaseRating = (array: show[]): show[] => array.map((movie) => {
  if (movie.id === 1) {
    return { ...movie, ratingDetails: { ...movie.ratingDetails, rating: 9.99 } };
  }
  return { ...movie };
});

const increaseRatingAndCount = (array: show[]): show[] => array.map((movie) => {
  if (movie.id === 2) {
    return { ...movie, ratingDetails: { rating: 8, count: movie.ratingDetails.count + 1 } };
  }
  return { ...movie };
});

const changeIsPopular = (array: show[]): show[] => array.map((movie) => {
  if (movie.ratingDetails.rating > 7) {
    return { ...movie, isPopular: true };
  }
  return { ...movie };
});

const changeRating = (array: show[]): show[] => array.map((movie) => {
  if (movie.isPopular) {
    return { ...movie, ratingDetails: { ...movie.ratingDetails, rating: 10 } };
  }
  return { ...movie };
});

const changeAvalibility = (array: show[]): show[] => array.map((movie) => {
  if (movie.genres.includes('Science-Fiction')) {
    return { ...movie, available: true };
  }
  return { ...movie };
});

const changeEpisodes = (array: show[]): any[] => array.map((movie) => {
  if (movie.isPopular) {
    return { ...movie, episodes: movie.episodes.map(({ id }) => (id)) };
  }
  return { ...movie, episodes: [] };
});

const getAllGenres = (array: show[]): string[] => [...new Set(array.flatMap(({ genres }) => (genres)))];

const addDocumentaryToGenres = (array: show[]): show[] => array.map((movie) => {
  if (movie.isPopular && movie.year > 2016) {
    return { ...movie, genres: [...movie.genres].concat('Documentary') };
  }
  return { ...movie };
});

const changeReleaseDate = (array: show[]): show[] => array.map((movie) => {
  if (movie.id === 1) {
    return {
      ...movie,
      episodes: movie.episodes.map((ep) => {
        if (ep.id === 24) {
          return { ...ep, released: '2022-10-12 00:00:00' };
        }
        return { ...ep };
      }),
    };
  }
  return { ...movie };
});

// Filter

const getShowsWithRating = (array: show[], minRating: number): show[] => (array.filter(({ ratingDetails }) => (ratingDetails.rating > minRating)));

const getShowsWhereDescIncludes = (array: show[], phrase: string): show[] => (array.filter(({ description }) => (description.includes(phrase))));

const getPopular = (array: show[]): show[] => (array.filter(({ isPopular }) => isPopular));

const getByGenre = (array: show[], genre: string): show[] => (array.filter(({ genres }) => (genres.includes(genre))));

const getWithMinEpisodes = (array: show[], episodeCount: number): show[] => (array.filter(({ episodes }) => episodes.length >= episodeCount));

const getByEpisodeTittle = (array: show[], episodeTitle: string): show[] => (array.filter(({ episodes }) => episodes.reduce((previous, current): boolean => {
  if (current.title === episodeTitle) {
    return true;
  }
  if (!previous) {
    return false;
  }
  return true;
}, false)));

const getByYear = (array: show[], maxYear: number): show[] => (array.filter(({ year }) => year < maxYear));

const getWhereTitleStartsWith = (array: show[], phrase: string): show[] => (array.filter(({ title }) => title.slice(0, phrase.length) === phrase));

const getByID = (array: show[], searchID: number): show[] => (array.filter(({ id }) => id === searchID));

const excludeID = (array: show[], searchID: number): show[] => (array.filter(({ id }) => id !== searchID));

const findEpisodesByGenreAndRating = (array: show[], minRating: number, searchGenre: string): episode[] => array.filter(({ ratingDetails, genres }) => (ratingDetails.rating > minRating && genres.includes(searchGenre))).flatMap(({ episodes }) => (episodes));

const result1 = titles(shows);
const result2 = ids(shows);
const result3 = ratings(shows);
const result4 = ratingsToFloat(shows);
const result5 = capitaliseGenres(shows);
const result6 = doubleRaitingCount(shows);
const result7 = getIdTitleDesc(shows);
const result8 = increaseRating(shows);
const result9 = increaseRatingAndCount(shows);
const result10 = changeIsPopular(shows);
const result11 = changeAvalibility(shows);
const result12 = changeEpisodes(shows);
const result13 = getAllGenres(shows);
const result14 = addDocumentaryToGenres(shows);
const result15 = changeReleaseDate(shows);
const result16 = getShowsWithRating(shows, 7);
const result17 = getShowsWhereDescIncludes(shows, 'DC');
const result18 = getPopular(shows);
const result19 = getByGenre(shows, 'Drama');
const result20 = getWithMinEpisodes(shows, 2);
const result21 = getByEpisodeTittle(shows, 'Wendigo');
const result22 = getByYear(shows, 2019);
const result23 = getWhereTitleStartsWith(shows, 'Sup');
const result24 = getByID(shows, 2);
const result25 = excludeID(shows, 2);
const result26 = findEpisodesByGenreAndRating(shows, 7, 'Drama');
