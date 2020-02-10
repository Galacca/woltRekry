import data from '../data/restaurants.json';

/*
I preferred to have the data locally just in case something happens to github hosted file.
Heroku is sometimes a bit sluggish too, so this should result in better performance
*/

const fetchJsonData = () => data;

export default fetchJsonData;
