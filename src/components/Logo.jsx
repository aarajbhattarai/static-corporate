import dummyLogo from '../images/logos/withoutstroke.png';
import Image from 'next/image';

export function Logo(props) {
  return (
   
      <Image src={dummyLogo} width="109" alt ="Zen Career Hub" height="40" />

    
  );
}
