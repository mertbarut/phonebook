import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

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

const Algorithm = ({algorithmName, pokemonName}) => {
  const chatLog = [
    {
      id: 1,
      message: `Looking for ${pokemonName} in the database...`,
      trigger: 2,
    },
    {
      id: 2,
      message: `TRY FIRST`,
      trigger: 3,
    },
    {
      id: 3,
      message: `That is not ${pokemonName}, FAIL #1`,
      trigger: 4,
    },
  ]

  for ( let i = 4; i < 7300; i++) {
    if (i % 2 === 0) {
      chatLog.push({
        id: i,
        message: `TRY NEXT`,
        trigger: i + 1,
      })
    } else {
      if (i % 5 === 0) {
        chatLog.push({
          id: i,
          message: `Trying my best to find ${pokemonName}, FAIL #${Math.floor(i / 2)}`,
          trigger: i + 1,
        })
      } else if (i % 19 === 0) {
        chatLog.push({
          id: i,
          message: `Leaving no stone unturned for ${pokemonName}, FAIL #${Math.floor(i / 2)}`,
          trigger: i + 1,
        })
      } else if (i % 39 === 0) {
        chatLog.push({
          id: i,
          message: `Putting out all the stops for ${pokemonName}, FAIL #${Math.floor(i / 2)}`,
          trigger: i + 1,
        })
      } else if (i % 67 === 0) {
        chatLog.push({
          id: i,
          message: `Stopping at nothing but ${pokemonName}, FAIL #${Math.floor(i / 2)}`,
          trigger: i + 1,
        })
      } else if (i % 31 === 0) {
      chatLog.push({
        id: i,
        message: `Putting my soul into finding ${pokemonName}, FAIL #${Math.floor(i / 2)}`,
        trigger: i + 1,
      })
      } else {
        chatLog.push({
          id: i,
          message: `That is not ${pokemonName}, FAIL #${Math.floor(i / 2)}`,
          trigger: i + 1,
        })    
      }
    }
  }

  chatLog.push({
        id: 7300,
        message: `FOUND ${pokemonName} after 7300 tries!`,
        end: true,
      })

  return (
    <ThemeProvider theme={classicalTheme}>
      <ChatBot
        hideBotAvatar={true}
        botDelay={500}
        headerTitle={algorithmName}
        steps={chatLog}
      />
    </ThemeProvider>
  )
}

export default Algorithm