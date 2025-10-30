import offer1 from './assets/offerImages/GTZX8882.JPG'
import offer2 from './assets/offerImages/IZRZ5543.JPG'
import offer3 from './assets/offerImages/NFBR2630.JPG'
import offer4 from './assets/offerImages/XSZN2673.JPG'
import offer5 from './assets/offerImages/PEHO9172.JPG'
import { nanoid } from 'nanoid'

export const offers = [
    {
        src: offer1,
        name: "Valentine Special",
        price: 22000,
        id: nanoid()
    },

    {
        src: offer2,
        name: "Birthday Combo",
        price: 27000,
        id: nanoid()
    },
    {
        src: offer3,
        name: "Birthday Combo II",
        price: 45000,
        id: nanoid()
    },
    {
        src: offer4,
        name: "Gift Box (For Him Set)",
        price: 40000,
        id: nanoid()
    },
    {
        src: offer5,
        name: "Parfait (Cup of Sweetness)",
        price: 4000,
        id: nanoid()
    }

]