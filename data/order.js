import product01 from '../assets/product01.png'
import product02 from '../assets/product02.png'
import product03 from '../assets/product03.png'

export const orderData = [
    {
        id: 1,
        time: '03/05/2020 07:00',
        status: 'Obligation',
        products: [
            {
                id: 'aa',
                image: product01,
                name: 'Lum mleie kertase miase lacnean',
                price: '90.00',
                quantity: 2
            },
            {
                id: 'bb',
                image: product03,
                name: 'Miss K Table Lamp by Flos',
                price: null,
                quantity: 1
            }
        ]
    },
    {
        id: 2,
        time: '02/05/2020 08:00',
        status: 'Done',
        products: [
            {
                id: 'cc',
                image: product02,
                name: 'Lum mleie kertase miase lacnean',
                price: '90.00',
                quantity: 1
            },
            {
                id: 'dd',
                image: product03,
                name: 'Miss K Table Lamp by Flos',
                price: '120.00',
                quantity: 1
            }
        ]
    },
    {
        id: 3,
        time: '01/05/2020 08:00',
        status: 'Done',
        products: [
            {
                id: 'ee',
                image: product02,
                name: 'Lum mleie kertase miase lacnean',
                price: '90.00',
                quantity: 2
            },
            {
                id: 'ff',
                image: product03,
                name: 'Miss K Table Lamp by Flos',
                price: '120.00',
                quantity: 3
            }
        ]
    }
]