import MainFrame from '@/components/MainFrame.cmp';
import type { NextPage } from 'next';

const Home: NextPage = () => {

  return (
    <MainFrame>
      <div className='flex justify-center items-center pt-24'>
        Home Page
      </div>
    </MainFrame>
  )

}

export default Home
