import React, { Component } from 'react'
import Octocat from "./Octocat"

class Gallery extends Component {
    state = {}
    render() {
        //this is the array with object
        const catData = [{
            number: '1',
            name: 'Scubatocat',
            image: 'https://octodex.github.com/images/scubatocat.png',
            link: 'https://octodex.github.com/scubatocat',
            avatar: 'https://avatars1.githubusercontent.com/u/19292210?v=4'
        },
        {
            number: '2',
            name: 'Tentocats',
            image: 'https://octodex.github.com/images/tentocats.jpg',
            link: 'https://octodex.github.com/tentocat',
            avatar: 'https://avatars3.githubusercontent.com/u/20049049?v=4'

        },
        {
            number: '3',
            name: 'Saint Nictocat',
            image: 'https://octodex.github.com/images/saint_nictocat.jpg',
            link: 'https://octodex.github.com/saint_nictocat',
            avatar: 'https://avatars3.githubusercontent.com/u/20049049?v=4',

        },
        {
            number: '4',
            name: 'Dinotocat',
            image: 'https://octodex.github.com/images/dinotocat.png',
            link: 'https://octodex.github.com/dinotocat',
            avatar: 'https://avatars3.githubusercontent.com/u/20049049?v=4'
        },
        {
            number: '5',
            name: 'Benjamin-Bannekat',
            image: 'https://octodex.github.com/images/bannekat.png',
            link: 'https://octodex.github.com/bannekat',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        {
            number: '6',
            name: 'Catstello',
            image: 'https://octodex.github.com/images/catstello.png',
            link: 'https://octodex.github.com/catstello',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        {
            number: '7',
            name: 'Skatetocat',
            image: 'https://octodex.github.com/images/skatetocat.png',
            link: 'https://octodex.github.com/skatetocat',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        {
            number: '8',
            name: 'McEfeeline',
            image: 'https://octodex.github.com/images/mcefeeline.jpg',
            link: 'https://octodex.github.com/mcefeeline',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        {
            number: '9',
            name: 'Gobble-o-tron',
            image: 'https://octodex.github.com/images/gobbleotron.gif',
            link: 'https://octodex.github.com/gobbleotron',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        {
            number: '10',
            name: 'Luchadortocat',
            image: 'https://octodex.github.com/images/luchadortocat.png',
            link: 'https://octodex.github.com/luchadortocat',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        {
            number: '11',
            name: 'Mummytocat',
            image: 'https://octodex.github.com/images/mummytocat.gif',
            link: 'https://octodex.github.com/mummytocat',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        {
            number: '12',
            name: 'Daftpunktocat-Guy',
            image: 'https://octodex.github.com/images/daftpunktocat-thomas.gif',
            link: 'https://octodex.github.com/daftpunktocat-guy',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        {
            number: '13',
            name: 'Octocat De Los Muertos',
            image: 'https://octodex.github.com/images/octocat-de-los-muertos.jpg',
            link: 'https://octodex.github.com/octocat-de-los-muertos',
            avatar: 'https://avatars1.githubusercontent.com/u/1300064?v=4'

        },
        ]

        const cats = catData.map((cat) =>
            <Octocat number={cat.number} name={cat.name} image={cat.image}
                link={cat.link} avatar={cat.avatar} />
        )

        return (
            <main>
                {cats}
            </main>)
    }
}

export default Gallery