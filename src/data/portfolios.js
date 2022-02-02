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
        tech : 'HTML| NodeJs| MongoDb| EJS| Tailwind',
        text: 'All round Backend integrated clone mimicing the user flow and behavior of Udemy.com. In this we were using MongoDb for storing all data.',
        button: <GitHub/>
    },
    {
        id: 1,
        category: 'Udemy 2.0',
        image: Udemy_2,
        link1: 'https://github.com/KumarAkash22/udemy-clone-1',
        link2: 'https://aqueous-fortress-78543.herokuapp.com/',
        title: 'Udemy 2.0',
        tech : 'HTML| Tailwind| JavaScript| Mock Server| Express',
        text: 'Udemy is an E-learning web application for online learning and teaching.In this we were useing Mock-server for store data '
    },
    {
        id: 6,
        category: 'Udemy 1.0',
        image: Udemy_1,
        link1: 'https://github.com/KumarAkash22/Udemy-Clone',
        link2: 'https://kapoorkartik.github.io/Udemy-Clone/home_page.html',
        title: 'Udemy website 1.0',
        tech : 'HTML| CSS| DOM| JavaScript',
        text: 'This is our first colaborative project. In this project we clone udemy.com. Here we first identify the main functionalities and then implemented all identified functions'
    },
    
    {
        id: 3,
        category: 'Sephora',
        image: saphora,
        link1: 'https://github.com/KumarAkash22/Sephora-clone',
        link2: 'https://sephoraclone-akash.vercel.app/',
        title: 'Sephora website',
        tech : 'HTML| CSS| Javascript',
        text: 'This is individual Project which is clone of Saphora website. SignUp /Login and Add to Cart data are store in localStorage and also fatch fron there. All design are made by CSS. '
    }
]

export default portfolios;