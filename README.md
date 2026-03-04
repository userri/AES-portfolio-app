# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

```
AES-portfolio-app
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ src
│  ├─ api
│  │  └─ supabase.ts
│  ├─ app
│  │  ├─ App.module.css
│  │  ├─ App.tsx
│  │  └─ Providers.tsx
│  ├─ assets
│  │  ├─ fonts
│  │  │  ├─ BlackHanSans-Regular.ttf
│  │  │  └─ NotoSansKR-VariableFont_wght.ttf
│  │  ├─ icon
│  │  │  ├─ back.png
│  │  │  ├─ backend.svg
│  │  │  ├─ black-link.webp
│  │  │  ├─ calendar.png
│  │  │  ├─ call.png
│  │  │  ├─ carrot.svg
│  │  │  ├─ certificate.png
│  │  │  ├─ chain3.png
│  │  │  ├─ dev-ops.svg
│  │  │  ├─ frontend.svg
│  │  │  ├─ github.png
│  │  │  ├─ kuit_logo.png
│  │  │  ├─ language.svg
│  │  │  ├─ loading.png
│  │  │  ├─ location.png
│  │  │  ├─ mail.png
│  │  │  ├─ pencil.png
│  │  │  ├─ person.png
│  │  │  ├─ rapa.jpg
│  │  │  ├─ tistory.svg
│  │  │  ├─ x-mark.svg
│  │  │  ├─ 돋보기.png
│  │  │  └─ 오토에버스쿨 1.png
│  │  ├─ image
│  │  │  └─ header.jpg
│  │  └─ react.svg
│  ├─ components
│  │  └─ ui
│  │     ├─ CommentBox.tsx
│  │     ├─ CommentForm.tsx
│  │     ├─ Info.tsx
│  │     ├─ Loading.tsx
│  │     ├─ ProjectCard.tsx
│  │     ├─ SectionTitle.tsx
│  │     ├─ SkillTag.tsx
│  │     └─ style
│  │        ├─ CommentBox.module.css
│  │        ├─ CommentForm.module.css
│  │        ├─ Info.module.css
│  │        ├─ Loading.module.css
│  │        ├─ ProjectCard.module.css
│  │        ├─ SectionTitle.module.css
│  │        └─ SkillTag.module.css
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ home
│  │  │  ├─ Home.tsx
│  │  │  └─ sections
│  │  │     ├─ About.tsx
│  │  │     ├─ Archiving.tsx
│  │  │     ├─ Careers.tsx
│  │  │     ├─ Intro.tsx
│  │  │     ├─ Projects.tsx
│  │  │     └─ Skills.tsx
│  │  ├─ notFound
│  │  │  └─ NotFound.tsx
│  │  ├─ projectDetails
│  │  │  ├─ MarkdownModule.css
│  │  │  ├─ ProjectDetail.module.css
│  │  │  ├─ ProjectDetail.tsx
│  │  │  └─ sections
│  │  │     └─ ProjectDetailContent.tsx
│  │  └─ style
│  │     ├─ About.module.css
│  │     ├─ Archiving.module.css
│  │     ├─ Careers.module.css
│  │     ├─ Home.module.css
│  │     ├─ Intro.module.css
│  │     ├─ Projects.module.css
│  │     └─ Skills.module.css
│  ├─ types
│  │  ├─ Career.ts
│  │  ├─ Comment.ts
│  │  ├─ Project.ts
│  │  └─ Skill.ts
│  └─ widgets
│     ├─ footer
│     │  ├─ Footer.module.css
│     │  └─ Footer.tsx
│     ├─ header
│     │  ├─ Header.module.css
│     │  ├─ Header.tsx
│     │  └─ NavItems.ts
│     └─ projectDetailHeader
│        ├─ NavItems.ts
│        ├─ ProjectDetailHeader.module.css
│        └─ ProjectDetailHeader.tsx
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```