import Color from "./Color";

export default interface Button {
  color: Color
  text: string
  title: string
  onClick: () => void
  style: {
    height: 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
    width: 10 | 14 | 20 | 32 | 40 | 52 | 60 | 72 | 80 | 96 | 'screen' | 'full'
    padding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    text?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  }
}