import axios from 'axios'

const KEY = 'AIzaSyA5vUpFeJYa9XWT80Dz6c7K6y6HcJ99vXk';
// GET https://www.googleapis.com/youtube/v3/search



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});



