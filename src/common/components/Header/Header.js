import React from 'react'

export default function Header({headerMessage}) {
  return (
    <div>
      <p>This is a header component - {headerMessage}</p>
      <a href="/about-us">Click to go to our about-us page.</a>
    </div>
  )
}
