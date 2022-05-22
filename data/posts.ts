import Post from '../models/post'
import Author from '../models/author'

const jordy : Author = {
    name: "Jordy Guzak"
}

const posts : Post[] = [
    {
        id: '1',
        author: jordy,
        createdAt: new Date(2022, 4, 12),
        modifiedAt: new Date(2022, 4, 12),
        title: 'Cats are funny',
        content: `# Cats are funny
## Exhibit A: 
![Stupid cat](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F2%2F9ebdz.jpg&f=1&nofb=1 "Stupid cat")
`, 
        likes: 1098,
        comments: 2034,
        shared: 22
    },
    {
        id: '2',
        author: jordy,
        createdAt: new Date(2022, 4, 22),
        modifiedAt: new Date(2022, 4, 23),
        title: 'Hello, World!',
        content: `Hello there!`, 
        likes: 203,
        comments: 2034,
        shared: 33,
    },
    {
        id: '3',
        author: jordy,
        createdAt: new Date(2022, 4, 21),
        modifiedAt: new Date(2022, 4, 21),
        title: 'Know your audience',
        content: `Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look`, 
        likes: 203,
        comments: 2034,
        shared: 33,
    },
    {
        id: '4',
        author: jordy,
        createdAt: new Date(2022, 4, 21),
        modifiedAt: new Date(2022, 4, 21),
        title: 'Hang onto your memories',
        content: `Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.`, 
        likes: 203,
        comments: 2034,
        shared: 33,
    },
    {
        id: '5',
        author: jordy,
        createdAt: new Date(2022, 4, 12),
        modifiedAt: new Date(2022, 4, 12),
        title: 'Cats are funny',
        content: `# Cats are funny
## Exhibit A: 
![Stupid cat](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F2%2F9ebdz.jpg&f=1&nofb=1 "Stupid cat")
`, 
        likes: 1098,
        comments: 2034,
        shared: 22
    },
    {
        id: '6',
        author: jordy,
        createdAt: new Date(2022, 4, 22),
        modifiedAt: new Date(2022, 4, 23),
        title: 'Hello, World!',
        content: `Hello there!`, 
        likes: 203,
        comments: 2034,
        shared: 33,
    },
    {
        id: '7',
        author: jordy,
        createdAt: new Date(2022, 4, 21),
        modifiedAt: new Date(2022, 4, 21),
        title: 'Know your audience',
        content: `Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look`, 
        likes: 203,
        comments: 2034,
        shared: 33,
    },
    {
        id: '8',
        author: jordy,
        createdAt: new Date(2022, 4, 21),
        modifiedAt: new Date(2022, 4, 21),
        title: 'Hang onto your memories',
        content: `Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.`, 
        likes: 203,
        comments: 2034,
        shared: 33,
    }
        
]

export default posts;