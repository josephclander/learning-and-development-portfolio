import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const pageMenu = headerNavigations

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Box
      component={ScrollLink}
      to={path}
      spy={true}
      smooth={true}
      duration={350}
      sx={{
        display: 'block',
        mb: 1,
        color: 'primary.contrastText',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'color 0.2s ease-in-out',
        '&:hover': {
          color: 'secondary.main',
        },
      }}
    >
      {label}
    </Box>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
