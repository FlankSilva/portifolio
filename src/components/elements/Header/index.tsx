import { useMenu } from '@/hooks/MenuContext'
import { Box } from '../Box'
import { HamburgerIcon } from '../Icons/HamburgerIcon'
import { Logo } from '../Logo'
import { Menu } from './Menu'

export function Header() {
  const { handleSetOpenClose } = useMenu()

  return (
    <div className="justify-center bg-black-950 shadow-boxBorderMenu fixed w-full z-50">
      <Box>
        <div className="justify-between w-full py-5 px-4 lg:px-0">
          <Logo />
          <Menu />
          <a>
            <HamburgerIcon
              className="flex md:hidden"
              size={30}
              onClick={() => handleSetOpenClose()}
            />
          </a>
        </div>
      </Box>
    </div>
  )
}
