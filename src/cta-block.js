import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  InspectorControls,
  URLInputButton,
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

registerBlockType("my-plugin/cta-block", {
  title: __("Call to Action", "my-plugin"),
  icon: "megaphone",
  category: "widgets",
  attributes: {
    heading: { type: "string", source: "html", selector: "h3" },
    buttonText: { type: "string", source: "html", selector: "a" },
    buttonUrl: { type: "string", default: "" },
    textColor: { type: "string", default: "#000000" },
    bgColor: { type: "string", default: "#f9f9f9" },
    buttonColor: { type: "string", default: "#0073aa" },
  },
  edit: ({ attributes, setAttributes }) => {
    const { heading, buttonText, buttonUrl, textColor, bgColor, buttonColor } =
      attributes;

    return (
      <Fragment>
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
            <p>{__("Button Color", "my-plugin")}</p>
            <ColorPalette
              value={buttonColor}
              onChange={(color) => setAttributes({ buttonColor: color })}
            />
          </PanelBody>
        </InspectorControls>

        <div
          style={{
            backgroundColor: bgColor,
            padding: "20px",
            textAlign: "center",
          }}
        >
          <RichText
            tagName="h3"
            placeholder="CTA Heading"
            value={heading}
            onChange={(value) => setAttributes({ heading: value })}
            style={{ color: textColor }}
          />
          <RichText
            tagName="a"
            placeholder="Button Text"
            value={buttonText}
            onChange={(value) => setAttributes({ buttonText: value })}
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: buttonColor,
              color: "#fff",
              textDecoration: "none",
            }}
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
    const { heading, buttonText, buttonUrl, textColor, bgColor, buttonColor } =
      attributes;

    return (
      <div
        style={{
          backgroundColor: bgColor,
          padding: "20px",
          textAlign: "center",
        }}
      >
        <RichText.Content
          tagName="h3"
          value={heading}
          style={{ color: textColor }}
        />
        <a
          href={buttonUrl}
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: buttonColor,
            color: "#fff",
            textDecoration: "none",
          }}
        >
          {buttonText}
        </a>
      </div>
    );
  },
});
