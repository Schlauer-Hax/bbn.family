import { Title, custom, img } from "@lucsoft/webgen";

import one from '../imgs/1.png';
import two from '../imgs/2.png';
import three from '../imgs/3.png';
import four from '../imgs/4.png';

import '../styles/avatars.css'

export const renderAvatars = () => {
    const parent = custom('div', undefined, 'parent');
    const div = custom('div', undefined, 'wheel');

    const images = [one, two, three, four].map((x, i, array) => {
        const imagecontainer = custom('div', undefined, 'imagecontainer');
        const image = img(x)        
        imagecontainer.style.left = (i-array.length/2)*85+'px'
        imagecontainer.style.zIndex = String(array.length-i);
        imagecontainer.append(image);
        return imagecontainer;
    })

    div.append(...images);
    parent.append(div);
    return parent;
}