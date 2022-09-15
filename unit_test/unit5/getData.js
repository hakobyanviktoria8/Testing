const axios = require('axios')
const filter =  require('./../unit3/filter')
const getData = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = res.data.map(x=>x.id)
        // console.log('res', data, filter(data));
        return filter(data) ;
        
    } catch (error) {
        console.log('res', error);
    }
}
// getData()
module.exports = getData