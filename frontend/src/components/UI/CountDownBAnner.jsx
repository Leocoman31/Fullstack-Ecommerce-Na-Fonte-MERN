
import React, { useEffect, useState } from "react";
import { MdInbox } from "react-icons/md";


const CountDownBAnner = ({ data }) => {


 
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (
      typeof timeLeft.days === 'undefined' &&
      typeof timeLeft.hours === 'undefined' &&
      typeof timeLeft.minutes === 'undefined' &&
      typeof timeLeft.seconds === 'undefined'
    ) {
      console.log("apagar evento")
    }
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(data.finish_Date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutos: Math.floor((difference / 1000 / 60) % 60),
        Segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      
       
             <div  className="text-[1.5rem]    text-center rounded-md border p-2   text-black">
        <p  >{timeLeft[interval]}</p>
        <p>{interval}</p>
      </div>

    
           

   
   
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        <div className="  flex  gap-4 mx-4 items-center  justify-center  ">
        {timerComponents}</div>
      ) : (
        <span className="text-[red] text-[25px]">Promoção esgotada</span>
      )}
    </div>
  );
};

export default CountDownBAnner;
