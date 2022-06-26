import React, { Component } from 'react';
import '../css/App.css';
import { connect } from 'react-redux';
import {  
    BrowserRouter as Router,
    Switch,
    Route} from 'react-router-dom';
    import UserInputPage from './UserInputPage';
    import { setToken, setVehicles, setPlanets, selectPlanet, selectVehicle, findFalcone, setTotalTime, resetSelectionState } from '../actions';
import ResultPage from './ResultPage';


class Home extends Component{
    async componentDidMount(){
        await this.props.setToken();
        await this.props.setVehicles();
        await this.props.setPlanets();
    }
    // handler for selecting a planet from  then dropdown
    planetSelectHandler = (value) =>{
        this.props.selectPlanet(value);
    }
    // handler for selecting a vehicle from the radio button list
    vehicleSelectHandler = (planetDistance, vehicleName) =>{
        let vehiclesSpeed = this.props.vehicles.find((vehicle)=>vehicle.name === vehicleName).speed,
            timeTaken = planetDistance / vehiclesSpeed;
        this.props.selectVehicle(vehicleName);
        this.props.setTotalTime(this.props.totalTime + timeTaken);
    }
    // handler for the find button 
    findResultHandler = async ()=>{
        let { selected_planets, selected_vehicles , token, findFalcone } = this.props;
        // call the action to find the result
       await findFalcone({
            token,
            planet_names: selected_planets,
            vehicle_names: selected_vehicles
        });
    }
    render(){
        let { planets, vehicles, noOfInputs, result, totalTime, selected_planets, selected_vehicles } = this.props;
        return (
            <Router>
                <Switch>
                    <Route path="/result">
                        <ResultPage 
                            result={result} 
                            totalTime={totalTime} 
                            resetSelectionState={this.props.resetSelectionState}/>
                    </Route>
                    <Route path="/">
                        <UserInputPage 
                            planets = {planets || []}
                            vehicles = {vehicles || []}
                            noOfInputs={noOfInputs}
                            planets_selected = {selected_planets || []}
                            vehicles_selected ={selected_vehicles || []}
                            totalTime = {totalTime || 0}
                            planetSelectHandler = {this.planetSelectHandler} 
                            vehicleSelectHandler = {this.vehicleSelectHandler}
                            findResultHandler = {this.findResultHandler}/> 
                    </Route>
                </Switch>
            </Router>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setToken : async ()=> { // action for setting the token
            await setToken(dispatch);
        },
        setVehicles: async ()=> { // action for setting the total vehicles available initially
            await setVehicles(dispatch);
        },
        setPlanets: async ()=> { // action for setting the total planets available initially 
            await setPlanets(dispatch);
        },
        findFalcone: async (req) => { // action for finding the search result
            await findFalcone(dispatch, req);
        },
        selectPlanet: (data)=> selectPlanet(dispatch, data), // action for selecting a planet,
        selectVehicle: (data)=> selectVehicle(dispatch, data), // action for selecting a vehicle
        setTotalTime: (time)=>{setTotalTime(dispatch, time)}, // action for calculating total time 
        resetSelectionState: async()=>{  // action for resetting the selection state of the store
            await resetSelectionState(dispatch);
        }
    }
  }
const mapStateToProps = (state)=>{
    return {
        token: state.token,
        planets: state.planets,
        vehicles: state.vehicles,
        selected_planets: state.selected_planets,
        selected_vehicles: state.selected_vehicles,
        result: state.result,
        totalTime: state.totalTime
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);