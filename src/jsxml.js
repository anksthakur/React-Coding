import React from 'react'

const jsxml = () => {
  return (
    <div>
        {/*  without JSX hum kaise print karwa sktenbrowser pe*/}
      {
        React.createElement(
        // 1st parameter tag
        'h1',
        // 2nd parameter hota hai class abhi null de rhe hai
        // null,
        // or className add krni hai to
        {className:'head'},
        // 3rd parameter hota hai text
        'without JSX'
        )
      }
    </div>
  )
}

export default jsxml
