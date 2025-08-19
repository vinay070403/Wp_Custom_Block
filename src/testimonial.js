import { registerBlockType } from "@wordpress/blocks";
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ColorPalette, FontSizePicker } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";

registerBlockType("my-plugin/testimonial", {
  title: __("Testimonial", "my-plugin"),
  icon: "format-quote",
  category: "widgets",
  attributes: {
    name: { type: "string", source: "html", selector: "h4" },
    text: { type: "string", source: "html", selector: "p" },
    textColor: { type: "string", default: "#000000" },
    bgColor: { type: "string", default: "#f9f9f9" },
    fontSize: { type: "number", default: 16 },
  },
  edit: ({ attributes, setAttributes }) => {
    const { name, text, textColor, bgColor, fontSize } = attributes;

    return (
      <>
        <InspectorControls>
          <PanelBody title={__("Block Settings", "my-plugin")}>
            <p>{__("Text Color", "my-plugin")}</p>
            <ColorPalette
              value={textColor}
              onChange={(color) => setAttributes({ textColor: color })}
            />
            <p>{__("Background Color", "my-plugin")}</p>
            <ColorPalette
              value={bgColor}
              onChange={(color) => setAttributes({ bgColor: color })}
            />
            <p>{__("Font Size", "my-plugin")}</p>
            <FontSizePicker
              value={fontSize}
              onChange={(size) => setAttributes({ fontSize: size })}
            />
          </PanelBody>
        </InspectorControls>

        <div style={{ backgroundColor: bgColor, padding: "20px" }}>
          <RichText.Content
            tagName="p"
            value={text}
            style={{ color: textColor, fontSize: fontSize + "px" }} // px add karo
          />

          <RichText
            tagName="p"
            placeholder="Customer Feedback"
            value={text}
            onChange={(value) => setAttributes({ text: value })}
            style={{ color: textColor, fontSize: fontSize + "px" }} // px add karo
          />
        </div>
      </>
    );
  },
  save: ({ attributes }) => {
    const { name, text, textColor, bgColor, fontSize } = attributes;

    return (
      <div style={{ backgroundColor: bgColor, padding: "20px" }}>
        <RichText.Content
          tagName="h4"
          value={name}
          style={{ color: textColor }}
        />
        <RichText.Content
          tagName="p"
          value={text}
          style={{ color: textColor, fontSize: fontSize }}
        />
      </div>
    );
  },
});
