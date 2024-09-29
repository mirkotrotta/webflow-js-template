# 🌐 Webflow JS Template

<p align="center">
  <img src="https://img.shields.io/badge/Webflow-JS%20Template-blueviolet?style=for-the-badge&logo=webflow" alt="Webflow Template">
  <img src="https://img.shields.io/github/license/mirkotrotta/webflow-js-template?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/github/stars/mirkotrotta/webflow-js-template?style=for-the-badge" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/mirkotrotta/webflow-js-template?style=for-the-badge" alt="GitHub Forks">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Project Status">
</p>

## 📄 Description

The **Webflow JS Template** provides a simple and effective way to integrate custom JavaScript libraries like GSAP into Webflow projects. The template is designed to streamline your workflow, allowing you to test animations and interactions locally without publishing changes to Webflow each time.

## 🚀 Getting Started

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (version 14+)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone git@github.com:mirkotrotta/webflow-js-template.git
   cd webflow-js-template
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   This will start a local development server at `http://localhost:3000`.

## 🔗 Connect to Webflow

To link your Webflow project with this local server:

1. Go to **Project Settings** in Webflow.
2. Navigate to **Custom Code** → **Footer Code**.
3. Copy the contents of the `tag` file and paste it into the Footer Code section:

   ```html
   <script type="module" src="http://localhost:3000/@vite/client"></script>
   <script type="module" src="http://localhost:3000/src/index.js"></script>
   ```

4. Save and publish your Webflow project.

> **Note**: This setup only works when the local server is running. For deployment, additional configuration is needed and will be detailed in future documentation.

## 🛠 How to Use

Once connected, you can customize animations in the `src/animations.js` file and add additional JavaScript logic in `src/interactions.js`. Modify these files to suit your project needs and see changes in real-time without publishing to Webflow.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 👤 Author

**Mirkotrotta**  
- [GitHub](https://github.com/mirkotrotta)  
- [Twitter](https://twitter.com/mirkotrotta)

