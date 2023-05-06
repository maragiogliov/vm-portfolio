import './Hero.css';
import Block1 from '../Block1/Block1'
import Header from '../Header/Header'

import Block3 from '../Block3/Block3';
import Block5 from '../Block5/Block5';
import BlockIGP from '../BlockIGP/BlockIGP'
import Animation2 from '../Animation2/Animation2';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },

]

export default function Example() {

  return (<>


        <Header/>
        <Block1/>



        <Block5/>
        <Block3 />
        <Animation2/>
        <BlockIGP/>



  </>

      

  )
}
