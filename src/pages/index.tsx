import type { NextPage } from 'next';
import Header, { HeaderStyle } from '../components/Header.cmp';
import { BsCart, BsWhatsapp, BsPersonCircle } from 'react-icons/bs';
import { BiStoreAlt } from 'react-icons/bi';


const Home: NextPage = () => {

  const headerStyle: HeaderStyle = {
    color: {
      primary: {
        bg: 'bg-slate-200',
        text: 'text-zinc-800',
      },
      secundary: {
        bg: 'bg-slate-500',
        text: 'text-zinc-800',
      },
      terceary: {
        bg: 'bg-red-300',
        text: 'text-zinc-800'
      }
    }
  }

  return (
    <div className={`${headerStyle.color.primary.bg} flex flex-col min-h-screen w-full`}>
      <Header color={headerStyle.color} />
      <div className={`${headerStyle.color.terceary.bg} ${headerStyle.color.terceary.text} w-full p-2 bottom-0 absolute flex flex-row justify-around items-center lg:hidden`}>
        <div>
          <BiStoreAlt size={24}/>
        </div>
        <div>
          <BsWhatsapp size={24}/>
        </div>
        <div>
          <BsCart size={24}/>
        </div>
        <div>
          <BsPersonCircle size={24}/>
        </div>
      </div>
    </div>
  )

}




export default Home
