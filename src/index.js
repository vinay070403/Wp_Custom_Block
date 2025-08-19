import { registerBlockType } from '@wordpress/blocks';

registerBlockType('myplugin/my-custom-block', {
    title: 'My Custom Block',
    icon: 'smiley',
    category: 'widgets',
    edit: () => <p>Hello Editor 👋</p>,
    save: () => <p>Hello Frontend 👋</p>,
});
