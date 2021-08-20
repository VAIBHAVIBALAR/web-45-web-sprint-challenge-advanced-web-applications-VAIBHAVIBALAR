import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = async () => {
    let raColor =  (await axiosWithAuth().get('/colors')
    .then(res =>{
        return res.data
    }))
    return raColor;
    
}

export default fetchColorService;