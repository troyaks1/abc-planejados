import { TbLoader3 } from 'react-icons/tb'

export default function Loading(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <TbLoader3 className="text-white text-6xl animate-spin" />
    </div>
  )
}