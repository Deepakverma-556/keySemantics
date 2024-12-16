import React,{useState} from 'react'
import SubHeading from '../common/SubHeading'
import Description from '../common/Description'
import CustomInput from '../common/CustomInput'
import CustomButton from '../common/CustomButton'

const KeySemanticsForm = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    name: "",
    company: "",
    phone:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    setFormValue({
      email: "",
      name: "",
      company: "",
      phone: "",
    });
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValue({ ...formValue, [id]: value });
  };
  
  return (
    <div className='bg-blue '>
      <div className='max-w-[1232px] mx-auto px-4 relative py-24 max-lg:py-20 max-md:py-16 max-sm:py-12 z-10'>
        <img src="/assets/images/webp/open-curly-braces.webp" alt="open-curly-braces" className='absolute h-[411px] max-lg:h-80 max-md:h-60 max-sm:h-40 top-0 left-0 -z-0' />
        <img src="/assets/images/webp/close-curly-braces.webp" alt="close-curly-braces" className='absolute h-[411px] max-lg:h-80 max-md:h-60 max-sm:h-40 bottom-0 right-0 -z-0' />
        <SubHeading text='How does KeySemantics work' myClass='text-white text-center relative z-10' />
        <Description text='Request a demo for your team and let us show you how KeySemantics can help your company' myClass='text-white text-center pt-2 relative z-10' />
        <form onSubmit={handleSubmit} action="" className='flex flex-col pt-16 max-lg:pt-12 max-sm:pt-8 '>
          <CustomInput customOnChange={handleChange} customValue={formValue.name} customId='name' myType='text' customPlaceholder='Name' myRequired='required' />
          <CustomInput customOnChange={handleChange} customValue={formValue.email} customId='email' myType='email' customPlaceholder='Email' myRequired='required' />
          <CustomInput customOnChange={handleChange} customValue={formValue.company} customId='company' myType='text' customPlaceholder='Company' myRequired='required' />
          <CustomInput customOnChange={handleChange} customValue={formValue.phone} customId='phone' myType='number' customPlaceholder='Phone (optional)' minimum="min=0" myClass='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' />
          <Description myClass='text-purple text-center pt-3 relative z-10 text-[10px] max-sm:text-[10px] leading-[14px]' text='By submitting my contact information I agree to the KeySemantics Privacy Policy' />
          <CustomButton text='Request a demo' myClass='py-3 bg-sky px-4 text-white hover:text-black after:bg-white mt-6 max-sm:mt-5 mx-auto' />
        </form>
      </div>
    </div>
  )
}

export default KeySemanticsForm