import Blog from '../models/blog'
import Author from '../models/author'

const jordy : Author = {
    name: "Jordy Guzak"
}

const blogs : Blog[] = [
    {
        author: jordy,
        title: 'Cats are funny',
        content: `# Cats are funny
## Exhibit A: 
![Stupid cat](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F2%2F9ebdz.jpg&f=1&nofb=1 "Stupid cat")
`
    },
    {
        author: jordy,
        title: 'Farewell, World!',
        content: `# Farewell, World!
It has been a pleasure.`
    },
]

export default blogs;