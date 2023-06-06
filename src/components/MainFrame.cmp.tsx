import { ReactNode, useContext } from "react";
import Header from '@/components/mainFrame/Header.cmp';
import Footer from '@/components/mainFrame/Footer.cmp';
import Color from '@/interfaces/frontend/Color';
import getColors from "@/utils/getColors";
import { LoginContext } from '@/context/Login.context';
import { ModalContextProvider } from "@/context/MidModal.context";

interface Props {
  children: ReactNode
}

export default function MainFrame({ ...props }: Props): JSX.Element {

  const color = getColors('Day'); // TODO: Add day/nigh theme and create button to handle it changing.
  const auth = useContext(LoginContext);
  return (
    <BackGround color={color}>
      <ModalContextProvider>
        <Header style={{ color: color }} action={{ auth: auth }} />
        {props.children}
        <Footer style={{ color: color }} action={{ auth: auth }} />
      </ModalContextProvider>
    </BackGround>
  )
}

interface BackGroundProps {
  children: ReactNode
  color: Color
}

function BackGround(props: BackGroundProps) {
  return (
    <div className={`flex flex-col h-screen w-full ${props.color.primary.bg}`}>
      {props.children}
    </div>
  )
}

