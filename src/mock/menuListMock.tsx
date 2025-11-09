import {
  House,
  AddressBook,
  PencilLine,
  GraduationCap,
  UserList,
} from 'phosphor-react'

export const listmenu = [
  {
    title: 'Home',
    id: 'home',
    href: undefined,
    icon: <House size={20} />,
  },
  {
    title: 'Quem sou',
    id: 'about',
    href: '/sobre',
    icon: <UserList size={20} />,
  },
  {
    title: 'Habilidades',
    id: 'skills',
    href: undefined,
    icon: <GraduationCap size={20} />,
  },
  {
    title: 'Projeto',
    id: 'project',
    href: undefined,
    icon: <PencilLine size={20} />,
  },
  {
    title: 'Contato',
    id: 'Contact',
    href: undefined,
    icon: <AddressBook size={20} />,
  },
]
