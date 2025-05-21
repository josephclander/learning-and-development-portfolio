import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'

const categories = [
  'Interviews',
  'Social Explainers',
  'SME Tutorials',
  'Video Openers',
  'Longform Tutorials',
  'Product Presentations',
]

const VideoShowreel: React.FC = () => {
  return (
    <Box id="video-showreel" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'stretch' },
          }}
        >
          <Grid item xs={12} md={7}>
            <Box>
              <Typography
                variant="h2"
                component="h2"
                align="left"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: 32, md: 48 },
                  lineHeight: 1.3,
                  mb: { xs: 5, md: 7 },
                }}
              >
                Showreel: 6 Video Types{' '}
                <Box component="span" display="block">
                  to{' '}
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Boost Learning
                    <Box
                      sx={{
                        position: 'absolute',
                        top: { xs: 28, md: 36 },
                        left: 0,
                        transform: 'none',
                        '& img': {
                          width: { xs: 140, md: 180 },
                          height: 'auto',
                        },
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/headline-curve.svg" alt="Underline decoration" />
                    </Box>
                  </Typography>
                </Box>
              </Typography>

              <Typography
                variant="h5"
                align="left"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  maxWidth: 640,
                  mb: 0,
                }}
              >
                A 40-second overview of the kinds of educational content I create, including interviews, explainers, and
                platform walkthroughs created for clients and internal teams.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', md: 'flex-end' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                gap: 1.5,
                maxWidth: { xs: '100%', md: 480 },
                mt: { xs: 4, md: 0 },
              }}
            >
              {categories.map((label, index) => (
                <Chip
                  key={index}
                  label={label}
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    px: 2.5,
                    py: 1,
                    borderRadius: '999px',
                    fontSize: 16,
                    borderWidth: 2,
                    borderStyle: 'solid',
                  }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '56.25%',
            borderRadius: 2,
            boxShadow: 3,
            mt: 6,
          }}
        >
          <iframe
            title="Video Showreel"
            src="https://www.youtube.com/embed/-Z839LPJv0k"
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
      </Container>
    </Box>
  )
}

export default VideoShowreel
