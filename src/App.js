import React, { useEffect, useState } from 'react'
// import Counter from './components/Counter'
import MyButton from './components/MyButton';
import Input from './components/Input'
import './index.css'

function App() {

  // const [value, setValue] = useState('Text in input') //указываем, что произошло изменение
  const [img, setImg] = useState('');
  const [input, setInput] = useState('') //указываем, что произошло изменение
  const [success, setSC] = useState(false) //указываем, что произошло изменение


  async function getCode(input) {
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '9da71a358emsha7f5c213776e9a5p1d1681jsn7f47158004fb',
        'X-RapidAPI-Host': 'qrcode3.p.rapidapi.com'
      },
      body: `{"data":"${input}","image":{"uri":"icon://appstore","modules":true},"style":{"module":{"color":"black","shape":"default"},"inner_eye":{"shape":"default"},"outer_eye":{"shape":"default"},"background":{}},"size":{"width":200,"quiet_zone":4,"error_correction":"M"},"output":{"filename":"qrcode","format":"svg"}}`
    };

    const response = await fetch('https://qrcode3.p.rapidapi.com/qrcode/text', options)
    if (response.ok) {
      console.log(response)

      const imageBlob = await response.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      console.log(imageObjectURL)
      setImg(imageObjectURL);
      setSC(true)

    }

  }


  // useEffect(() => {

  //   getCode()

  // }, [])

  return (
    <div class="main">
      <div className='wrapper'>
        <center><p id="note1">QR code generation</p></center>
        <center><p id="note2">Бесплатно и без регистрации!</p></center>

        <Input input={input} setInput={setInput} />
        <MyButton generate={() => getCode(input)} >Generate</MyButton>
        <img src={img} />
        <p id="note"> Made by a 🐯</p>
        {success && (<center><div class='suc'>Successful generation!</div></center>)}
      </div>
    </div>
  );
}

export default App;
