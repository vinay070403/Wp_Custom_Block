# 🧩 My Custom Block Plugin for WordPress  

<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg" height="60">
  <img src="https://webpack.js.org/assets/icon-square-big.svg" height="60">
  <img src="https://cdn.worldvectorlogo.com/logos/npm-square-red-1.svg" height="60">
  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="60">
</p>

---

## 📖 Overview
This is a **custom Gutenberg block plugin** for WordPress built with  
[`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/),  
which uses **Webpack + Babel** under the hood.
---

## 🚀 Features
- ⚡ Testimonial Block – Add customer testimonials with editable name, feedback, text color, background color, and font size.
- 🔧 Compiled & bundled via **Webpack**
- 🔤CTA Block – Create call-to-action sections with title, description, button text & URL, and custom styling.
- 🎨 WordPress coding standards out of the box
- 📝 Team Member Block – Showcase team members with name, role, image, and social links.
- 📝 Pricing Table Block – Display pricing plans with plan name, price, features, button, and custom colors.
---
## 📂 Folder Structure
```
my-custom-block/
│
├─ src/                # Block source files
│  ├─ testimonial.js
│  ├─ cta.js
│  ├─ team.js
│  └─ pricing.js
│
├─ build/              # Compiled JS/CSS
├─ style.css           # Frontend & editor styles
├─ index.php           # Plugin bootstrap
├─ block.json          # Block registration & metadata
└─ package.json        # NPM dependencies
```
## 🛠️ Installation & Setup

1. Clone or download this repository into your WordPress `wp-content/plugins/` folder:
   ```bash
   git clone https://github.com/yourusername/my-custom-block.git
   ```
2. Navigate to the plugin folder and install dependencies:
   ``` cd my-custom-block```
3. Start development mode with live reloading:
   ```
    npm install
   ```
4. Build production-ready assets:
   ```
    npm run build

    npm start

5. Activate the plugin from WordPress Admin > Plugins.

   
---


## 🧑‍💻 Usage

Open the Block Editor (Gutenberg).

  ```
  1. Testimonial Block
  
  Attributes: name, text, textColor, bgColor, fontSize
  
  Customization: Live preview for text color, background color, font size
```
```
  2. CTA Block
  
  Attributes: title, description, buttonText, buttonUrl, bgColor, textColor
  
  Customization: Live preview for text and background colors
```
```
  3. Team Member Block
  
  Attributes: name, role, imageUrl, socialLinks
  
  Customization: Change profile image, role, and social links
```
```
  4. Pricing Table Block
  
  Attributes: planName, price, features, buttonText, buttonUrl, textColor, bgColor, buttonColor
  
  Customization: Add/remove features, customize colors, update button

---
```
## ⚡ Tech Stack
->
->
->

---

## 🐞 Problems Faced & Solutions
  1. npm WARN deprecated ... during installation

  Faced many warnings about deprecated packages (rimraf, glob, etc.).

  ✅ Solution: Ignored them because @wordpress/scripts internally manages its dependencies. The plugin still builds successfully.

  2. npx wp-scripts --version error: "could not determine executable to run"

  On Windows, npx couldn’t detect the local binary.

  ✅ Solution: Instead of npx, used npm run build or .\node_modules\.bin\wp-scripts. This worked perfectly.

  3. Gutenberg Block not visible

  Initially forgot to run npm run build, so build/index.js was missing.

  ✅ Solution: Always run build before activating plugin.

  ---

## 📸 Screenshots

<img width="1389" height="573" alt="image" src="https://github.com/user-attachments/assets/1e935c5f-1ab1-4445-8cba-d1923ce43f39" />
<img width="1656" height="798" alt="image" src="https://github.com/user-attachments/assets/fd3ec205-bc3c-46a1-b62b-a14c9322e653" />
<img width="1705" height="831" alt="image" src="https://github.com/user-attachments/assets/7e6fcc4a-708f-4407-b3fb-9feb7fb6f9a1" />

---

## 🤝 Contribution

Feel free to fork, raise issues, or submit pull requests.

----

$$ 📜 License

GPL-2.0-or-later
This plugin is open source and free to use.
---
