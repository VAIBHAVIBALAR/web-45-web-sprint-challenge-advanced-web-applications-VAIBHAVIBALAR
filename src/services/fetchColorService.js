import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = async () => {
    console.log("fetchColorservices")
    let raColor =  (await axiosWithAuth().get('/colors')
    .then(res =>{
        console.log("color axios",res)
        return res.data
    }))
    return raColor;
    
}

export default fetchColorService;