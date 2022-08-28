import React from 'react'
import './secondPage.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom'

export default function SecondPage() {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate('/')
  }
  const navigateWebsite = () => {
    navigate('/website')
  }
  return (
    <div className="mt-5 center">
      <div className="">
      {/* <div class="fireworks-example">{Fireworks.start()}</div> */}
        <iframe
        title='spongebob'
          src="https://giphy.com/embed/6tHy8UAbv3zgs"
          width="480"
          height="353"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <Stack direction="row" spacing={2} className="center mt-5">
        <Button variant="contained" color="primary" onClick={navigateBack}>
          Take me back, I made a mistake
        </Button>   
        <Button variant="contained" color="success" onClick={navigateWebsite}>
          Onwards
        </Button>
      </Stack>
    </div>
  )
}
