import { Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useTimeoutFn } from 'react-use'

import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

import qbit from './img/qbit.gif'
import cbit from './img/cbit.gif'

const _Transition = ({avatar, selected}) => {
  let [isShowing, setIsShowing] = useState(true)
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)

  return (
    <div className="flex flex-col items-center py-16">
      <div className="w-32 h-28">
        <Transition
          as={Fragment}
          show={isShowing}
          enter="transform transition duration-[1000ms]"
          enterFrom="opacity-0 rotate-[-45deg] scale-50"
          enterTo="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 rotate-0 scale-100 "
          leaveTo="opacity-0 scale-95 "
        >
          <div className="rounded-md object-none">
            {selected.name.includes('Quantum')
            ? 
              <img src={qbit} alt="qbit" className="rounded-full shadow-lg object-none" />
            : 
              <img src={cbit} alt="qbit" className="rounded-full shadow-lg object-none" />
            }
          </div>
        </Transition>
      </div>

      <button
        onClick={() => {
          //setIsShowing(false)
          //resetIsShowing()
        }}
        className="flex items-center px-3 py-2 mt-8 text-sm font-medium text-white transition transform bg-black rounded-full backface-visibility-hidden active:bg-opacity-40 hover:scale-105 hover:bg-opacity-30 focus:outline-none bg-opacity-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" className="w-5 h-5 opacity-70">
          <path 
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="currentColor"
            strokeWidth="1.5"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <span className="ml-3">
        <Timer active duration={selected.name.includes('Quantum') ? 2**16 : 2**32 }>
          <Timecode />
        </Timer>
        </span>
      </button>
    </div>
  )
}

export default _Transition