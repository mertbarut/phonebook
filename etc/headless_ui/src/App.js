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
import { Transition } from '@headlessui/react';

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
  "What is your refund policy?",
  "Do you offer technical support?"
]

const answers = [
  "If you're unhappy with your purchase for any reason, email us \
  within 90 days and we'll refund you in full, no questions asked.",
  "Nope!"
]

const App = () => {
  return (
    <div class="flex justify-center items-center min-h-screen bg-slate-100">
      <div class="flex-10 grow-0 shrink-0 max-w-3x1 p-20">
        <div className="grid  grid-cols-1 grid-rows-12 gap-20 grid-flow-row lg:grid-cols-1">
          <div class={`p-20 max-w-lg ${colorScheme.box1} border-1-8 border-transparent rounded-md shadow-md space-y-2`}>
            <_Dropdown />
          </div>
          <div class={`p-20 pr-10 max-w-lg ${colorScheme.box2} border-transparent rounded-md shadow-md space-y-2`}>
            <_Listbox />
          </div>
          <div class={`p-20 pr-10 max-w-lg ${colorScheme.box3} border-transparent rounded-md shadow-md space-y-2`}>
            <_Combobox />
          </div>
          <div class={`p-20 pr-10 max-w-lg ${colorScheme.box4} border-transparent rounded-md shadow-md space-y-2`}>
            <_Switch />
          </div>
          <div class={`p-20 pr-10 max-w-lg ${colorScheme.box5} border-transparent rounded-md shadow-md space-y-2`}>
            <_Disclosure questions={questions} answers={answers} />
          </div>
          <div class={`p-20 pr-10 max-w-lg ${colorScheme.box6} border-transparent rounded-md shadow-md space-y-2`}>
            <_Dialog
              header='Payment successful'
              message='Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.'
              confirmation='Got it, thanks!' />
          </div>
          <div class={`p-20 max-w-lg ${colorScheme.box7} border-transparent rounded-md shadow-md space-y-2`}>
            <_Popover />
          </div>
          <div class={`p-20 max-w-lg ${colorScheme.box8} border-transparent rounded-md shadow-md space-y-2`}>
            <_RadioGroup />
          </div>
          <div class={`p-4 max-w-lg max-h-lg ${colorScheme.box9} border-transparent rounded-md shadow-md space-y-2`}>
            <_Tabs />
          </div>
          <div class={`p-4 max-w-lg max-h-lg ${colorScheme.box10} border-transparent rounded-md shadow-md space-y-2`}>
            <_Transition />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
