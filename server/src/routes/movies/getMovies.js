const data = require('../../db/duumy-data.json');
const mapMoviesToTable = require('../../lib/map-movies-to-table');
const columnSort = require('../../lib/sort-utils');

const getMovies = async (req, res) => {
    try {
        const {
            colSort = '',
            colOrder = 'asc',
            pageNum = 1,
            pageSize = 7,
            search
        } = req.query

        let movies = [...data]
        if (search) {
            movies = movies.filter((elem) => Object.values(elem).find((value) => value && value.toString().toLowerCase().includes(search.toLowerCase())))
        }
        if (colSort) {
            movies = movies.sort((a, b) => colOrder === 'asc' ? columnSort[colSort](a, b) : columnSort[colSort](b, a))
        }
        const pageNumber = parseInt(pageNum)
        const rowsPerPage = parseInt(pageSize)
        const startIndex = (pageNumber - 1) * rowsPerPage
        const endIndex = pageNumber * rowsPerPage
        const slicedData = movies.slice(startIndex, endIndex)

        console.log('mapping movies to row data and columns')
        const mappedMovies = mapMoviesToTable(slicedData)

        console.log('returning movies data')
        return res.json(mappedMovies)
    } catch (err) {
        console.error('failed to get movies', err)
        return res.status(500).json({ message: err.message })
    }
}
module.exports = getMovies