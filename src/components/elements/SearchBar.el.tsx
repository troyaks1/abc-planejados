import { FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import Color from '@/interfaces/frontend/Color';


export interface SearchBarStyle {
  color: Color
}

export default function SearchBar({ ...props }: SearchBarStyle) {

  const [input, setInput] = useState('');

  const searchOnDB = (e: React.KeyboardEvent<HTMLInputElement> | null) => {
    if ((e && e.key === 'Enter') || (!e)) { // In case enter is pressed or search button is pressed.
      (e) ? e.preventDefault() : null;
      // TODO: Need to implement search on database script.
      console.log(input);
    }
  }

  return (
    <div className='flex relative left-1/2 transform -translate-x-1/2'>
      <div className={`flex max-w-xs h-8 items-stretch rounded-full overflow-hidden shadow-xl`}>
        <input
          className={`w-full ${props.color.terceary.bg} ${props.color.terceary.text} font-bold pl-4 pr-10 text-sm rounded-l-full outline-none`}
          onKeyDown={(e) => searchOnDB(e)} onChange={(e) => setInput(e.target.value)} value={input}
        />
        <div className='lg:flex hidden' onClick={() => searchOnDB(null)}>
          <BsSearch className={`absolute right-3 top-1.5 ${props.color.terceary.text}`} size={20} />
        </div>
      </div>
    </div>
  )
}