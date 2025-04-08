import React from 'react'
import SchoolIcon from '@mui/icons-material/School'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import SettingsIcon from '@mui/icons-material/Settings'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

export const data = [
  {
    title: 'Instructional Design',
    description: 'Crafted self-paced learning resources including LMS-based assessments and interactive tutorials for diverse audiences.',
    icon: <SchoolIcon />,
  },
  {
    title: 'Training Video Production',
    description: 'Produced over 50 instructional videos and onboarding guides, helping users adopt new systems and workflows.',
    icon: <VideoLibraryIcon />,
  },
  {
    title: 'Learning Platform Management',
    description: 'Managed platforms like Moodle and React-based hubs to streamline learner access, track progress, and improve engagement.',
    icon: <SettingsIcon />,
  },
  {
    title: 'Tech Support & Enablement',
    description: 'Solved tech issues and supported clients with APIs, documentation, clear communication, and tailored training.',
    icon: <SupportAgentIcon />,
  },
]

export default data
