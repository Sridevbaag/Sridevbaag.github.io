# 👨‍💻 Sridev Bag | Personal Portfolio

![Portfolio Banner](assets/images/banner_placeholder.png) 
## 🚀 Overview

Welcome to my personal portfolio website! This project showcases my skills, academic projects, and experience as a **Software Developer** and **BCA Student**. It is designed to be fully responsive, interactive, and features a seamless contact form powered by EmailJS.

**Live Demo:** [Click Here to view](https://sridevbaag.github.io/)

## ✨ Key Features

* **🎨 Modern UI/UX:** Clean, minimalist design using the "Poppins" font family.
* **🌓 Dark/Light Mode:** Built-in theme toggle with local state persistence.
* **📱 Fully Responsive:** Optimized for desktops, tablets, and mobile devices.
* **📧 Functional Contact Form:** Integrated with **EmailJS** to send emails directly from the browser without a backend server.
* **✨ Scroll Animations:** Smooth fade-in effects as you scroll down the page.
* **📄 Resume Download:** Direct link to download my CV.

## 🛠️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure and layout |
| **CSS3** | Styling, Flexbox, Grid, Variables, Animations |
| **JavaScript** | DOM Manipulation, EmailJS logic, Theme Toggling |
| **FontAwesome** | Icons for social links and UI elements |
| **EmailJS** | API for handling contact form submissions |

## 📂 File Structure

```text
├── assets/
│   ├── images/        # Profile pictures and project screenshots
│   ├── icons/         # Resume PDF
├── index.html         # Main HTML structure
├── style.css          # Global styles, themes, and media queries
├── script.js          # Logic for theme, EmailJS, and animations
└── README.md          # Project documentation
```
## ⚙️ Local Setup & Installation

To run this project locally on your machine:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Sridevbaag/portfolio.git](https://github.com/Sridevbaag/portfolio.git)
    ```
2.  **Navigate to the project directory**
    ```bash
    cd portfolio
    ```
3.  **Open index.html**
    Simply double-click `index.html` to open it in your browser, or use a Live Server extension in VS Code.

## 🔧 Configuration (EmailJS)

This portfolio uses **EmailJS** for the contact form. If you fork this repo, you need to update the credentials in `script.js`.

1.  Create an account at [EmailJS.com](https://www.emailjs.com/).
2.  Create a new **Email Service** (e.g., Gmail) and a **Contact Form Template**.
3.  Open `script.js` and replace the following keys with your own:

```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Line 20
// ...
const serviceID = "YOUR_SERVICE_ID"; // Line 33
const templateID = "YOUR_TEMPLATE_ID"; // Line 34
```
## 📸 Projects Showcased
* **Student Result Management System:** A Java + SQL application for managing academic records with CRUD capabilities.

## 📬 Contact Me
Feel free to reach out if you want to collaborate or hire me!<br>
**Email:** sridevbaag2@gmail.com<br>
**LinkedIn:** [Sridev Bag](https://www.linkedin.com/in/sridev-bag/)<br>
**GitHub:** [Sridevbaag](https://github.com/Sridevbaag)<br>


<p align="center">© 2025 Sridev Bag | All Rights Reserved</p>
