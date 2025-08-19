import { registerBlockType } from '@wordpress/blocks';
import { TextControl, TextareaControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType('myplugin/testimonial-block', {
    title: __('Testimonial Block', 'my-custom-block'),
    icon: 'format-quote',
    category: 'widgets',

    attributes: {
        name: {
            type: 'string',
            source: 'text',
            selector: '.testimonial-name',
        },
        text: {
            type: 'string',
            source: 'text',
            selector: '.testimonial-text',
        },
    },

    edit: ({ attributes, setAttributes }) => {
        const { name, text } = attributes;

        return (
            <div className="testimonial-editor">
                <TextControl
                    label="Name"
                    value={name}
                    onChange={(val) => setAttributes({ name: val })}
                />
                <TextareaControl
                    label="Testimonial"
                    value={text}
                    onChange={(val) => setAttributes({ text: val })}
                />
            </div>
        );
    },

    save: ({ attributes }) => {
        const { name, text } = attributes;

        return (
            <div className="testimonial-block">
                <p className="testimonial-text">"{text}"</p>
                <p className="testimonial-name">- {name}</p>
            </div>
        );
    },
});
