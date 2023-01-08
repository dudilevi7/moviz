const data = require('../../db/duumy-data.json');
const mapMoviesToTable = require('../../lib/map-movies-to-table');
const columnSort = require('../../lib/sort-utils');

const getMovies = async (req, res) => {
    try {
        const {
            colSort = '',
            colOrder = 'asc',
            pageNum = 1,
            pageSize = 10,
            search
        } = req.query

        let movies = [...data]
        if (search) {
            console.log(`filtering movies by input ${search}`)
            movies = movies.filter(({ id, ...movie }) => Object.values(movie).find((value) => value && value.toString().toLowerCase().includes(search.toLowerCase())))
        }

        const availableMovies = movies.length
        const rowsPerPage = parseInt(pageSize)
        const pageNumber = parseInt(availableMovies <= rowsPerPage ? 1 : pageNum)
        const startIndex = (pageNumber - 1) * rowsPerPage
        const endIndex = pageNumber * rowsPerPage
        movies = movies.slice(startIndex, endIndex)

        if (colSort) {
            console.log(`sorting movies by column: ${colSort} in order: ${colOrder} order`)
            movies = movies.sort((a, b) => colOrder === 'asc' ? columnSort[colSort](a, b) : columnSort[colSort](b, a))
        }

        console.log('mapping movies to row data and columns')
        const mappedMovies = mapMoviesToTable(movies)

        console.log('returning movies data')
        return res.json({ ...mappedMovies, availableMovies, pageNum, pageSize, search, colSort, colOrder })
    } catch (err) {
        console.error('failed to get movies', err)
        return res.status(500).json({ message: err.message })
    }
}
module.exports = getMovies