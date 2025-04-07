import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/react-ui-learning-hub.jpg',
    title: 'React UI Learning Hub',
    description: 'Platform built to teach technical content with interactivity and video tutorials.',
    link: 'https://react-ui-learning-hub.vercel.app/'
  },
  {
    id: 2,
    cover: '/images/courses/learn-english-with-guy.jpg',
    title: 'Learn English with Guy',
    description: 'An education platform for an online English tutor linking their video and written content.',
    link: 'https://english-with-guy.vercel.app/'
  },
  {
    id: 3,
    cover: '/images/courses/notion-video-explainer.jpg',
    title: 'YouTube Video Explainers',
    description: 'Explanation video that breaks down how to use Notion effectively.',
    link: 'https://youtu.be/p0W9PhbIxWc'
  },
  {
    id: 4,
    cover: '/images/courses/women-in-agile-youtube.jpg',
    title: 'Women in Agile YouTube',
    description: 'Community work producing 50+ videos to celebrate & promote women in software.',
    link: 'https://www.youtube.com/channel/UCE74E5bs8i9We-HhlUWlfpA'
  },
  {
    id: 5,
    cover: '/images/courses/software-product-walk-through.jpg',
    title: 'Product Walk Through',
    description: 'Animated walk-through of a software product highlighting key features.',
    link: 'https://youtu.be/aNMJOOEB6TA'
  },
]
