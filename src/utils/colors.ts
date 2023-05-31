import Color from "@/interfaces/frontend/Color";
type Theme = 'Day' | 'Night';

export default function (theme: Theme) {
  if (theme === 'Day') {
    return colorDay
  } else if (theme === 'Night') {
    return colorNight
  } else {
    throw new Error(`Color type not allowed or undefined.`)
  }
}

const colorDay: Color = {
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

const colorNight: Color = {
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