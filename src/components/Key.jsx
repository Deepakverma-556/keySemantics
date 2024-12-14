import React, { useState, useRef } from 'react'
import SubHeading from '../common/SubHeading'
import { KEY_ACCORDION_LIST, KEY_LIST } from '../utils/helper'
import { AccArrow } from '../utils/icons';

const AccordionItem = ({ handleToggle, active, obj,index }) => {
  const contentEl = useRef();
  const { title, firstDescription, secondDescription, thirdDescription, colorfulPainting, colorfulPaintingAlt, waterDropPainting, waterDropPaintingAlt } = obj;

  return (
    <div className=" overflow-hidden border-t border-b border-gray py-4 max-lg:max-w-[700px] mx-auto mt-4">
      <div role="button" aria-expanded={active === index} aria-controls={`content-${title}`}
        className={` flex items-center cursor-pointer justify-between ${active === title ? 'active' : ''}`}
        onClick={() => handleToggle(index)}>
        <p className="font-medium text-lg leading-7 text-blue">{title}</p>
        <div className={`transition-transform duration-500 ${active === index ? 'rotate-180' : 'rotate-0'}`}>
          <AccArrow />
        </div>
      </div>
      <div title={`content-${title}`} ref={contentEl} className={`rc-collapse ${active === index ? 'show' : ''}`} style={{
        height: active === index ? `${contentEl.current.scrollHeight}px` : '0px',
        transition: 'height 0.3s ease-out',
      }}
      >
        <div className="pt-4 pr-4">{firstDescription}</div>
        <div className='pr-4 pt-2 pb-4'>{secondDescription}</div>
        <div className='flex items-center gap-4'>
          <img src={colorfulPainting} alt={colorfulPaintingAlt} className='h-[150px] object-cover' />
          <img src={waterDropPainting} alt={waterDropPaintingAlt} className='h-[150px] object-cover' />
        </div>
        <div className='pr-4 pt-4'>{thirdDescription}</div>
      </div>
    </div>
  );
};

const Key = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive((prev) => (prev === index ? null : index));
  };
  return (
    <div className='pb-[148px] pt-5'>
      <div className='max-w-[1232px] mx-auto px-4'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-1/2 px-3'>
            <img src="/assets/images/webp/working-girl.webp" alt="working-girl" className='h-[337px] sticky top-0 object-cover rounded-lg' />
          </div>
          <div className='w-1/2 px-3'>
            <div className=''>
              <SubHeading text='Key Q&A' myClass='text-blue' />
              <div>
                {KEY_LIST.map((obj, i) => (
                  <ul key={i} className='pt-2'>
                    <li className='ml-6 list-disc'>{obj}</li>
                  </ul>
                ))}
              </div>
              <div>
                {
                  KEY_ACCORDION_LIST.map((obj, index) => (
                    <AccordionItem key={index} active={active} handleToggle={handleToggle} obj={obj} index={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Key