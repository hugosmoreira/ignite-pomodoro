import { HandPalm, Play } from 'phosphor-react'
import { useContext } from 'react'
import {
  HomeContainer,
  FormContainer,
  StartCountdownButton,
  StopCountdownButton,
  CountDownContainer,
} from './styles'


export function Home() {
  return (
    <HomeContainer>
      <form action=''>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id='task' />

          <label htmlFor="minutesAmount">Durante</label>
          <input id='minutesAmount' type="number" />


          <span>Minutos.</span>

        </FormContainer>


        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>


        </CountDownContainer>

        <button type='submit'>
          <Play size={24} />
        </button>
       

       
      </form>
    </HomeContainer>
  );
}