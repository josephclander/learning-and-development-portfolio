import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Course } from '@/interfaces/course'
import Link from '@mui/material/Link'

interface Props {
  item: Course
}

const CourseCardItem: FC<Props> = ({ item }) => {
  return (
    <Link underline="none" href={item.link} sx={{ height: '100%', display: 'block' }}>
      <Box sx={{ px: 1, py: 4, height: '100%' }}>
        <Box
          sx={{
            p: 2,
            backgroundColor: 'background.paper',
            borderRadius: 4,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: (theme) =>
              theme.transitions.create(['box-shadow', 'transform'], {
                duration: theme.transitions.duration.short,
              }),
            '&:hover': {
              boxShadow: 2,
              transform: 'translateY(-6px)',
            },
          }}
        >
          <Box
            sx={{
              lineHeight: 0,
              overflow: 'hidden',
              borderRadius: 3,
              mb: 2,
            }}
          >
            <Image src={item.cover} width={760} height={760} alt={'Project ' + item.id} />
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Typography component="h2" variant="h5" sx={{ mb: 2, fontSize: '1.2rem' }}>
              {item.title}
            </Typography>
            <Typography component="p" sx={{ fontSize: '1rem', color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

export default CourseCardItem
