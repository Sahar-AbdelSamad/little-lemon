export default function availableTimeReducer (state, action) {
  switch (action.type) {
    case "update time":
      if(state.filter((availableTime) => (availableTime.date === action.date))[0]===undefined){
        const newTime = {
          date: action.date,
          time: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
        };
        return [...state, newTime];
      } else {
        return state;
      }

    case "initialize time":
      return state;

    default:
      return state;
  }
};