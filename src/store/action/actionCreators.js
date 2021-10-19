
import { actionTypes } from './actionTypes';

export const loading = ()=>{
	return { type : actionTypes.LOADING}
}
export const ageUpAsync = (val)=>{
	return {
		type :  actionTypes.AGE_UP ,
		payload : val
	}
}
export const ageUp = (val)=>{
return dispatch =>{
	dispatch(loading())
	setInterval(()=>{
		dispatch(ageUpAsync(val))
	},5000)
}
}

export const ageDown = (val)=>{
	return{
		type: actionTypes.AGE_DOWN ,
		payload : val
	}
}