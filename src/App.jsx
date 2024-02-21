import { useState, useEffect } from 'react';
import Data from './Data.json';
import BirthdayWish from './assets/Component/BirthdayWish';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const todayBirthday = Data.find(item => {
    const birthdayDate = new Date(item.date);
    return (
      birthdayDate.getDate() === date.getDate() &&
      birthdayDate.getMonth() === date.getMonth() &&
      birthdayDate.getFullYear() === date.getFullYear()
    );

  });

  return (
    <div>
      <h1>{date.toDateString()}</h1>
      {todayBirthday ? (
        <BirthdayWish person={todayBirthday.person} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;

