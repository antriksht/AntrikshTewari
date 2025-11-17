# Project Brief: Migrate Personal Portfolio to Next.js for SEO

## 1. Objective

The primary goal of this project is to migrate an existing, beautifully designed personal portfolio website from a React/Vite (Client-Side Rendered) application to a **Next.js** application.

**The "why":** The current site is a Single Page Application (SPA), which is not ideal for Search Engine Optimization (SEO). By moving to Next.js, we will leverage Server-Side Rendering (SSR) or Static Site Generation (SSG) to make the content easily indexable by search engines, thereby improving organic visibility.

**The "what":** You are tasked with recreating the *exact* same website—preserving its design, content, and functionality—within a new Next.js framework. The existing code in this repository should be used as the blueprint and source for all assets, components, and text.

## 2. Current Implementation (For Reference)

The entire existing application is in the `/client` directory. It's a standard Vite-powered React application.

*   **Framework:** React with Vite
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS with PostCSS
*   **UI Components:** A combination of custom components and `shadcn/ui`.

You can run the current site to see it live:
```bash
npm install
npm run dev # Or the equivalent script in package.json
```

## 3. Migration Roadmap & Technical Requirements

Your task is to build a new Next.js application that faithfully reproduces the sections and pages of the original site.

### 3.1. Page Structure

The main page of the website is composed of several distinct sections, which are currently rendered within `client/src/pages/Home.tsx`. In the new Next.js application (using the App Router), these will be the components that make up `app/page.tsx`.

The components for each section can be found in `client/src/components/` and should be migrated.

| Section Name  | Source File                       | Notes                                                                                                                            |
| :------------ | :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| **Header**    | `client/src/components/Header.tsx`  | The main navigation bar. Ensure routing is updated to use Next.js's `<Link>` component for client-side navigation.                |
| **Hero**      | `client/src/components/Hero.tsx`    | The main introductory block. Contains text and a call-to-action button.                                                          |
| **About**     | `client/src/components/About.tsx`   | The "About Me" section.                                                                                                          |
| **Tech Stack**| `client/src/components/TechStack.tsx`| This section displays a list of technologies. The data for this is located in `client/src/data/techStack.ts`.                     |
| **Projects**  | `client/src/components/Projects.tsx`| This section showcases a list of projects. The data comes from `client/src/data/projects.ts`.                                     |
| **Impact**    | `client/src/components/Impact.tsx`  | Displays key metrics and achievements. The `AnimatedCounter.tsx` component is a key part of this section.                        |
| **Contact**   | `client/src/components/Contact.tsx` | The contact section.                                                                                                             |
| **Footer**    | `client/src/components/Footer.tsx`  | The website footer.                                                                                                              |

### 3.2. Project Detail Page (Dynamic Route)

The current site has a page for viewing project details at `client/src/pages/ProjectDetail.tsx`. This should be implemented as a dynamic route in Next.js.

*   **Action:** Create a dynamic route, for example: `app/projects/[slug]/page.tsx`.
*   **Data:** The page will fetch the data for a specific project from `client/src/data/projects.ts` based on the `slug` parameter in the URL. This is a perfect use case for SSG with `generateStaticParams`.

### 3.3. Data and Content

All the dynamic content for the site is stored statically in the `client/src/data/` directory.

*   `client/src/data/projects.ts`: Contains an array of project objects. This data should be directly imported into the `Projects` component and the dynamic project detail page.
*   `client/src/data/techStack.ts`: Contains the data for the technology stack section.

**Action:** Copy the `data` directory into the new Next.js project and import the data directly where needed.

### 3.4. Styling and UI

The project's aesthetic is critical and must be preserved.

*   **Tailwind CSS:** Copy the configuration from `tailwind.config.ts` and `postcss.config.js` into your new Next.js project. The global styles from `client/src/index.css` should be moved to `app/globals.css`.
*   **shadcn/ui:** The UI components from `client/src/components/ui/` should be migrated. You can either copy these files directly or re-initialize `shadcn/ui` in the new project (`npx shadcn-ui@latest init`) and add the required components (button, card, etc.). The latter is recommended.
*   **Fonts & Icons:** Ensure any custom fonts or icon libraries are correctly configured in the Next.js project.

### 3.5. SEO Implementation

The entire purpose of this migration is SEO.

*   **Metadata:** Use the Next.js Metadata API to add a unique, descriptive `title` and `description` for the homepage and for each dynamic project detail page.
*   **Semantic HTML:** The existing components use semantic HTML (e.g., `<header>`, `<section>`, `<footer>`). Ensure this is maintained.
*   **Image Optimization:** Replace standard `<img>` tags with Next.js's `<Image>` component for automatic image optimization.

### 3.6. Server and Backend

The current repository has a `/server` directory. **This should be ignored.** The new Next.js application should be fully self-contained. Any functionality provided by the old server (if any was planned) should be replaced by Next.js features like API Routes or handled via static generation.

## 4. Final Deliverable

The final output should be a new, complete Next.js project in a separate directory that:
1.  Looks and feels identical to the original site.
2.  Is built with the Next.js App Router.
3.  Uses SSG or SSR for optimal SEO performance.
4.  Is well-structured and follows Next.js best practices.
5.  Contains no build errors or console warnings.