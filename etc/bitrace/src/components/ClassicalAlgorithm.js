import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';

const classicalTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica',
  headerBgColor: '#ef4444',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#ef4444',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const initChatLog = (pokemonName) => {
  let chatLog = [] 

  chatLog.push({
      id: 1,
      message: `Looking for ${pokemonName} in the database.`,
      trigger: 2,
      delay: 0,
      placeholder: 'Please be patient',
    })
  chatLog.push({
      id: 2,
      message: `Looking for ${pokemonName} among first 100000 pokemons. Please be patient.`,
      trigger: 3,
      delay: 0,
      placeholder: 'Please be patient',
    })
  chatLog.push({
      id: 3,
      message: `${pokemonName} not found here! Moving on.`,
      delay: 1000 * 99 / 2,
      trigger: 4,
      placeholder: 'Please be patient',
    })

  for ( let i = 4; i < 72 + 4; i++) {
    if (i % 2 === 0) {
      chatLog.push({
        id: i,
        message: `Looking for ${pokemonName} among the next 100000 pokemons. Please be patient.`,
        trigger: i + 1,
        delay: 0,
        placeholder: 'Please be patient',
      })
    } else {
      if (i % 7 === 0) {
        chatLog.push({
          id: i,
          message: `Tried my best to find ${pokemonName}, but couldn't. Moving on!`,
          trigger: i + 1,
          delay: 1000 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 13 === 0) {
        chatLog.push({
          id: i,
          message: `Left no stone unturned for ${pokemonName}, it just wasn't there. Moving on!`,
          trigger: i + 1,
          delay: 1000 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 17 === 0) {
        chatLog.push({
          id: i,
          message: `Put out all the stops for ${pokemonName}, but it was nowhere to be found. Moving on!`,
          trigger: i + 1,
          delay: 1000 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 19 === 0) {
        chatLog.push({
          id: i,
          message: `Stopped at nothing but ${pokemonName}, ready to move on.`,
          trigger: i + 1,
          delay: 1000 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 31 === 0) {
      chatLog.push({
        id: i,
        message: `Put my soul into finding ${pokemonName}, but to no avail. Moving on...`,
        trigger: i + 1,
        delay: 1000 * 99 / 2,
        placeholder: 'Please be patient',
      })
      } else {
        chatLog.push({
          id: i,
          message: `Couldn't find ${pokemonName}, moving on...`,
          trigger: i + 1,
          delay: 1000 * 99 / 2,
          placeholder: 'Please be patient',
        })
      }
    }
  }

  chatLog.push({
    id: 76,
    message: `FOUND ${pokemonName} after 3600000 tries in 1 hour.`,
    delay: 1000 * 99 / 2,
    end: true,
    placeholder: '',
  })

  return chatLog
}

const Algorithm = ({algorithmName, pokemonName}) => {
  const chatLog = initChatLog(pokemonName)
  return (
    <ThemeProvider theme={classicalTheme}>
      <ChatBot
        hideBotAvatar={true}
        botDelay={0}
        headerTitle={algorithmName}
        steps={chatLog}
      />
    </ThemeProvider>
  )
}

export default Algorithm