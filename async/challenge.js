const fetch = require('./../utils/fetchdata');
const fetchData = require('./../utils/fetchdata');
const API = 'https://rickandmortyapi.com/api/character/';

const foo = async (url_API) => {
    try {
        const data = await fetchData(url_API);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);

    }catch(error) {
        console.error(error);
    }
}


foo(API)