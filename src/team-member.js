import { registerBlockType } from "@wordpress/blocks";
import {
  RichText,
  MediaUpload,
  InspectorControls,
} from "@wordpress/block-editor";
import { PanelBody, ColorPalette, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

registerBlockType("my-plugin/team-member", {
  title: __("Team Member", "my-plugin"),
  icon: "groups",
  category: "widgets",
  attributes: {
    name: { type: "string", source: "html", selector: "h4" },
    position: { type: "string", source: "html", selector: "p.position" },
    imageUrl: { type: "string", default: "" },
    textColor: { type: "string", default: "#000000" },
    bgColor: { type: "string", default: "#f9f9f9" },
  },
  edit: ({ attributes, setAttributes }) => {
    const { name, position, imageUrl, textColor, bgColor } = attributes;

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
          </PanelBody>
        </InspectorControls>

        <div
          style={{
            backgroundColor: bgColor,
            padding: "20px",
            textAlign: "center",
          }}
        >
          <MediaUpload
            onSelect={(media) => setAttributes({ imageUrl: media.url })}
            allowedTypes={["image"]}
            render={({ open }) => (
              <Button onClick={open} isPrimary>
                {imageUrl ? "Change Image" : "Upload Image"}
              </Button>
            )}
          />
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name}
              style={{ width: "100px", borderRadius: "50%", margin: "10px 0" }}
            />
          )}
          <RichText
            tagName="h4"
            placeholder="Name"
            value={name}
            onChange={(value) => setAttributes({ name: value })}
            style={{ color: textColor }}
          />
          <RichText
            tagName="p"
            className="position"
            placeholder="Position"
            value={position}
            onChange={(value) => setAttributes({ position: value })}
            style={{ color: textColor }}
          />
        </div>
      </Fragment>
    );
  },
  save: ({ attributes }) => {
    const { name, position, imageUrl, textColor, bgColor } = attributes;

    return (
      <div
        style={{
          backgroundColor: bgColor,
          padding: "20px",
          textAlign: "center",
        }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            style={{ width: "100px", borderRadius: "50%", margin: "10px 0" }}
          />
        )}
        <RichText.Content
          tagName="h4"
          value={name}
          style={{ color: textColor }}
        />
        <RichText.Content
          tagName="p"
          className="position"
          value={position}
          style={{ color: textColor }}
        />
      </div>
    );
  },
});
