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

The plugin registers a block called **“My Custom Block”** that displays:
- `Hello Editor 👋` inside Gutenberg Editor
- `Hello Frontend 👋` on the site frontend

---

## 🚀 Features
- ⚡ Built with **modern JavaScript (ESNext + JSX)**
- 🔧 Compiled & bundled via **Webpack**
- 🔤 Transpiled with **Babel**
- 🎨 WordPress coding standards out of the box
- 📝 Easy to extend and add more blocks

---

## 🛠️ Installation & Setup

1. Clone or download this repository into your WordPress `wp-content/plugins/` folder:
   ```bash
   git clone https://github.com/yourusername/my-custom-block.git
   cd my-custom-block


Install dependencies:

npm install


Build the project:

npm run build


Activate the plugin from WordPress Admin > Plugins.

🧑‍💻 Usage

Open the Block Editor (Gutenberg).

Add a new block → Search “My Custom Block”.

Insert it into your page/post.

👉 Editor will show:
Hello Editor 👋
👉 Frontend will show:
Hello Frontend 👋

⚡ Tech Stack

🐞 Problems Faced & Solutions
1. npm WARN deprecated ... during installation

Faced many warnings about deprecated packages (rimraf, glob, etc.).

✅ Solution: Ignored them because @wordpress/scripts internally manages its dependencies. The plugin still builds successfully.

2. npx wp-scripts --version error: "could not determine executable to run"

On Windows, npx couldn’t detect the local binary.

✅ Solution: Instead of npx, used npm run build or .\node_modules\.bin\wp-scripts. This worked perfectly.

3. Gutenberg Block not visible

Initially forgot to run npm run build, so build/index.js was missing.

✅ Solution: Always run build before activating plugin.

📸 Screenshots

(Upload screenshots later inside /assets/screenshots/ folder and reference them here)

Gutenberg Editor view (Hello Editor 👋)

Frontend view (Hello Frontend 👋)

🤝 Contribution

Feel free to fork, raise issues, or submit pull requests.

📜 License

GPL-2.0-or-later
This plugin is open source and free to use.
