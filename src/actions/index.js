
import { getTokenData, getVehiclesData, getPlanetsData, getResultData } from '../services';

export async function setToken(dispatch){
    let data =  await getTokenData();
    dispatch({
        type: 'SET_TOKEN',
        payload: data
        
    }); 
}
export async function setVehicles(dispatch){
    let data = await getVehiclesData();
    dispatch({
        type: 'SET_VEHICLES',
        payload: data
    });   
}
export async function setPlanets(dispatch){
    let data = await getPlanetsData();
    dispatch({
        type: 'SET_PLANETS',
        payload: data
    });  
}
export async function findFalcone(dispatch, req){
    let data = await getResultData(req);
    dispatch({
        type: 'SET_RESULT',
        payload: data
    }); 
}
export function selectPlanet(dispatch, data){
    dispatch({
        type: 'SELECT_PLANET',
        payload: data
    }); 
}
export function selectVehicle(dispatch, data){
    dispatch({
        type: 'SELECT_VEHICLE',
        payload: data
    }); 
}
export function setTotalTime(dispatch, data){
    dispatch({
        type: 'SET_TIME',
        payload: data
    }); 
}
export async function resetSelectionState(dispatch){
    dispatch({
        type: 'RESET_STATE'
    }); 
}


