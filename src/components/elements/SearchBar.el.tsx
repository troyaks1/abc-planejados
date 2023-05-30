import { FormEvent, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

export interface SearchBarStyle {
  color: {
    primary: {
      bg: string
      text: string
    },
    secundary: {
      bg: string
      text: string
    },
    terceary: {
      bg: string
      text: string
    }
  }
}

export default function SearchBar({ ...props }: SearchBarStyle) {

  const [input, setInput] = useState('');

  const searchOnDB = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Need to implement search on database script.
      console.log(input);
    }
  }

  return (
    <div className='flex relative left-1/2 transform -translate-x-1/2'>
      <div className={`flex max-w-xs h-8 items-stretch rounded-full overflow-hidden shadow-xl`}>
        <input
          className={`w-full ${props.color.secundary.bg} ${props.color.secundary.text} font-bold px-10 text-sm rounded-l-full outline-none`}
          onKeyDown={(e) => searchOnDB(e)} onChange={(e) => setInput(e.target.value)} value={input}
        />
        <div className='lg:flex hidden'>
          <BsSearch className={`absolute right-3 top-1.5 ${props.color.primary.text}`} size={20} />
        </div>
      </div>
    </div>
  )
}