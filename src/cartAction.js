
import axios from 'axios';
import { FAIL, SUCCESS } from './cartConstats';


//dispatchable function to access datas
export const getData= async(dispatch)=>{
    try{
        const {data}= await axios.get('/ecart.json')

    // dispatch(data.ecart)
    // console.log(data.ecart);

    dispatch({
        payload:data.ecart,
        type:SUCCESS
    })
    }
    catch (err){
        dispatch(
            {
                payload:err,
                type:FAIL
            }
        )
    }
} 