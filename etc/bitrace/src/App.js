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
import Algorithm from './components/Algorithm'

import { useState } from 'react'

const colorScheme = {
  box1: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  box2: "bg-gradient-to-r from-cyan-500 to-blue-500",
  box3: "bg-gradient-to-r from-teal-500 to-sky-500",
  box4: "bg-gradient-to-r from-yellow-200 to-amber-400",
  box5: "bg-white border-y-4 border-emerald-300",
  box6: "bg-gradient-to-t from-rose-200 to-sky-400",
  box7: "bg-gradient-to-b from-orange-200 to-red-400",
  box8: "bg-gradient-to-r from-cyan-300 to-sky-500",
  box9: "bg-gradient-to-r from-red-300 to-orange-500",
  box10: "bg-gradient-to-r from-slate-500 to-slate-300",
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
    chip: 'Runs on a regular computer chip',
    promotion: 'Perfect for old souls',
  },
  {
    name: 'Edgars\' Quantum Algorithm',
    chip: 'Runs on a quantum chip',
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
              <div class={`p-4 max-w-lg max-h-lg ${colorScheme.box10} border-transparent rounded-md shadow-md space-y-2`}>
                <_Transition />
              </div>
              <Algorithm algorithmName={selected.name} pokemonName={selectedPokemon.name}/>
            </div>
          :
            <div className="grid grid-cols-1 grid-rows-12 gap-20 grid-flow-row lg:grid-cols-1">
              <div class={`p-10 max-w-lg ${colorScheme.box3} border-transparent rounded-md shadow-md space-y-2`}>
                <div class={`p-2 px-5 max-w-lg max-h-lg ${colorScheme.box9} border-transparent rounded-md shadow-md space-y-2`}>
                  <_Tabs />
                </div>
                <div class={`p-20 max-w-lg ${colorScheme.box8} border-transparent rounded-md shadow-md space-y-2`}>
                  <div class={`p-2 text-center max-w-lg  ${colorScheme.box5} border-transparent rounded-md shadow-md space-y-2`}>
                    <em>Your Choice</em>
                  </div>
                  <_RadioGroup selected={selected} setSelected={setSelected} choices={choices} />
                </div>
                <div class='text-white text-center'>
                  What is your favorite pokemon?
                </div>
                <_Combobox selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} pokemons={pokemons} />
                <div class={`p-10 max-w-lg ${colorScheme.box5} border-transparent rounded-md shadow-md space-y-2`}>
                  <_Disclosure questions={questions} answers={answers} />
              </div>
              </div>
              <div class={`p-20 max-w-lg ${colorScheme.box6} border-transparent rounded-md shadow-md space-y-2`}>
              <div class='text-white text-center'>
                  Are you sure you want to go with {selected.name}?
              </div>
                <_Dialog
                  header='Algorithm choice successfully submitted'
                  message="You will now be redirected to seperate room to wait for the end of your algorithm's execution."
                  confirmation='Take me there!'
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
