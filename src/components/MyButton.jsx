import React from 'react'

function MyButton({ generate }) {
  return (
    <div class='btn2'>
    <button type="button" class="btn" onClick={() => 
      {console.log('Click');
      generate()}} >Generate QR code</button>
      </div>
  )
}

export default MyButton 