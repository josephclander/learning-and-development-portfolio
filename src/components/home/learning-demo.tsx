import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import InsightsIcon from '@mui/icons-material/Insights'
import MapIcon from '@mui/icons-material/Map'
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'
import BugReportIcon from '@mui/icons-material/BugReport'

const data = [
  {
    title: 'Training Analysis',
    description:
      'I started by identifying what users were struggling with, such as poor lighting, camera angles, and distracting backgrounds then set clear goals for what the course should help them improve.',
    icon: <InsightsIcon />,
  },
  {
    title: 'Action Mapping',
    description:
      'I broke down the key behaviours learners would need to succeed and made sure each step in the module supported them doing those things, not just reading about them.',
    icon: <MapIcon />,
  },
  {
    title: 'Storyboard',
    description:
      'Before building, I sketched out a visual plan to keep the content clear and focused. Each screen had a purpose and moved the learner forward.',
    icon: <CollectionsBookmarkIcon />,
  },
  {
    title: 'Beta Testing & Iteration',
    description:
      "I shared an early version with a small group, got feedback on what worked and what didn't, and made changes, especially around clarity and visual framing.",
    icon: <BugReportIcon />,
  },
]

const LearningDemo: React.FC = () => {
  return (
    <Box
      id="learning-demo"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}
        >
          Learning Demo
        </Typography>

        <Box sx={{ maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h6" align="left" sx={{ mb: 4, fontWeight: 400 }}>
            An example self-paced learning module I produced to help remote workers feel confident on camera. All part
            of my work to support my clients to be better versions of themselves.
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '56.25%',
            borderRadius: 2,
            boxShadow: 3,
            mb: 6,
          }}
        >
          <iframe
            title="Learning Demo"
            src="https://iseazy.com/dl/cb4f38d4cc0b4c55aaf90adc2792c1d9"
            allowFullScreen
            loading="lazy"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          />
        </Box>

        <Typography
          component="h2"
          align="center"
          sx={{
            fontSize: { xs: 32, md: 44 },
            fontWeight: 'bold',
            mb: { xs: 8, md: 10 }, // more margin below
            lineHeight: 1.2,
          }}
        >
          How It Was{' '}
          <Typography
            component="mark"
            sx={{
              position: 'relative',
              color: 'common.white',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              backgroundColor: 'unset',
            }}
          >
            Built
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 28, md: 40 },
                left: '50%',
                transform: 'translateX(-50%)',
                '& img': {
                  width: { xs: 120, md: 160 },
                  height: 'auto',
                },
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/headline-curve.svg" alt="Underline decoration" />
            </Box>
          </Typography>
        </Typography>

        <Grid container spacing={4}>
          {data.map(({ title, description, icon }, index) => (
            <Grid key={String(index)} item xs={12} sm={6}>
              <Box
                sx={{
                  px: 3,
                  py: 4,
                  borderRadius: 3,
                  boxShadow: 2,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  backgroundColor: 'background.paper',
                  color: 'text.primary',
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    backgroundColor: 'secondary.main',
                    borderRadius: '50%',
                    height: 48,
                    width: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'primary.contrastText',
                  }}
                >
                  {icon}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default LearningDemo
