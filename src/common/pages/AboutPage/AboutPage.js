import React from 'react'

import Header from '../../components/Header/Header';
import TimedMessage from '../../components/TimedMessage/TimedMessage';

export default function AboutPage({ headerMessage }) {
  return (
    <>
        <h1>About Page</h1>
        <h3>I'm the About Page component</h3>
        <Header headerMessage={headerMessage} />
        <TimedMessage />
    </>
  )
}
