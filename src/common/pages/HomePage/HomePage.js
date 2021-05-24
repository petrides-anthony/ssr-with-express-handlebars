import React from 'react'

import Header from '../../components/Header/Header';
import TimedMessage from '../../components/TimedMessage/TimedMessage';

export default function HomePage({ headerMessage }) {
  return (
    <>
        <h1>Home Page</h1>
        <h3>The React part of the application is below: (excluding the footer)</h3>
        <Header headerMessage={headerMessage}/>
        <TimedMessage />
    </>
  )
}
