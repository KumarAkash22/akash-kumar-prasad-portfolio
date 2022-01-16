import Udemy_1 from '../img/portImages/Udemy_1.png';
import Udemy_2 from '../img/portImages/udemy_2.png';
import udemy_3 from '../img/portImages/udemy_3.png';
import saphora from '../img/portImages/saphora.png';
import GitHub from '@material-ui/icons/GitHub';



const portfolios = [
    {
        id: 2,
        category: 'Udemy 3.0',
        image: udemy_3,
        link1: 'https://github.com/KumarAkash22/Udemy-Clone-Backend',
        link2: 'https://aqueous-fortress-78543.herokuapp.com/',
        title: 'Udemy Website 3.0',
        text: 'All round Backend integrated clone mimicing the user flow and behavior of Udemy.com',
        button: <GitHub/>
    },
    {
        id: 1,
        category: 'Udemy 2.0',
        image: Udemy_2,
        link1: 'https://github.com/KumarAkash22/udemy-clone-1',
        link2: 'https://aqueous-fortress-78543.herokuapp.com/',
        title: 'Udemy 2.0',
        text: 'Create with HTML Tailwind and Mock Server'
    },
    {
        id: 6,
        category: 'Udemy 1.0',
        image: Udemy_1,
        link1: 'https://github.com/KumarAkash22/Udemy-Clone',
        link2: 'https://kapoorkartik.github.io/Udemy-Clone/home_page.html',
        title: 'Udemy website 1.0',
        text: 'Create with HTML CSS and Advance JavaScript'
    },
    
    {
        id: 3,
        category: 'Sephora',
        image: saphora,
        link1: 'https://github.com/KumarAkash22/Sephora-clone',
        link2: 'https://kumarakash22.github.io/Sephora-clone/slide.html',
        title: 'Sephora website',
        text: 'Create with HTML and CSS and Basic JavaScript'
    }
    // {
    //     id: 4,
    //     category: 'Animation',
    //     image: img2,
    //     link1: 'https://www.google.com',
    //     link2: 'https://www.google.com',
    //     title: 'How To Use Blender',
    //     text: 'Free Animation Software'
    // },
    // {
    //     id: 5,
    //     category: 'Animation',
    //     image: img2,
    //     link1: 'https://www.google.com',
    //     link2: 'https://www.google.com',
    //     title: 'How To Use Blender',
    //     text: 'Free Animation Software'
    // },
    
    // {
    //     id: 7,
    //     category: 'Udemy 2.',
    //     image: Udemy_2,
    //     link1: 'https://github.com/KumarAkash22/udemy-clone-1',
    //     link2: 'https://aqueous-fortress-78543.herokuapp.com/',
    //     title: 'Udemy 2.0',
    //     text: 'Create with HTML Tailwind and Mock Server'
    // }
]

export default portfolios;