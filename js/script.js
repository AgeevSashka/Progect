const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i = 0; i < 2; i++) {
    const a = prompt("Один из последних фильмов?", ""),
          b = +prompt("На сколько вы его оцените", "");
    if(a != null && b != null && a.length < 50 && a != '' && b != ''){
        personalMovieDB.movies[a] =b;
        console.log('done');
    }else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотренно давольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
} else if(personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
console.log(personalMovieDB);

