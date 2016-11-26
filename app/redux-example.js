var redux = require('redux');

//pure function temp

var reducer = (state={city: 'Saigon'}, action) =>
{
  if(action.type=="CHANGE_CITY"){
    return {...state, city: action.name};
  }
  return state;
}

var store = redux.createStore(reducer);
store.subscribe(function(){
  var cityName = store.getState().city;
  document.getElementById('city').innerHTML = 'City is ' + cityName;
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
