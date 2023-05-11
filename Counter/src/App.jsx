import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [themes, setThemes] = useState({
    theme: '#a2e2dd',
    theme2: '#a7998b',
    theme3: '#d1d1d1',
  })

  const theme = themes.theme;
  const theme2 = themes.theme2;
  const theme3 = themes.theme3;
  
  useEffect(() => {
    const check = theme.substring(1, 2);
    if (check <= 8) {
      document.documentElement.style.setProperty('--btn-font-color1', 'white');
    } else {
      document.documentElement.style.setProperty('--btn-font-color1', 'black');

    }
  }, [theme])

  useEffect(() => {
    const check = theme2.substring(1, 2);
    if (check <= 8) {
      document.documentElement.style.setProperty('--btn-font-color2', 'white');
    } else {
      document.documentElement.style.setProperty('--btn-font-color2', 'black');

    }
  }, [theme2])

  useEffect(() => {
    const check = theme3.substring(1, 2);
    if (check <= 8) {
      document.documentElement.style.setProperty('--btn-font-color3', 'white');
    } else {
      document.documentElement.style.setProperty('--btn-font-color3', 'black');

    }
  }, [theme3])

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [windowWidth])

  function handleResize() {
    setWindowWidth(window.innerWidth)
  }

  function goDown() {
    setCount((prevCount) => prevCount - amount)  /////use the previous value by passing it as a function instead of the way "goUp" is set up the useState setter method allows for this value to be understood internally. Here, we make sure not to delete our other state and only update the count
  }

  function goUp() {
    setCount((prevCount) => {
      return prevCount + amount;
    })
  }

  function setTheme(e) {
    const targetClr = e.target.value;
    document.documentElement.style.setProperty('--theme', theme);
    setThemes((prevThemes) => {
      return {...prevThemes, theme: targetClr };
    })
  }

  function setTheme2(e) {
    const targetClr = e.target.value;
    document.documentElement.style.setProperty('--theme2', theme2);
    setThemes((prevThemes) => {
      return {...prevThemes, theme2: targetClr };
    })
  }

  function setTheme3(e) {
    const targetClr = e.target.value;
    document.documentElement.style.setProperty('--theme3', theme3);
    setThemes((prevThemes) => {
      return {...prevThemes, theme3: targetClr };
    })
  }

  function handleAmountChange(e) {
    const target = parseInt(e.target.value);
    setAmount(target);
  }

  return (
    <>
      <div className='all'>
        <div className='buttons-and-count'>
          <button onClick={goDown}>-</button>
          <span className='count'>{count}</span>
          <button onClick={goUp}>+</button>
        </div>
        <div className='interval-setter'>
          <input type='number' defaultValue={1} name='interval-input' onChange={handleAmountChange} placeholder='set an interval'/>
          <label htmlFor='interval-input'>Current Interval: {amount}</label>
        </div>
        <div className='color-inputs'>
          <label htmlFor='number-color' id='number-color-label' name='number-color-label'>CHOOSE NUMBER COLOR</label>
          <input className='theme-1' type='color' name='btn-color-label' onChange={setTheme} value={theme} /> 
          <label htmlFor='bg-color' id='bg-color-label' name='bg-color-label'>CHOOSE BACKGROUND COLOR</label>   
          <input className='theme-2' type='color' name='btn-color-label' onChange={setTheme2} value={theme2} /> 
          <label htmlFor='btn-color' id='btn-color-label' name='btn-color-label'>CHOOSE BUTTON COLOR</label>   
          <input className='theme-3' type='color' name='btn-color-label' onChange={setTheme3} value={theme3} /> 
        </div>
        <div>
          <h2>Current Window Width: <span className='window-width'>{`${windowWidth}px`}</span> </h2>
        </div>
      </div>   
    </>
  )
}

export default App
