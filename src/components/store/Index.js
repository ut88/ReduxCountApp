import { createStore } from "redux";
const intialState={counter:0,showCounter:true}
const counterReducer=(state=intialState,action)=>{
    if(action.type==='increment'){
        return {
            counter:state.counter+5,
            showCounter:state.showCounter
        }
    }
    if(action.type==='decrement'){
        return{
            counter:state.counter-5,
            showCounter:state.showCounter
        }
    }
    if(action.type==='toggle'){
        return{
            showCounter:!state.showCounter,
            counter:state.counter
        }
    }

    return state;
}

const store=createStore(counterReducer);

export default store;