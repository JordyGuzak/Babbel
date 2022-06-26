import Post from '../models/post'
import Author from '../models/author'

const jordy: Author = {
    name: "Jordy Guzak"
}

const posts: Post[] = [
    {
        id: '1',
        author: jordy,
        created_at: new Date(2022, 4, 12),
        modified_at: new Date(2022, 4, 12),
        title: 'Cats are funny',
        content: `# Cats are funny
        
## Exhibit A: 
![Stupid cat](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F2%2F9ebdz.jpg&f=1&nofb=1 "Stupid cat")

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Mauris augue neque gravida in fermentum et. Mi sit amet mauris commodo quis imperdiet. Sed cras ornare arcu dui vivamus arcu. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nec dui nunc mattis enim ut. Quisque non tellus orci ac. Quam elementum pulvinar etiam non quam lacus. Elementum curabitur vitae nunc sed velit dignissim sodales. Velit laoreet id donec ultrices tincidunt arcu. Ac felis donec et odio pellentesque diam volutpat commodo. Velit aliquet sagittis id consectetur purus. Sed libero enim sed faucibus turpis in eu.

Porttitor leo a diam sollicitudin tempor. Ut ornare lectus sit amet est placerat in. Urna condimentum mattis pellentesque id nibh. Sit amet consectetur adipiscing elit duis. Vel quam elementum pulvinar etiam non quam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Posuere ac ut consequat semper viverra. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Commodo viverra maecenas accumsan lacus. Risus nullam eget felis eget nunc lobortis mattis aliquam. Nibh sit amet commodo nulla facilisi. Sed blandit libero volutpat sed cras ornare arcu dui. Tellus id interdum velit laoreet id donec. Ut sem nulla pharetra diam sit amet nisl.

Pharetra vel turpis nunc eget lorem dolor sed. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Nullam vehicula ipsum a arcu cursus. Vel eros donec ac odio tempor orci. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eget velit aliquet sagittis id. Aenean vel elit scelerisque mauris. Vitae tortor condimentum lacinia quis vel. Ipsum a arcu cursus vitae congue mauris. Nisl purus in mollis nunc sed id semper risus. Ut eu sem integer vitae justo eget magna. Eget nunc lobortis mattis aliquam faucibus purus. Ullamcorper morbi tincidunt ornare massa eget. Lectus arcu bibendum at varius vel pharetra. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. In iaculis nunc sed augue lacus viverra vitae congue. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Orci dapibus ultrices in iaculis. Posuere ac ut consequat semper viverra nam libero.

Velit euismod in pellentesque massa placerat. Suscipit tellus mauris a diam maecenas sed. Quis hendrerit dolor magna eget est lorem ipsum dolor. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim sodales ut eu sem integer vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elit at imperdiet dui accumsan sit amet. Vitae aliquet nec ullamcorper sit amet risus nullam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Et netus et malesuada fames ac. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.

Massa sed elementum tempus egestas sed sed. Viverra vitae congue eu consequat ac felis donec et odio. Consequat semper viverra nam libero justo. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Proin libero nunc consequat interdum varius. Laoreet id donec ultrices tincidunt arcu non sodales. Lacus sed turpis tincidunt id. Pretium vulputate sapien nec sagittis aliquam. Massa id neque aliquam vestibulum morbi blandit cursus risus. Proin libero nunc consequat interdum varius sit amet mattis. Vitae purus faucibus ornare suspendisse sed nisi. Ac tortor vitae purus faucibus ornare suspendisse sed. Iaculis nunc sed augue lacus viverra. In fermentum et sollicitudin ac orci. Faucibus in ornare quam viverra orci. At elementum eu facilisis sed.
`,
        likes_count: 1098,
        comments_count: 2034,
        shared_count: 22
    },
    {
        id: '2',
        author: jordy,
        created_at: new Date(2022, 4, 22),
        modified_at: new Date(2022, 4, 23),
        title: 'Hello, World!',
        content: `# Hello, World!
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Mauris augue neque gravida in fermentum et. Mi sit amet mauris commodo quis imperdiet. Sed cras ornare arcu dui vivamus arcu. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nec dui nunc mattis enim ut. Quisque non tellus orci ac. Quam elementum pulvinar etiam non quam lacus. Elementum curabitur vitae nunc sed velit dignissim sodales. Velit laoreet id donec ultrices tincidunt arcu. Ac felis donec et odio pellentesque diam volutpat commodo. Velit aliquet sagittis id consectetur purus. Sed libero enim sed faucibus turpis in eu.

![Earth](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.whudat.de%2Fimages%2Fworld_maps_knowledge_fun_bb.jpg&f=1&nofb=1 "Earth")

Porttitor leo a diam sollicitudin tempor. Ut ornare lectus sit amet est placerat in. Urna condimentum mattis pellentesque id nibh. Sit amet consectetur adipiscing elit duis. Vel quam elementum pulvinar etiam non quam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Posuere ac ut consequat semper viverra. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Commodo viverra maecenas accumsan lacus. Risus nullam eget felis eget nunc lobortis mattis aliquam. Nibh sit amet commodo nulla facilisi. Sed blandit libero volutpat sed cras ornare arcu dui. Tellus id interdum velit laoreet id donec. Ut sem nulla pharetra diam sit amet nisl.
        
Pharetra vel turpis nunc eget lorem dolor sed. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Nullam vehicula ipsum a arcu cursus. Vel eros donec ac odio tempor orci. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eget velit aliquet sagittis id. Aenean vel elit scelerisque mauris. Vitae tortor condimentum lacinia quis vel. Ipsum a arcu cursus vitae congue mauris. Nisl purus in mollis nunc sed id semper risus. Ut eu sem integer vitae justo eget magna. Eget nunc lobortis mattis aliquam faucibus purus. Ullamcorper morbi tincidunt ornare massa eget. Lectus arcu bibendum at varius vel pharetra. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. In iaculis nunc sed augue lacus viverra vitae congue. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Orci dapibus ultrices in iaculis. Posuere ac ut consequat semper viverra nam libero.
        
Velit euismod in pellentesque massa placerat. Suscipit tellus mauris a diam maecenas sed. Quis hendrerit dolor magna eget est lorem ipsum dolor. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim sodales ut eu sem integer vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elit at imperdiet dui accumsan sit amet. Vitae aliquet nec ullamcorper sit amet risus nullam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Et netus et malesuada fames ac. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.
        
Massa sed elementum tempus egestas sed sed. Viverra vitae congue eu consequat ac felis donec et odio. Consequat semper viverra nam libero justo. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Proin libero nunc consequat interdum varius. Laoreet id donec ultrices tincidunt arcu non sodales. Lacus sed turpis tincidunt id. Pretium vulputate sapien nec sagittis aliquam. Massa id neque aliquam vestibulum morbi blandit cursus risus. Proin libero nunc consequat interdum varius sit amet mattis. Vitae purus faucibus ornare suspendisse sed nisi. Ac tortor vitae purus faucibus ornare suspendisse sed. Iaculis nunc sed augue lacus viverra. In fermentum et sollicitudin ac orci. Faucibus in ornare quam viverra orci. At elementum eu facilisis sed.`,
        likes_count: 203,
        comments_count: 2034,
        shared_count: 33,
    },
    {
        id: '3',
        author: jordy,
        created_at: new Date(2022, 4, 21),
        modified_at: new Date(2022, 4, 21),
        title: 'Know your audience',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Mauris augue neque gravida in fermentum et. Mi sit amet mauris commodo quis imperdiet. Sed cras ornare arcu dui vivamus arcu. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nec dui nunc mattis enim ut. Quisque non tellus orci ac. Quam elementum pulvinar etiam non quam lacus. Elementum curabitur vitae nunc sed velit dignissim sodales. Velit laoreet id donec ultrices tincidunt arcu. Ac felis donec et odio pellentesque diam volutpat commodo. Velit aliquet sagittis id consectetur purus. Sed libero enim sed faucibus turpis in eu.

        Porttitor leo a diam sollicitudin tempor. Ut ornare lectus sit amet est placerat in. Urna condimentum mattis pellentesque id nibh. Sit amet consectetur adipiscing elit duis. Vel quam elementum pulvinar etiam non quam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Posuere ac ut consequat semper viverra. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Commodo viverra maecenas accumsan lacus. Risus nullam eget felis eget nunc lobortis mattis aliquam. Nibh sit amet commodo nulla facilisi. Sed blandit libero volutpat sed cras ornare arcu dui. Tellus id interdum velit laoreet id donec. Ut sem nulla pharetra diam sit amet nisl.
        
        Pharetra vel turpis nunc eget lorem dolor sed. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Nullam vehicula ipsum a arcu cursus. Vel eros donec ac odio tempor orci. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eget velit aliquet sagittis id. Aenean vel elit scelerisque mauris. Vitae tortor condimentum lacinia quis vel. Ipsum a arcu cursus vitae congue mauris. Nisl purus in mollis nunc sed id semper risus. Ut eu sem integer vitae justo eget magna. Eget nunc lobortis mattis aliquam faucibus purus. Ullamcorper morbi tincidunt ornare massa eget. Lectus arcu bibendum at varius vel pharetra. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. In iaculis nunc sed augue lacus viverra vitae congue. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Orci dapibus ultrices in iaculis. Posuere ac ut consequat semper viverra nam libero.
        
        Velit euismod in pellentesque massa placerat. Suscipit tellus mauris a diam maecenas sed. Quis hendrerit dolor magna eget est lorem ipsum dolor. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim sodales ut eu sem integer vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elit at imperdiet dui accumsan sit amet. Vitae aliquet nec ullamcorper sit amet risus nullam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Et netus et malesuada fames ac. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.
        
        Massa sed elementum tempus egestas sed sed. Viverra vitae congue eu consequat ac felis donec et odio. Consequat semper viverra nam libero justo. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Proin libero nunc consequat interdum varius. Laoreet id donec ultrices tincidunt arcu non sodales. Lacus sed turpis tincidunt id. Pretium vulputate sapien nec sagittis aliquam. Massa id neque aliquam vestibulum morbi blandit cursus risus. Proin libero nunc consequat interdum varius sit amet mattis. Vitae purus faucibus ornare suspendisse sed nisi. Ac tortor vitae purus faucibus ornare suspendisse sed. Iaculis nunc sed augue lacus viverra. In fermentum et sollicitudin ac orci. Faucibus in ornare quam viverra orci. At elementum eu facilisis sed.`,
        likes_count: 203,
        comments_count: 2034,
        shared_count: 33,
    },
    {
        id: '4',
        author: jordy,
        created_at: new Date(2022, 4, 21),
        modified_at: new Date(2022, 4, 21),
        title: 'Hang onto your memories',
        content: `Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Mauris augue neque gravida in fermentum et. Mi sit amet mauris commodo quis imperdiet. Sed cras ornare arcu dui vivamus arcu. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nec dui nunc mattis enim ut. Quisque non tellus orci ac. Quam elementum pulvinar etiam non quam lacus. Elementum curabitur vitae nunc sed velit dignissim sodales. Velit laoreet id donec ultrices tincidunt arcu. Ac felis donec et odio pellentesque diam volutpat commodo. Velit aliquet sagittis id consectetur purus. Sed libero enim sed faucibus turpis in eu.

        Porttitor leo a diam sollicitudin tempor. Ut ornare lectus sit amet est placerat in. Urna condimentum mattis pellentesque id nibh. Sit amet consectetur adipiscing elit duis. Vel quam elementum pulvinar etiam non quam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Posuere ac ut consequat semper viverra. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Commodo viverra maecenas accumsan lacus. Risus nullam eget felis eget nunc lobortis mattis aliquam. Nibh sit amet commodo nulla facilisi. Sed blandit libero volutpat sed cras ornare arcu dui. Tellus id interdum velit laoreet id donec. Ut sem nulla pharetra diam sit amet nisl.
        
        Pharetra vel turpis nunc eget lorem dolor sed. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Nullam vehicula ipsum a arcu cursus. Vel eros donec ac odio tempor orci. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eget velit aliquet sagittis id. Aenean vel elit scelerisque mauris. Vitae tortor condimentum lacinia quis vel. Ipsum a arcu cursus vitae congue mauris. Nisl purus in mollis nunc sed id semper risus. Ut eu sem integer vitae justo eget magna. Eget nunc lobortis mattis aliquam faucibus purus. Ullamcorper morbi tincidunt ornare massa eget. Lectus arcu bibendum at varius vel pharetra. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. In iaculis nunc sed augue lacus viverra vitae congue. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Orci dapibus ultrices in iaculis. Posuere ac ut consequat semper viverra nam libero.
        
        Velit euismod in pellentesque massa placerat. Suscipit tellus mauris a diam maecenas sed. Quis hendrerit dolor magna eget est lorem ipsum dolor. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim sodales ut eu sem integer vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elit at imperdiet dui accumsan sit amet. Vitae aliquet nec ullamcorper sit amet risus nullam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Et netus et malesuada fames ac. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.
        
        Massa sed elementum tempus egestas sed sed. Viverra vitae congue eu consequat ac felis donec et odio. Consequat semper viverra nam libero justo. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Proin libero nunc consequat interdum varius. Laoreet id donec ultrices tincidunt arcu non sodales. Lacus sed turpis tincidunt id. Pretium vulputate sapien nec sagittis aliquam. Massa id neque aliquam vestibulum morbi blandit cursus risus. Proin libero nunc consequat interdum varius sit amet mattis. Vitae purus faucibus ornare suspendisse sed nisi. Ac tortor vitae purus faucibus ornare suspendisse sed. Iaculis nunc sed augue lacus viverra. In fermentum et sollicitudin ac orci. Faucibus in ornare quam viverra orci. At elementum eu facilisis sed.`,
        likes_count: 203,
        comments_count: 2034,
        shared_count: 33,
    },
    {
        id: '5',
        author: jordy,
        created_at: new Date(2022, 4, 12),
        modified_at: new Date(2022, 4, 12),
        title: 'Cats are funny',
        content: `# Cats are funny
## Exhibit A: 
![Stupid cat](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F2%2F9ebdz.jpg&f=1&nofb=1 "Stupid cat")

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Mauris augue neque gravida in fermentum et. Mi sit amet mauris commodo quis imperdiet. Sed cras ornare arcu dui vivamus arcu. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Nec dui nunc mattis enim ut. Quisque non tellus orci ac. Quam elementum pulvinar etiam non quam lacus. Elementum curabitur vitae nunc sed velit dignissim sodales. Velit laoreet id donec ultrices tincidunt arcu. Ac felis donec et odio pellentesque diam volutpat commodo. Velit aliquet sagittis id consectetur purus. Sed libero enim sed faucibus turpis in eu.

Porttitor leo a diam sollicitudin tempor. Ut ornare lectus sit amet est placerat in. Urna condimentum mattis pellentesque id nibh. Sit amet consectetur adipiscing elit duis. Vel quam elementum pulvinar etiam non quam. Vitae ultricies leo integer malesuada nunc vel risus commodo. Posuere ac ut consequat semper viverra. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Commodo viverra maecenas accumsan lacus. Risus nullam eget felis eget nunc lobortis mattis aliquam. Nibh sit amet commodo nulla facilisi. Sed blandit libero volutpat sed cras ornare arcu dui. Tellus id interdum velit laoreet id donec. Ut sem nulla pharetra diam sit amet nisl.

Pharetra vel turpis nunc eget lorem dolor sed. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Nullam vehicula ipsum a arcu cursus. Vel eros donec ac odio tempor orci. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eget velit aliquet sagittis id. Aenean vel elit scelerisque mauris. Vitae tortor condimentum lacinia quis vel. Ipsum a arcu cursus vitae congue mauris. Nisl purus in mollis nunc sed id semper risus. Ut eu sem integer vitae justo eget magna. Eget nunc lobortis mattis aliquam faucibus purus. Ullamcorper morbi tincidunt ornare massa eget. Lectus arcu bibendum at varius vel pharetra. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. In iaculis nunc sed augue lacus viverra vitae congue. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Orci dapibus ultrices in iaculis. Posuere ac ut consequat semper viverra nam libero.

Velit euismod in pellentesque massa placerat. Suscipit tellus mauris a diam maecenas sed. Quis hendrerit dolor magna eget est lorem ipsum dolor. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dignissim sodales ut eu sem integer vitae. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elit at imperdiet dui accumsan sit amet. Vitae aliquet nec ullamcorper sit amet risus nullam. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Et netus et malesuada fames ac. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.

Massa sed elementum tempus egestas sed sed. Viverra vitae congue eu consequat ac felis donec et odio. Consequat semper viverra nam libero justo. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Sit amet justo donec enim diam. Proin libero nunc consequat interdum varius. Laoreet id donec ultrices tincidunt arcu non sodales. Lacus sed turpis tincidunt id. Pretium vulputate sapien nec sagittis aliquam. Massa id neque aliquam vestibulum morbi blandit cursus risus. Proin libero nunc consequat interdum varius sit amet mattis. Vitae purus faucibus ornare suspendisse sed nisi. Ac tortor vitae purus faucibus ornare suspendisse sed. Iaculis nunc sed augue lacus viverra. In fermentum et sollicitudin ac orci. Faucibus in ornare quam viverra orci. At elementum eu facilisis sed.
`,
        likes_count: 1098,
        comments_count: 2034,
        shared_count: 22
    },
    {
        id: '6',
        author: jordy,
        created_at: new Date(2022, 4, 22),
        modified_at: new Date(2022, 4, 23),
        title: 'Hello, World!',
        content: `Hello there!`,
        likes_count: 203,
        comments_count: 2034,
        shared_count: 33,
    },
    {
        id: '7',
        author: jordy,
        created_at: new Date(2022, 4, 21),
        modified_at: new Date(2022, 4, 21),
        title: 'Know your audience',
        content: `Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look`,
        likes_count: 203,
        comments_count: 2034,
        shared_count: 33,
    },
    {
        id: '8',
        author: jordy,
        created_at: new Date(2022, 4, 21),
        modified_at: new Date(2022, 4, 21),
        title: 'Hang onto your memories',
        content: `Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.`,
        likes_count: 203,
        comments_count: 2034,
        shared_count: 33,
    }

]

export default posts;