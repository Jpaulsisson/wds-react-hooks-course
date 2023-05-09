import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const [themes, setThemes] = useState({
    theme: '#000000',
    theme2: '#ABCDEF',
    theme3: '#123456',
  })

  const theme = themes.theme;
  const theme2 = themes.theme2;
  const theme3 = themes.theme3;
  
  function goDown() {
    setCount((prevCount) => prevCount - 1)  /////use the previous value by passing it as a function instead of the way "goUp" is set up
                                            /////the useState setter method allows for this value to be understood internally
                                            ////Here, we make sure not to delete our other state and only update the count
  }

  function goUp() {
    setCount((prevCount) => prevCount + 1)
  }

  // function goUp() {
  //   setCount({ count: count.count + 1})   ///////functional but not optimal. use example above ("goDown") to be better.
  // }                                                       //////Here, setCount is being set to only count: ...+1

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

  return (
    <>
      <div className='all'>
        <div className='buttons-and-count'>
          <button onClick={goDown}>-</button>
          <span className='count'>{count}</span>
          <button onClick={goUp}>+</button>
        </div>
        <div className='color-inputs'>
          <label htmlFor='number-color' id='number-color-label' name='number-color-label'>CHOOSE NUMBER COLOR</label>
          <input type='color' name='btn-color-label' onChange={setTheme} value={theme} /> 
          <label htmlFor='bg-color' id='bg-color-label' name='bg-color-label'>CHOOSE BACKGROUND COLOR</label>   
          <input type='color' name='btn-color-label' onChange={setTheme2} value={theme2} /> 
          <label htmlFor='btn-color' id='btn-color-label' name='btn-color-label'>CHOOSE BUTTON COLOR</label>   
          <input type='color' name='btn-color-label' onChange={setTheme3} value={theme3} /> 
        </div>
      </div>   
    </>
  )
}

export default App
