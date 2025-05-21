import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { useTheme } from '@mui/material/styles'

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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      id="learning-demo"
      sx={{
        py: { xs: 10, md: 14 },
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="lg">
        {/* Title and Intro */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h2"
              align="left"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: 32, md: 48 },
                lineHeight: 1.3,
                mb: { xs: 3, md: 4 },
              }}
            >
              eLearning Authoring:{' '}
              <Box component="span" display="block" sx={{ color: 'secondary.main' }}>
                Camera Confidence in 3 Minutes
              </Box>
            </Typography>

            <Typography
              variant="h6"
              align="left"
              sx={{
                fontWeight: 400,
                color: 'primary.contrastText',
                maxWidth: 640,
                mb: 4,
              }}
            >
              An example self-paced learning module I produced to help remote workers feel confident on camera. All part
              of my work to support my clients to be better versions of themselves.
            </Typography>
          </Grid>
        </Grid>

        {/* Embedded Content */}
        {isMobile ? (
          <Box sx={{ textAlign: 'left', mb: 6 }}>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<OpenInNewIcon />}
              href="https://iseazy.com/dl/cb4f38d4cc0b4c55aaf90adc2792c1d9"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mb: 1 }}
            >
              Open Module in Fullscreen
            </Button>
            <Typography variant="body2" sx={{ color: 'primary.contrastText', opacity: 0.8 }}>
              Best experienced fullscreen on mobile devices.
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              borderRadius: 2,
              boxShadow: 3,
              overflow: 'hidden',
              mb: 6,
            }}
          >
            <Box
              sx={{
                paddingTop: '56.25%',
                position: 'relative',
                width: '100%',
              }}
            >
              <Box
                component="iframe"
                src="https://iseazy.com/dl/cb4f38d4cc0b4c55aaf90adc2792c1d9"
                title="Learning Demo"
                allowFullScreen
                loading="lazy"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                }}
              />
            </Box>
          </Box>
        )}

        {/* How I Built It Title */}
        <Grid container spacing={7} alignItems="center" sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h2"
              component="h2"
              align="left"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: 32, md: 44 },
                mb: { xs: 2, md: 4 },
                lineHeight: 1.3,
              }}
            >
              Design Process
            </Typography>
          </Grid>

          {/* Cards */}
          <Grid item xs={12} md={9}>
            <Box>
              <Grid container spacing={2}>
                {data.map(({ title, description, icon }, index) => (
                  <Grid key={String(index)} item xs={12} sm={6}>
                    <Box
                      sx={{
                        px: 2,
                        py: 1.5,
                        boxShadow: 1,
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'flex-start',
                        backgroundColor: 'background.paper',
                        color: 'text.primary',
                        height: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          mr: 2,
                          backgroundColor: 'secondary.main',
                          borderRadius: '50%',
                          height: 40,
                          width: 40,
                          minWidth: 40,
                          display: 'flex',
                          alignSelf: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.contrastText',
                          '& svg': {
                            fontSize: 22,
                          },
                        }}
                      >
                        {icon}
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, fontWeight: 'bold' }}>
                          {title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.4 }}>
                          {description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default LearningDemo
