const initialAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

export default function availableTimeReducer (availableTimes, action) {
  if(action.type==='update time') {
    return ['1','2','3'];
  }
  if(action.type==='initialize time') {
    return initialAvailableTimes;
  }
  return availableTimes;
}