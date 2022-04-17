import './index.css'

import Dropdown from './components/DropdownMenu';
import ListboxSelect from './components/ListboxSelect';

const App = () => {
  return (
    <div class="flex justify-center items-center min-h-screen bg-indigo-500">
      <div class="flex-5 grow-0 shrink-0 max-w-5x1 p-20">
        <div className="grid grid-cols-1 grid-rows-5 gap-20 grid-flow-col lg:grid-cols-1">
          <div class="p-20 min-w-min bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
            <Dropdown />
          </div>
          <div class="p-20 pr-10 min-w-min bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
            <ListboxSelect />
          </div>
        </div>
      </div>
    </div>


  );
}

export default App;
