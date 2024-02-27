import React from 'react';

function AvailableTime({restime,updateTime}) {
  return (
    <select value={restime} onChange={updateTime} name='res-time' className='w-50 rounded border-0 p-2 mt-5 mb-4'>
      <option>Choose Time</option>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
    </select>
  );
}

export default AvailableTime;