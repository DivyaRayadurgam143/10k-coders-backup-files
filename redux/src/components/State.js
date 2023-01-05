const {createStore}  = require("redux")
const initialState = { numoflaptops: 100 };

const buylaptops = () => {
  return {
    type: "BUY_LAPTOPS",
  };
};

const reducer = (state = initialState, action) => {
  // if(action.type==="BUY_LAPTOPS"){
  //     return{numoflaptops : state.numoflaptops-1}
  // }else{
  //     return state;
  // }

  switch (action.type) {
    case "BUY_LAPTOPS":
      return { numoflaptops: state.numoflaptops - 1 };
    default:
      return state;
  }
}

const store =  createStore(reducer);
console.log(store)
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(buylaptops)
