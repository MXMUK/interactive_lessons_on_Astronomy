import DirectIcon from '@/public/assets/icons/svg/DirectIcon';
import HomeIcon from '@/public/assets/icons/svg/HomeIcon';
import InterestingIcon from '@/public/assets/icons/svg/InterestingIcon';
import NewPost from '@/public/assets/icons/svg/NewPost';
import NotificationsIcon from '@/public/assets/icons/svg/NotificationsIcon';
import ReelsIcon from '@/public/assets/icons/svg/ReelsIcon';
import Search from '@/public/assets/icons/svg/SearchIcon';
import { BookCheck, GraduationCap, Heart, Info, MessageSquarePlus, Settings, Shield, Users } from 'lucide-react';

const SidebarComponents = [
  {
    img: <GraduationCap />,
    label: 'Study',
    href: '/study'
  },
  {
    img: <Users />,
    label: 'Students',
    href: '/students'
  },
  {
    img: <MessageSquarePlus />,
    label: 'Create lesson',
    href: '/create_lesson'
  },
  {
    img: <BookCheck />,
    label: 'Create quiz',
    href: '/create_quiz'
  },
  {
    img: <Shield />,
    label: 'Privacy Policy',
    href: '/policy'
  },
  {
    img: <Info />,
    label: 'Terms of Use',
    href: '/terms_of_use'
  },
  {
    img: <Heart width={24} />,
    label: 'Contact us',
    href: '/contact_us'
  },
  {
    img: <Settings />,
    label: 'Settings',
    href: '/settings'
  },
];

export default SidebarComponents;
