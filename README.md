# AI Resume Builder

An AI-powered, full-stack resume builder designed to streamline the creation of professional resumes with intelligent bullet point generation. This project integrates modern frontend frameworks, secure user authentication, and generative AI via Gemini API to deliver a fast, responsive, and intelligent resume-building experience.

## 🚀 Features

- ✨ **AI-Powered Suggestions** – Uses the Gemini API to auto-generate role-specific resume bullet points
- 📄 **Rich Text Editing** – Integrated WYSIWYG editor for writing and formatting experience summaries
- 🔐 **Secure Authentication** – User login and registration handled via Clerk
- 🧠 **Dynamic Content** – Resume data managed via Strapi (headless CMS)
- 📥 **PDF Export** – Download beautifully formatted resumes as PDFs
- 💨 **Fast Frontend** – Built using Vite + React + Tailwind for optimized performance
- ☁️ **CI/CD + Hosting** – Deployed with Vercel using build-time environment configs
- 💻 **Modular Codebase** – Structured for scalability, maintainability, and easy extension

---

## 🧱 Tech Stack

| Layer       | Tools & Services                                 |
|-------------|--------------------------------------------------|
| Frontend    | React, Vite, Tailwind CSS                        |
| Backend     | Strapi CMS (Headless)                           |
| Auth        | Clerk                                            |
| AI Service  | Google Gemini API                               |
| Deployment  | Vercel                                           |
| Dev Tools   | Git, Postman, ESLint, Prettier                   |

---

## 📸 Demo

🔗 **Live URL:** [https://ai-resume-creator-azure.vercel.app](https://ai-resume-creator-azure.vercel.app)  
🔗 **GitHub Repo:** [github.com/raghav-narayan/ai-resume-builder](https://github.com/raghav-narayan/ai-resume-builder)

---

## 📂 Project Structure

```bash
ai-resume-builder/
├── public/                   # Static assets
├── src/
│   ├── components/           # UI components (buttons, nav, tiles)
│   ├── context/              # Global context for resume info
│   ├── pages/                # Resume form steps (Personal, Summary, Experience)
│   ├── service/              # API handlers (Strapi, Gemini)
│   └── App.jsx               # App root
├── vercel.json               # Vercel build config
├── .env                      # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/raghav-narayan/ai-resume-builder.git
cd ai-resume-builder
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

> Use `--legacy-peer-deps` to avoid React 19 peer conflicts.

### 3. Configure Environment Variables

Create a `.env` file in the root:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_STRAPI_URL=https://your-strapi-url.com
```

### 4. Run the App

```bash
npm run dev
```

---

## 🧠 Gemini AI Integration

- Gemini API is used to dynamically generate resume bullet points based on job titles.
- Prompts are customized for resume context and parsed as `<ul><li>` HTML.
- Users can insert the output into a rich text editor with a single click.

---

## 📥 PDF Export

- Users can download their completed resume as a **print-ready PDF**
- Supports basic formatting, layout, and section spacing
- Implemented using a print-to-PDF optimized layout inside the app

---

## ☁️ Deployment (Vercel)

Deployed on [Vercel](https://vercel.com). To ensure smooth installs with conflicting peer dependencies, `vercel.json` is configured as:

```json
{
  "build": {
    "env": {
      "NPM_CONFIG_LEGACY_PEER_DEPS": "true"
    }
  }
}
```

---

## 🙌 Acknowledgements

- [Clerk](https://clerk.dev) – Authentication
- [Strapi](https://strapi.io) – Headless CMS
- [Gemini API](https://ai.google.dev/gemini-api/docs) – AI Bullet Generator
- [Vercel](https://vercel.com) – Hosting and CI/CD

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Raghav Narayan](https://github.com/raghav-narayan)
