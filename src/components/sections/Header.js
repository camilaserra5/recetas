import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import {FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa';
import Logo from "../ui/Logo";
import SocialButton from "../ui/SocialButton";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width={'100%'} zIndex={1000} position="relative" paddingTop="0px">
      <Flex
        opacity="0.60"
        bg={useColorModeValue('black', 'gray.800')}
        color={useColorModeValue('white', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        paddingTop="0px"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} >
          <Logo float="left" />
          <Flex display={{ base: 'none', md: 'flex' }} ml={10} justify={[{ base: 'right', md: 'center' }]} >
            <DesktopNav />
          </Flex>
        </Flex>
        <Box direction={'row'} spacing={2} float="right">
          <SocialButton label={'Twitter'} href={'https://twitter.com/lauratmares'}>
            <FaTwitter size={50} />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://linkedin.com/in/lauratmares/'}>
            <FaLinkedin size={50} />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://instagram.com/lauratmares'}>
            <FaInstagram size={50} />
          </SocialButton>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity opacity="0.60">
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'gray.200');
  const linkHoverColor = useColorModeValue('white', 'white');
  const popoverContentBgColor = useColorModeValue('black', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} >
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                state={{ category: navItem.label }}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('black', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      opacity="0.60 !important"
      zIndex={1000}
      position="absolute"
      width={'100%'}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('white', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            color="white"
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href} color="white">
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Recetas',
    children: [
      {
        label: 'Meal Prep',
        href: '/category/feo',
      },
      {
        label: 'Sopas',
        href: '#',
      },
      {
        label: 'Ensaladas',
        href: '#',
      },
    ],
  },
];
