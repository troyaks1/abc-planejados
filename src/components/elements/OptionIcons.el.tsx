import getOptionIcons from '@/utils/getOptionIcons';
import { Modal } from '@/interfaces/frontend/Modal';

export default function OptionIcons({ ...props }: { onClick: (typeChosen: Modal.Content['type']) => void }) {
  return (
    <>
      {
        getOptionIcons().map((icon, index) => {
          return (
            <div key={index} className={`flex flex-col items-center ${icon.cursor}`} onClick={() => props.onClick(icon.type)}>
              <div>
                <icon.image size={icon.size} />
              </div>
              <div className='text-xs'>
                {icon.name_pt}
              </div>
            </div>
          )
        })
      }
    </>
  )
}