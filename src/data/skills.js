// Devicons CDN — we render all icons in monochrome via CSS filter
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    skills: [
      { name: 'HTML',       icon: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS',        icon: `${CDN}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: `${CDN}/javascript/javascript-original.svg` },
      { name: 'Python',     icon: `${CDN}/python/python-original.svg` },
      { name: 'SQL',        icon: `${CDN}/azuresqldatabase/azuresqldatabase-original.svg` },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Dev Tools',
    skills: [
      { name: 'React',   icon: `${CDN}/react/react-original.svg` },
      { name: 'Vite',    icon: `${CDN}/vitejs/vitejs-original.svg` },
      { name: 'Git',     icon: `${CDN}/git/git-original.svg` },
      { name: 'GitHub',  icon: `${CDN}/github/github-original.svg` },
      { name: 'VS Code', icon: `${CDN}/vscode/vscode-original.svg` },
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    skills: [
      { name: 'Excel',   icon: `${CDN}/microsoftexcel/microsoftexcel-original.svg` },
      { name: 'Jamovi',  icon: null },   // no devicon — rendered as text initial
      { name: 'MySQL',   icon: `${CDN}/mysql/mysql-original.svg` },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    skills: [
      { name: 'Figma',  icon: `${CDN}/figma/figma-original.svg` },
      { name: 'Canva',  icon: `${CDN}/canva/canva-original.svg` },
    ],
  },
]
