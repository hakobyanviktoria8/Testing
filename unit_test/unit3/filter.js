const filterFunc = (arr) => {
    return arr
    .filter(x => Number.isInteger(x))
    .map(String)
} 

module.exports = filterFunc