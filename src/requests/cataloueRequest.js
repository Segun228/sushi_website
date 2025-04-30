import axios from "axios";

const catalogueRequest = async ()=>{
    try{
        const response = await axios.get('/catalogue.json')
        console.log(response.data)
        return response.data
    }
    catch(error){
        console.error(error)
        throw error
    }
    }

export default catalogueRequest
