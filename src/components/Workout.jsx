import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {

  const { workout } = props

  return (
    <SectionWrapper id={'workout'} header={"Welcome to"} title={['The' , 'Danger' , 'zone ']}>
        <div className='flex flex-col gap-4'>
          {workout.map((exercise, i) => {
              return(
                <ExerciseCard i={i} exercise={exercise} key={i}></ExerciseCard>
              )
          })}
        </div>
    </SectionWrapper>
  )
}
