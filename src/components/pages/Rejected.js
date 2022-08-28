import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useNavigate } from 'react-router-dom'

export default function Rejected() {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate('/')
  }
  const navigateWebsite = () => {
    navigate('/website')
  }
  return (
    <div className="mt-5 center">
      <div>I was just joking but ...</div>
      <div>
        <iframe
        title='the office'
          src="https://giphy.com/embed/j0gQA2VD38NKc9rc8y"
          width="480"
          height="400"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <div>You still get to go onwards</div>
      </div>
      <Stack direction="row" spacing={2} className="center mt-5">
        <Button variant="contained" color="primary" onClick={navigateBack}>
         Take me back 
        </Button>
        <Button variant="contained" color="success" onClick={navigateWebsite}>
          Onwards
        </Button>
      </Stack>
    </div>
  )
}
