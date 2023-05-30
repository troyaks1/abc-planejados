import type { NextPage } from 'next';
import Header, { HeaderStyle } from '../components/Header.cmp';


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
        bg: 'bg-red-200',
        text: 'text-zinc-800'
      }
    }
  }

  return (
    <div className={`${headerStyle.color.primary.bg} flex flex-col min-h-screen w-full`}>
      <Header color={headerStyle.color} />
    </div>
  )

}




export default Home
