import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Chip from '@mui/material/Chip'

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
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ fontWeight: 'bold', fontSize: { xs: 32, md: 44 }, mb: 4 }}
        >
          Video Showreel
        </Typography>

        <Typography variant="h6" align="left" sx={{ mb: 4, fontWeight: 400, maxWidth: 640, mx: 'auto' }}>
          A quick run-through of my portfolio in the instructional content space, including interviews, explainers, and
          platform walkthroughs created for clients and internal teams.
        </Typography>

        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '56.25%',
            borderRadius: 2,
            boxShadow: 3,
            mb: 4,
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

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1.5,
            maxWidth: 600,
            mx: 'auto',
            mt: 2,
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
      </Container>
    </Box>
  )
}

export default VideoShowreel
