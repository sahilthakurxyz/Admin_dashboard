import { Padding } from '@syncfusion/ej2-react-charts'
import React from 'react'

const Button =({size,
  color,
  bgColor,
  text,
  borderRadius})=> {
  return (
    <div>
      <button type='button' style={{background:bgColor,borderRadius,color}} className={`text-${size} p-3 hover:drop-shadow-lg`}>
    {text}
      </button>
    </div>
  )
}

export default Button
