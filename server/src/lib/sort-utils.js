const lexicalComparison = (a = '', b = '') => {
    let x = a?.toLowerCase();
    let y = b?.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
}
const arrayComparsion = (a = [], b = []) => a.length - b.length
const numberComparsion = (a = 0, b = 0) => a - b

const columnSort = {
    rank: (a, b) => numberComparsion(parseInt(a.rank), parseInt(b.rank)),
    title: (a, b) => lexicalComparison(a.title, b.title),
    year: (a, b) => numberComparsion(a.year, b.year),
    director: (a, b) => lexicalComparison(a?.director, b?.director),
    actors: (a, b) => arrayComparsion(a.actors, b.actors)
}

module.exports = columnSort