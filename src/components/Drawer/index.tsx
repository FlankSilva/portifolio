import { Box, Flex, useMediaQuery } from '@chakra-ui/react'
import {
  House,
  AddressBook,
  PencilLine,
  GraduationCap,
  UserList,
} from 'phosphor-react'

import { useMenuMobile } from '@/hooks/MenuMobileContext'
import { useEffect, useState } from 'react'

interface DrawerProps {
  scrollToDiv: (id: string) => void
}

export const Drawer = ({ scrollToDiv }: DrawerProps) => {
  const { isOpen } = useMenuMobile()

  const [leftElement, setLeftElement] = useState('0px')

  const [isLargerThan792] = useMediaQuery('(min-width: 792px)', {
    ssr: true,
    fallback: false,
  })

  useEffect(() => {
    if (isOpen) {
      setLeftElement('55px')
    } else {
      setLeftElement('0px')
    }
  }, [isOpen])

  return (
    <Flex
      display={isLargerThan792 ? 'none' : 'flex'}
      position={'fixed'}
      bg={'rgba(255, 255, 255, 0.2)'}
      top={'30%'}
      left={`calc(100% - ${leftElement})`}
      flexDir={'column'}
      align={'center'}
      gap={'25px'}
      p={'20px 15px'}
      transition="all 0.4s"
      zIndex={'999'}
    >
      <Box as={'a'} onClick={() => scrollToDiv('home-mobile')}>
        <House size={25} />
      </Box>
      <Box as={'a'} onClick={() => scrollToDiv('about')}>
        <UserList id="about" size={25} />
      </Box>
      <Box as={'a'} onClick={() => scrollToDiv('skills')}>
        <GraduationCap id="skills" size={25} />
      </Box>
      <Box as={'a'} onClick={() => scrollToDiv('projects')}>
        <PencilLine id="projects" size={25} />
      </Box>
      <Box as={'a'} onClick={() => scrollToDiv('contact')}>
        <AddressBook id="contact" size={25} />
      </Box>
    </Flex>
  )
}
