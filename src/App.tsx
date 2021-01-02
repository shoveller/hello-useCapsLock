import './App.css'
import { Password } from "components/Password"

import { DynamicRoutes } from 'DynamicRoutes'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Loading = () => <div>Loading...</div>

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <DynamicRoutes Loading={<Loading/>}/>
          <p>이 예제는 전역에서 capslock 키를 감지하는 코드를 담고 있습니다.</p>
          <p>osx의 password input을 흉내냅니다.</p>
          <Password/>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
