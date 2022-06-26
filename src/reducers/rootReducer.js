
const SET_TOKEN = 'SET_TOKEN',
    SET_VEHICLES = 'SET_VEHICLES',
    SET_PLANETS = 'SET_PLANETS',
    SELECT_PLANET = 'SELECT_PLANET',
    SELECT_VEHICLE = 'SELECT_VEHICLE',
    SET_RESULT = 'SET_RESULT',
    SET_TIME = 'SET_TIME',
    RESET_STATE = 'RESET_STATE';

const initState = {
    token: '',
    totalTime: 0,
    planets: [],
    vehicles: [],
    selected_planets: [],
    selected_vehicles: [],
    result:  {}
};

export default function rootReducer(state = initState, action){
    switch(action.type){
        case SET_TOKEN:
            return{
                ...state,
                token: action.payload.token
            }
        case SET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload
            }
        case SET_PLANETS:
            return {
                ...state,
                planets: action.payload
            } 
        case SELECT_PLANET:
            return {
                ...state,
                selected_planets: [...state.selected_planets, action.payload]
            } 
        case SELECT_VEHICLE:
            return {
                ...state,
                selected_vehicles: [...state.selected_vehicles, action.payload]
            } 
        case SET_RESULT:
            return {
                ...state,
                result : action.payload
            }  
         case SET_TIME :
                return {
                    ...state,
                    totalTime : action.payload
                }  
        case RESET_STATE :
            return {
                ...state,
                selected_planets: [],
                selected_vehicles: [],
                totalTime: 0
            }         
        default:
        return {
            ...state
        }
    }
}