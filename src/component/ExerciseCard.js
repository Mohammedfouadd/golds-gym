import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'


const ExerciseCard = ({exercise}) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction='row'>
        <Button variant="outlined" sx={{ml: '21px', color: '#000', fontWeight: 'bold',
            fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'
             }} >
                {exercise.bodyPart}
        </Button>
        <Button variant="contained" sx={{ml: '21px', color: '#fff',  fontWeight: 'bold',
            fontSize: '13px', borderRadius: '20px', textTransform: 'capitalize'
             }} >
                {exercise.target}
        </Button>
      </Stack>
      <Typography ml='21px' color='#4285F4' fontWeight={700} mt='11px' pb='10px'
       textTransform='capitalize' fontSize='15px'>
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard
