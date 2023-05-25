import ArcadeIcon from '../assets/images/icon-arcade.svg';
import AdvancedIcon from '../assets/images/icon-advanced.svg';
import ProIcon from '../assets/images/icon-pro.svg';

const products = {
  plans: [
  {
    name: 'arcade',
    price: {monthly: 9, yearly: 90},
    icon: ArcadeIcon
  },
  {
    name: 'advanced',
    price: {monthly: 12, yearly: 120},
    icon: AdvancedIcon,
  },
  {
    name: 'pro',
    price: {monthly: 15, yearly: 150},
    icon: ProIcon,
  }
  ],
  addOns: [
      {
        id: 'onlineService',
        name: 'Online service',
        desc: 'Access to multiplayer games',
        price: 1,
      },
      {
        id: 'largerStorage',
        name: 'Larger storage',
        desc: 'Extra 1TB of cloud save',
        price: 2,
      },
      {
        id: 'customizableProfile',
        name: 'Customizable Profile',
        desc: 'Custom theme on your profile',
        price: 2,
      },
  ]
}
export default products;