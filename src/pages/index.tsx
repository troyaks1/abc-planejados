import type { NextPage } from 'next';
import Header, { HeaderStyle } from '../components/Header.cmp';
import Footer from '../components/Footer.cmp';
import Color from '@/interfaces/frontend/Color';

const Home: NextPage = () => {

  const color: Color = {
    primary: {
      bg: 'bg-slate-400',
      text: 'text-zinc-400',
      shadow: ''
    },
    secundary: {
      bg: 'bg-slate-600',
      text: 'text-zinc-300',
      shadow: 'shadow-cyan-900'
    },
    terceary: {
      bg: 'bg-slate-500',
      text: 'text-zinc-300',
      shadow: ''
    }
  }

  return (
    <div className={`${color.primary.bg} flex flex-col min-h-screen w-full bg-`}>
      <Header color={color} />
      <Footer color={color} />
    </div>
  )

}

export default Home
