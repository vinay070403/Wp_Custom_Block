import { registerBlockType } from '@wordpress/blocks';

registerBlockType('myplugin/hello-block', {
    title: 'Hello Block',
    icon: 'smiley',
    category: 'widgets',
    edit: () => <p>Hello Editor 👋</p>,
    save: () => <p>Hello Frontend 👋</p>,
});
