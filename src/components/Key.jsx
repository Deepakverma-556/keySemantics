import React, { useState, useRef } from 'react'
import SubHeading from '../common/SubHeading'
import { KEY_ACCORDION_LIST, KEY_LIST } from '../utils/helper'
import { AccArrow } from '../utils/icons';
import CustomButton from '../common/CustomButton';

const AccordionItem = ({ handleToggle, active, obj, index }) => {
  const contentEl = useRef();
  const { title, firstDescription, secondDescription, thirdDescription, colorfulPainting, colorfulPaintingAlt, waterDropPainting, waterDropPaintingAlt } = obj;

  return (
    <div className=" overflow-hidden border-t border-b border-gray py-4 max-sm:py-3 max-lg:max-w-[700px] mx-auto ">
      <div role="button" aria-expanded={active === index} aria-controls={`content-${title}`}
        className={` flex items-center cursor-pointer justify-between ${active === title ? 'active' : ''}`}
        onClick={() => handleToggle(index)}>
        <p className="font-medium text-lg max-sm:text-base leading-7 text-blue">{title}</p>
        <div className={`transition-transform duration-500 ${active === index ? 'rotate-180' : 'rotate-0'}`}>
          <AccArrow myClass='max-sm:h-[10px] h-[13px]' />
        </div>
      </div>
      <div title={`content-${title}`} ref={contentEl} className={`rc-collapse ${active === index ? 'show' : ''}`} style={{
        height: active === index ? `${contentEl.current.scrollHeight}px` : '0px',
        transition: 'height 0.3s ease-out',
      }}
      >
        <div className="pt-4 max-sm:pt-2 pr-4">{firstDescription}</div>
        <div className='pr-4 pt-2 pb-4'>{secondDescription}</div>
        <div className='flex items-center gap-4'>
          <img src={colorfulPainting} alt={colorfulPaintingAlt} className='h-[150px] w-1/2 rounded-lg  object-cover max-lg:h-32 max-sm:h-[88px]' />
          <img src={waterDropPainting} alt={waterDropPaintingAlt} className='h-[150px] w-1/2 rounded-lg object-cover max-lg:h-32 max-sm:h-[88px]' />
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
    <div className='pb-[148px] max-lg:pb-20 max-md:pb-16 max-sm:pb-12 max bg-lightGray'>
      <div className='max-w-[1232px] mx-auto px-4 '>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-[51%] px-3 max-md:w-full'>
            <img src="/assets/images/webp/working-girl.webp" alt="working-girl" className='h-[337px] max-sm:h-60 sticky top-0 object-cover rounded-lg max-md:mx-auto' />
          </div>
          <div className='w-[49%] px-3 max-md:w-full max-md:pt-6'>
            <SubHeading text='Key Q&A' myClass='text-blue max-md:text-center ' />
            <div className='pb-4'>
              {KEY_LIST.map((obj, i) => (
                <ul key={i} className='pt-2 max-md:pt-2'>
                  <li className='ml-6 list-disc'>{obj}</li>
                </ul>
              ))}
            </div>
            {
              KEY_ACCORDION_LIST.map((obj, index) => (
                <AccordionItem key={index} active={active} handleToggle={handleToggle} obj={obj} index={index} />
              ))}
            <CustomButton text='Get a demo' myClass='text-sm py-3 px-4 border border-blue text-blue hover:text-white after:bg-blue mt-6 max-sm:mt-5 max-md:mx-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Key