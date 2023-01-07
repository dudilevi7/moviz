const mapMoviesToTable = (movies = []) => {
    const rowsData = movies.map((movie) => {
        const {
            title = '',
            rank = '',
            year = '',
            director = '',
            actors = [],
        } = movie 
        return [title, rank, year, director, actors.toString()]
    })
    const columns = ['Title', 'Rank', 'Year', 'Director', 'Actors']
    return { rowsData, columns }
}
module.exports = mapMoviesToTable