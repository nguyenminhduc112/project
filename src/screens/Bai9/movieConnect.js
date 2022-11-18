import axios from "axios";


export default axios.create({
    baseURL:'https://reactnative.dev/movies.json',
    headers:{
        Authorization:'Bearer API_KEY'
    }
})