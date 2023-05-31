import { ReactNode } from "react";
import Header from '@/components/Header.cmp';
import Footer from '@/components/Footer.cmp';
import Color from '@/interfaces/frontend/Color';
import colors from "@/utils/colors";

interface Props {
  children: ReactNode
}

export default function MainFrame(props: Props): JSX.Element {

  const color = colors('Day');

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
    <div className={`${props.color.primary.bg} flex flex-col min-h-screen w-full`}>
      {props.children}
    </div>
  )
}

