import { registerBlockType } from '@wordpress/blocks';

registerBlockType('myplugin/my-custom-block', {
    title: 'My Custom Block',
    icon: 'smiley',
    category: 'widgets',
    edit: () => <p>Hello Editor 👋</p>,
    save: () => <p>Hello Frontend 👋</p>,
});

import './hello.js';      // pehle wala block (Hello World)
import './testimonial.js'; // naya testimonial block
