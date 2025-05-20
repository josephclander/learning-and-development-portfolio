import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const VideoShowreel: React.FC = () => {
  return (
    <Box id="video-showreel" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}
        >
          Video Showreel
        </Typography>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            paddingTop: '56.25%', // 16:9 Aspect Ratio
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/-Z839LPJv0k"
            title="Showreel Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
          ></iframe>
        </Box>
      </Container>
    </Box>
  )
}

export default VideoShowreel