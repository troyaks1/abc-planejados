import { ReactNode } from "react";
import Header from '@/components/mainFrame/Header.cmp';
import Footer from '@/components/mainFrame/Footer.cmp';
import Color from '@/interfaces/frontend/Color';
import colors from "@/utils/colors";

interface Props {
  children: ReactNode
}

export default function MainFrame(props: Props): JSX.Element {

  const color = colors('Day'); // TODO: Add day/nigh theme and create button to handle it changing.

  return (
    <BackGround color={color}>
      <Header color={color} />
      {props.children}
      <Footer color={color} />
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

