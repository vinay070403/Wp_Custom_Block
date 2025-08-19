import { registerBlockType } from '@wordpress/blocks';
import { RichText, InspectorControls, URLInputButton } from '@wordpress/block-editor';
import { PanelBody, ColorPalette, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';

registerBlockType('my-plugin/pricing-table', {
    title: __('Pricing Table', 'my-plugin'),
    icon: 'money',
    category: 'widgets',
    attributes: {
        planName: { type: 'string', source: 'html', selector: 'h4' },
        price: { type: 'string', source: 'html', selector: '.price' },
        features: { type: 'array', default: [], source: 'children', selector: 'ul' },
        buttonText: { type: 'string', source: 'html', selector: 'a' },
        buttonUrl: { type: 'string', default: '' },
        textColor: { type: 'string', default: '#000' },
        bgColor: { type: 'string', default: '#f9f9f9' },
        buttonColor: { type: 'string', default: '#0073aa' },
    },
    edit: ({ attributes, setAttributes }) => {
        const { planName, price, features, buttonText, buttonUrl, textColor, bgColor, buttonColor } = attributes;

        const addFeature = () => setAttributes({ features: [...features, ''] });
        const updateFeature = (value, index) => {
            const newFeatures = [...features];
            newFeatures[index] = value;
            setAttributes({ features: newFeatures });
        };
        const removeFeature = (index) => {
            const newFeatures = [...features];
            newFeatures.splice(index, 1);
            setAttributes({ features: newFeatures });
        };

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Block Settings', 'my-plugin')}>
                        <p>{__('Text Color', 'my-plugin')}</p>
                        <ColorPalette value={textColor} onChange={(color) => setAttributes({ textColor: color })} />
                        <p>{__('Background Color', 'my-plugin')}</p>
                        <ColorPalette value={bgColor} onChange={(color) => setAttributes({ bgColor: color })} />
                        <p>{__('Button Color', 'my-plugin')}</p>
                        <ColorPalette value={buttonColor} onChange={(color) => setAttributes({ buttonColor: color })} />
                    </PanelBody>
                </InspectorControls>

                <div style={{ backgroundColor: bgColor, padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>
                    <RichText
                        tagName="h4"
                        placeholder="Plan Name"
                        value={planName}
                        onChange={(value) => setAttributes({ planName: value })}
                        style={{ color: textColor }}
                    />
                    <RichText
                        tagName="p"
                        className="price"
                        placeholder="Price"
                        value={price}
                        onChange={(value) => setAttributes({ price: value })}
                        style={{ color: textColor, fontSize: '20px', margin: '10px 0' }}
                    />
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>
                                <TextControl
                                    value={feature}
                                    onChange={(value) => updateFeature(value, index)}
                                    placeholder={`Feature ${index + 1}`}
                                />
                                <Button isSmall isDestructive onClick={() => removeFeature(index)}>Remove</Button>
                            </li>
                        ))}
                    </ul>
                    <Button isPrimary onClick={addFeature}>Add Feature</Button>
                    <RichText
                        tagName="a"
                        placeholder="Button Text"
                        value={buttonText}
                        onChange={(value) => setAttributes({ buttonText: value })}
                        style={{ display: 'inline-block', marginTop: '15px', padding: '10px 20px', backgroundColor: buttonColor, color: '#fff', textDecoration: 'none' }}
                        href={buttonUrl}
                    />
                    <URLInputButton
                        url={buttonUrl}
                        onChange={(url) => setAttributes({ buttonUrl: url })}
                    />
                </div>
            </Fragment>
        );
    },
    save: ({ attributes }) => {
        const { planName, price, features, buttonText, buttonUrl, textColor, bgColor, buttonColor } = attributes;

        return (
            <div style={{ backgroundColor: bgColor, padding: '20px', border: '1px solid #ddd', textAlign: 'center' }}>
                <RichText.Content tagName="h4" value={planName} style={{ color: textColor }} />
                <RichText.Content tagName="p" className="price" value={price} style={{ color: textColor, fontSize: '20px', margin: '10px 0' }} />
                <ul>
                    {features.map((feature, index) => <li key={index}>{feature}</li>)}
                </ul>
                <a href={buttonUrl} style={{ display: 'inline-block', marginTop: '15px', padding: '10px 20px', backgroundColor: buttonColor, color: '#fff', textDecoration: 'none' }}>
                    {buttonText}
                </a>
            </div>
        );
    },
});
