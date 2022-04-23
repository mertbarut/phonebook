import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const classicalTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica',
  headerBgColor: '#003366',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#274CE0',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const initChatLog = (pokemonName) => {
  let chatLog = [] 

  chatLog.push({
      id: 1,
      message: `Looking for ${pokemonName} in the database using linear search.`,
      trigger: 2,
      delay: 500,
      placeholder: 'Please be patient',
    })
  chatLog.push({
      id: 2,
      message: `This might take a while. Please be patient.`,
      trigger: 3,
      delay: 500,
      placeholder: 'Please be patient',
    })
  chatLog.push({
      id: 3,
      message: `${pokemonName} not found so far! Continuing linear search.`,
      delay: 500 * 99 / 2,
      trigger: 4,
      placeholder: 'Please be patient',
  })

  for ( let i = 4; i < 72 + 4; i++) {
    if (i % 2 === 0) {
      chatLog.push({
        id: i,
        message: `Looking for ${pokemonName} among 4294967296 pokemons with no lead! Please be patient.`,
        trigger: i + 1,
        delay: 500 * 99 / 2,
        placeholder: 'Please be patient',
      })
    } else {
      if (i % 5 === 0) {
        chatLog.push({
          id: i,
          message: `Worst-case search time: around ~50 days. 👉👈`,
          trigger: i + 1,
          delay: 500 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 7 === 0) {
        chatLog.push({
          id: i,
          message: `Leaving no 🪨 unturned for ${pokemonName}. Please be patient.`,
          trigger: i + 1,
          delay: 500 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 11 === 0) {
        chatLog.push({
          id: i,
          message: `🔥 Everything is fine. Please be patient. `,
          trigger: i + 1,
          delay: 500 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 13 === 0) {
        chatLog.push({
          id: i,
          message: `...no, that's not it either... 💢`,
          trigger: i + 1,
          delay: 500 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 17 === 0) {
        chatLog.push({
          id: i,
          message: `Stopping at nothing but ${pokemonName}. Please be patient.`,
          trigger: i + 1,
          delay: 500 * 99 / 2,
          placeholder: 'Please be patient',
        })
      } else if (i % 19 === 0) {
      chatLog.push({
        id: i,
        message: `Putting my digital soul into finding ${pokemonName}. Please be patient.`,
        trigger: i + 1,
        delay: 500 * 99 / 2,
        placeholder: 'Please be patient',
      })
      } else {
        chatLog.push({
          id: i,
          message: `Still searching for ${pokemonName}. Please be patient.`,
          trigger: i + 1,
          delay: 500 * 99 / 2,
          placeholder: 'Please be patient',
        })
      }
    }
  }

  chatLog.push({
    id: 76,
    message: `Found ${pokemonName}, at last. Who puts it at the end of the search list?`,
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
        height='300px'
        bubbleStyle={{ fontSize: '12px' }}
        hideBotAvatar={true}
        botDelay={0}
        headerTitle={algorithmName}
        steps={chatLog}
      />
    </ThemeProvider>
  )
}

export default Algorithm