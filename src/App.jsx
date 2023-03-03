import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import React from 'react'

import Controls from './components/sidebar/controls/Controls'
import Search from './components/sidebar/search/Search'
import Reminder from './components/reminders/newReminder/NewReminder'
import Menu from './components/sidebar/menu/Menu'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: linear-gradient(
      to right,
      rgb(248, 113, 133),
      rgb(244, 114, 182)
    );

    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }  
`

const AppStyle = styled.div`
  width: 52rem;
  height: 36rem;
  border: 2px solid black;
  background: rgb(31, 41, 55);
  border-radius: 15px;
  display: flex;
  overflow: hidden;
  
`

const Aside = styled.aside`
  background: rgb(75, 85, 99);
  width: 33.333333%
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppStyle>
        <Aside>
          <Controls />
          <Search />
          <Menu />
        </Aside>
        <Reminder />
      </AppStyle>  
    </div>
      
  )
}

export default App
