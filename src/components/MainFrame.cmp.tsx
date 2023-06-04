import { ReactNode, useContext } from "react";
import Header from '@/components/mainFrame/Header.cmp';
import Footer from '@/components/mainFrame/Footer.cmp';
import Color from '@/interfaces/frontend/Color';
import getColors from "@/utils/getColors";
import { LoginContext } from '@/context/Login.context';

interface Props {
  children: ReactNode
}

export default function MainFrame({ ...props }: Props): JSX.Element {

  const color = getColors('Day'); // TODO: Add day/nigh theme and create button to handle it changing.
  const auth = useContext(LoginContext);
  return (
    <BackGround color={color}>
      <Header style={{color: color}} action={{auth: auth}} />
      <ContentSpace>
        {props.children}
      </ContentSpace>
      <Footer style={{color: color}} action={{auth: auth}} />
    </BackGround>
  )
}

interface BackGroundProps {
  children: ReactNode
  color: Color
}

function BackGround(props: BackGroundProps) {
  return (
    <div className={`flex flex-col min-h-screen w-full ${props.color.primary.bg}`}>
      {props.children}
    </div>
  )
}

function ContentSpace({ ...props }: { children: ReactNode }) { // This is necessary to maintain the footer glued without overlapping any underneath component while scrolling.
  // The content below the footer gets messed up if we don't do this strangeness.
  return (
    <div className="min-h-fit">
      {props.children}
    </div>
  )
}

