import Header from '../header'
import Component1 from './component-1'
import Menu from './component-2'
import Component3 from './component-3'
import Component4 from './component-4'
import Component5 from './component-5'
import homePageImage from '../../assets/package-lock.jpg'

export default function Homepage() {
  return (
    <div className='mb-5'>
      <Header
        title="Welcome to the Boondocks Grill"
        content="Join us for a warm and inviting dining experience, where the food
            and memories are always exceptional."
        imgSrc={homePageImage}
      />
      <Component1 />
      <Menu />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  )
}
