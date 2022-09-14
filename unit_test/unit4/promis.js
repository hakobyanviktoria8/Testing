const delay = (call, ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(call())
        }, ms)
    })
}
// delay(() => 5+5, 1000)
// .then(res => console.log(res))
module.exports = delay