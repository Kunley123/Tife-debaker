import cake from './assets/images/FAMI6037.JPG'
import meatpie from './assets/images/IMUH5247.JPG'
import doughnut from './assets/images/TPZV0786.JPG'
import chinchin from './assets/images/TZAT7683.JPG'
import { nanoid } from 'nanoid'

export const images = [
    {
        name: 'cake',
        src: cake,
        id: nanoid(),
        phrase: "Creamy Vanilla and chocs",
        price: "25000",
        link: "/cakes"
    },
    {
        name: ' meatpie',
        src: meatpie,
        id: nanoid(),
        phrase: "Sweels of drocutame",
        price: "500",
        link: "/meatpies"
    },
    {
        name: 'doughnut',
        src: doughnut,
        id: nanoid(),
        phrase: "Milky and tasty",
        price: "1000",
        link: "/doughnuts"
    },
    {
        name: 'chinchin',
        src: chinchin,
        id: nanoid(),
        phrase: "Crunchy to the ear",
        price: "4000",
        link: "/crunchies"
    }

]