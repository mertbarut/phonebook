import './index.css'

import _Dropdown from './components/_Dropdown';
import _Listbox from './components/_Listbox';
import _Combobox from './components/_Combobox';
import _Switch from './components/_Switch';
import _Disclosure from './components/_Disclosure';
import _Dialog from './components/_Dialog';
import _Popover from './components/_Popover'
import _RadioGroup from './components/_RadioGroup'
import _Tabs from './components/_Tabs';
import _Transition from './components/_Transition';
import ClassicalAlgorithm from './components/ClassicalAlgorithm'
import QuantumAlgorithm from './components/QuantumAlgorithm'
import CountUp from 'react-countup';

import { useState } from 'react'

const colorScheme = {
  box1: "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200",
  box2: "bg-gradient-to-r from-cyan-500 to-blue-500",
  box_main: "bg-gradient-to-b from-indigo-500 via-purple-500 to-sky-500",
  box4: "bg-gradient-to-r from-yellow-200 to-amber-400",
  box5: "bg-slate-100 border-y-4 border-emerald-300",
  box_confirmation: "bg-gradient-to-t from-rose-300 to-sky-500",
  box7: "bg-gradient-to-b from-orange-200 to-red-400",
  box_choice: "bg-gradient-to-b from-amber-200 to-yellow-200",
  box_info: "bg-slate-200",
  box10: "bg-gradient-to-r from-slate-500 to-slate-300",
  box_quantum: "bg-gradient-to-b from-purple-500 to-violet-300",
  box_classic: "bg-gradient-to-t from-yellow-200 to-amber-400",
}

const questions = [
  "Do you actually care about knowing my favorite pokemon?",
  "If this app is entirely client-side, how do you search for my favorite pokemon in your database?"
]

const answers = [
  "Not really. What you type into the search box will not cause any query as this app is entirely client-side.",
  "Ssshhh... There is no database..."
]

const choices = [
  {
    name: 'Mert\'s Classical Algorithm',
    chip: 'Using Linear search',
    promotion: 'Perfect for old souls',
  },
  {
    name: 'Edgars\' Quantum Algorithm',
    chip: 'Using Grover\'s algorithm',
    promotion: 'Most popular among hipsters',
  }
]

const pokemons = [
  { id: 1, name: 'Charizard' },
  { id: 2, name: 'Gengar' },
  { id: 3, name: 'Arcanine' },
  { id: 4, name: 'Bulbasaur' },
  { id: 5, name: 'Blaziken' },
  { id: 6, name: 'Umbreon' },
  { id: 7, name: 'Lucario' },
  { id: 8, name: 'Eevee' },
  { id: 9, name: 'Gardevoir' },
  { id: 10, name: 'Dragonite' },
  { id: 11, name: 'Absol' },
  { id: 12, name: 'Typhlosion' },
  { id: 13, name: 'Ampharos' },
  { id: 14, name: 'Squirtle' },
  { id: 15, name: 'Flygon' },
  { id: 16, name: 'Ninetales' },
  { id: 17, name: 'Tyranitar' },
  { id: 18, name: 'Infernape' },
  { id: 19, name: 'Snorlax' },
  { id: 20, name: 'Torterra' },
  { id: 21, name: 'Luxray' },
  { id: 22, name: 'Scizor' },
  { id: 23, name: 'Blastoise' },
  { id: 24, name: 'Mudkip' },
  { id: 25, name: 'Pikachu' },
]

const App = () => {
  const [selected, setSelected] = useState(choices[0])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0])

  return (
    <div class="flex justify-center items-center min-h-screen bg-slate-100">
      <div class="flex-10 grow-0 shrink-0 max-w-3x1 p-20">
        {isSubmitted === true
          ?
            <div className="grid grid-cols-1 grid-rows-12 gap-5 grid-flow-row lg:grid-cols-1">
              {selected.name.includes('Quantum')
                ?
                  <div class={`p-4 max-w-lg max-h-lg ${colorScheme.box_quantum} border-transparent rounded-md shadow-md space-y-2`}>
                    <_Transition avatar={'⚛️'} selected={selected}/>
                    <CountUp 
                      start={0}
                      end={3600000}
                      duration={2.75}
                      separator=" "
                      decimals={4}
                      decimal=","
                      prefix="EUR "
                      suffix=" left"
                      onEnd={() => console.log('Ended! 👏')}
                      onStart={() => console.log('Started! 💨')}/>
                    <QuantumAlgorithm algorithmName={selected.name} pokemonName={selectedPokemon.name}/>
                  </div>
                :
                  <div class={`p-4 max-w-lg max-h-lg ${colorScheme.box_classic} border-transparent rounded-md shadow-md space-y-2`}>
                    <_Transition avatar={'🖥️'} selected={selected}/>
                    <div class={`p-1 max-w-lg max-h-lg text-center border-transparent rounded-md`}>
                      <CountUp 
                      start={0}
                      end={1000000 * 6 * 6}
                      duration={1000 * 6 * 6}
                      separator=""
                      decimals={0}
                      decimal="."
                      prefix="Checks so far: "
                      suffix=""
                      onEnd={() => console.log('Ended! 👏')}
                      onStart={() => console.log('Started! 💨')}
                      />
                    </div>
                    <ClassicalAlgorithm algorithmName={selected.name} pokemonName={selectedPokemon.name}/>
                  </div>
              }
            </div>
          :
            <div className="grid grid-cols-1 grid-rows-12 gap-20 grid-flow-row lg:grid-cols-1">
              <div class={`p-10 max-w-lg ${colorScheme.box_main} border-transparent rounded-md shadow-md space-y-2`}>
                <div class={`p-2 px-5 max-w-lg max-h-lg ${colorScheme.box_info} border-transparent rounded-md shadow-md space-y-2`}>
                  <_Tabs />
                </div>
                <div class={`p-20 max-w-lg ${colorScheme.box_choice} border-transparent rounded-md shadow-lg space-y-2`}>
                  <div class={`p-2 text-center max-w-lg  ${colorScheme.box5} border-transparent rounded-md shadow-md space-y-2`}>
                    <em>Your Choice</em>
                  </div>
                  <_RadioGroup selected={selected} setSelected={setSelected} choices={choices} />
                </div>
                <div class='text-white text-center p-5'>
                  What is your favorite pokemon?
                </div >
                <_Combobox selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} pokemons={pokemons} />
              </div>
              <div class={`p-20 max-w-lg ${colorScheme.box_confirmation} border-transparent rounded-md shadow-md space-y-2`}>
              <div class='text-white text-center pb-5'>
                Are you sure you want to go with {selected.name}?
              </div>
                <_Dialog
                  header='Algorithm choice successfully submitted'
                  message="You will now be redirected to a seperate page to wait for the end of your algorithm's execution."
                  confirmation='Sounds good!'
                  isSubmitted={isSubmitted}
                  setIsSubmitted={setIsSubmitted} />
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
