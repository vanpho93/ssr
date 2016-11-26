var redux = require('redux');

//pure function temp
var defaultState = {city: 'Saigon', temp: 31, mang: ["Ha Noi"]};
var reducer = (state=defaultState, action) =>
{
  switch (action.type) {
    case "CHANGE_CITY":
      return {...state, city: action.name};
    case "CHANGE_TEMP":
      return {...state, temp: action.nhietDo}
    case "ADD_E":
      return {...state, mang: [...state.mang, action.city]}
    case "REMOVE_E":
      return {...state, mang: state.mang.filter(e => e != action.city)}
    default:
      return state;
  }
}

var store = redux.createStore(reducer);
store.subscribe(function(){
  var msg = store.getState().city + store.getState().temp;
  document.getElementById('city').innerHTML = 'City is ' + msg;
  console.log(store.getState());
});

store.dispatch(
  {
    type: "CHANGE_CITY",
    name: "Da Nang"
  }
);

store.dispatch(
  {
    type: "CHANGE_CITY",
    name: "Hau Giang"
  }
);

var action = {
  type: "CHANGE_TEMP",
  nhietDo: 30
}

store.dispatch(action);

store.dispatch({
  type: 'ADD_E',
  city: "An Giang"
})

store.dispatch({
  type: 'REMOVE_E',
  city: "Ha Noi"
})
