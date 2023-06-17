import { useState } from 'react'

import { Text, Button } from '@chakra-ui/react'
import Skeleton from 'react-loading-skeleton'

interface ItemProps {
  title: string
}

export const Item = ({ title }: ItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = (status: boolean) => {
    setTimeout(() => {
      setIsHovered(status)
    }, 150)
  }

  return (
    <Button
      background="transparent"
      display="flex"
      flexDir="column"
      outline="none"
      _hover={{
        bg: 'transparent',
      }}
    >
      <Text
        display="flex"
        flexDirection="column"
        color="#fff"
        transition="all 0.3s"
        alignItems="center"
        justifyContent="center"
        height="50px"
        position="relative"
        fontSize="1.5rem"
        onMouseMove={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {title}
        <Skeleton
          width="100%"
          height="5px"
          baseColor={isHovered ? '#00875F80' : 'transparent'}
          highlightColor={isHovered ? '#2ecc71' : 'transparent'}
          style={{
            position: 'absolute',
            left: 0,
          }}
        />
      </Text>
    </Button>
  )
}
