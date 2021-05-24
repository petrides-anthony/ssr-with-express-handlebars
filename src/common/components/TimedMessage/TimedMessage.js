import React, {useState, useEffect} from 'react';

export default function TimedMessage() {

  const [timedMessageState, setTimedMessageState] = useState("Watch me for 5 seconds...");

  useEffect(() => {
    const myMessage = "I changed after 5 seconds!";
    const timer = setTimeout(() => {
      setTimedMessageState(myMessage);
    }, 5000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div>
      <ul><li>{timedMessageState}</li></ul>
    </div>
  )
}
