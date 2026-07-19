// Add your projects here as you build them. Example structure:
//
// {
//   id: 1,
//   title: 'Project Name',
//   description: 'Short description of what it does and what you learned.',
//   image: '/images/projects/your-image.jpg',
//   technologies: ['React', 'SQL'],
//   githubUrl: 'https://github.com/yourusername/repo',
//   liveUrl: 'https://your-live-demo.com',
//   status: 'Completed', // or 'In Progress' or 'Coming Soon'
// },

export const projects = []

export const allTechnologies = [...new Set(projects.flatMap((p) => p.technologies))]

export const projectStatuses = ['All', 'Completed', 'In Progress', 'Coming Soon']