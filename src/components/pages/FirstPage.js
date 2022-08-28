import React from 'react'

import Typewriter from 'typewriter-effect'
import Countdown from 'react-countdown'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'
import FireWorks from '../commons/FireWorks'
import './firstPage.css'

export default function FirstPage() {
  const navigate = useNavigate()

  const navigateBack = () => {
    window.location.reload(false);
    navigate('/')
  }
  const nagivateToSecondPage = () => {
    navigate('/second')
  }
  const nagivateToRejected = () => {
    navigate('/rejected')
  }
  return (
    <div className="mt-5 mb-5">
      <div className="text-center mt-5 mb-5">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .changeDelay(40)
              .typeString('<h3>Welcome!</h3>')
              .typeString(
                '<br><br><h3>My name is <b>Lais Najjar</b> and this is my personal website</h3>',
              )
              .typeString('<br><br>Version 0.0.1')
              .typeString(
                '<br><br>Since I know there will be a lot of room for improvement',
              )
              .pauseFor(1000)
              .deleteAll(10)
              .pasteString(
                '<h2>Now, you are presented with a choice. <br><br>CHOOSE WISELY</h2>',
              )
          }}
        />
        <Countdown date={Date.now() + 20000} />
        {/* <FireWorks/> */}
        <Stack spacing={2} direction="row" className="button mt-5">
          <Button variant="outlined" color="primary" onClick={navigateBack}  sx={{ width: '100px' }}>
            I'm a slow reader
          </Button>
          <Button
            sx={{ width: '100px' }}
            variant="outlined"
            color="success"
            onClick={nagivateToSecondPage}
          >
            I like you, so I'll maybe give you an interview and dive deeper into
            your cool website
          </Button>
          <Button variant="outlined" color="error" onClick={nagivateToRejected} sx={{ width: '100px' }}>
            Rejected
          </Button>
        </Stack>
      </div>
    </div>
  )
}
