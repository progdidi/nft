import author from './images/author.png';
import prevImg from './images/prev.png';

import coll1 from './images/coll1.png';
import coll2 from './images/coll2.png';
import coll3 from './images/coll3.png';


const collections = [
    {
        id: 1,
        title: 'DSGN Animals',
        author: {
            img: author,
            name: 'MrFox'
        }, 
        mainImg: coll1,
        prevImg: prevImg,
        amount: '1025+',
    },

    {
        id: 1,
        title: 'Magic Mushrooms',
        author: {
            img: author,
            name: 'Shroomie'
        }, 
        mainImg: coll2,
        prevImg: prevImg,
        amount: '1025+',
    },

    {
        id: 1,
        title: 'Disco Machines',
        author: {
            img: author,
            name: 'BeKind2Robots'
        }, 
        mainImg: coll3,
        prevImg: prevImg,
        amount: '1025+',
    }
]

export {collections}