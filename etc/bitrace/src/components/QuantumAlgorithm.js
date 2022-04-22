import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const quantumTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica',
  headerBgColor: '#800080',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#BF40BF',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const Algorithm = ({algorithmName, pokemonName}) => {
  const chatLog = [
    {
      id: 1,
      message: `Looking for ${pokemonName} in the database`,
      trigger: 2,
      delay: 500,
      placeholder: 'Please be patient',
    }
  ]

  for ( let i = 2; i < 60 * 2; i++) {
    if (i % 2 === 0) {
      chatLog.push({
        id: i,
        message: `Iteration #${Math.floor(i / 2)}`,
        trigger: i + 1,
        delay: 500,
        placeholder: 'Please be patient',
      })
    } else {
      if (i % 7 === 0) {
        chatLog.push({
          id: i,
          message: `Too many possibilities! Amplifying amplitude...`,
          trigger: i + 1,
          delay: 500,
          placeholder: 'Please be patient',
        })
      } else if (i % 11 === 0) {
        chatLog.push({
          id: i,
          message: `Can't decide which one! Amplifying amplitude...`,
          trigger: i + 1,
          delay: 500,
          placeholder: 'Please be patient',
        })
      } else if (i % 13 === 0) {
        chatLog.push({
          id: i,
          message: `I don't want to commit yet. Amplifying amplitude...`,
          trigger: i + 1,
          delay: 500,
          placeholder: 'Please be patient',
        })
      } else if (i % 17 === 0) {
        chatLog.push({
          id: i,
          message: `I don't want to make you wait but... Amplifying amplitude...`,
          trigger: i + 1,
          delay: 500,
          placeholder: 'Please be patient',
        })
      } else if (i % 29 === 0) {
      chatLog.push({
        id: i,
        message: `Just making sure! Amplifying amplitude...`,
        trigger: i + 1,
        delay: 500,
        placeholder: 'Please be patient',
      })
      } else {
        chatLog.push({
          id: i,
          message: `Still too uncertain. Amplifying amplitude...`,
          trigger: i + 1,
          delay: 500,
          placeholder: 'Please be patient',
        })
      }
    }
  }

  chatLog.push({
    id: 60 * 2,
    message: `Iteration #60`,
    trigger: 60 * 2 + 1,
    delay: 500,
    placeholder: 'Please be patient',
  })

  chatLog.push({
    id: 60 * 2 + 1,
    message: `Found ${pokemonName} in the database after 60 iterations and in 1 minute! 🎉`,
    delay: 500,
    end: true,
    placeholder: '',
  })

  return (
    <ThemeProvider theme={quantumTheme}>
      <ChatBot
        hideBotAvatar={true}
        botDelay={50}
        headerTitle={algorithmName}
        steps={chatLog}
      />
    </ThemeProvider>
  )
}

export default Algorithm