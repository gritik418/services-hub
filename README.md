# ServicesHub

## 🚀 Live Demo

🌐 **[View Live Application](https://services-hub-three.vercel.app/services)**

## Setup Instructions

### Backend Context

1. Clone the backend repository: `git clone https://github.com/gritik418/services-hub-backend.git`
2. Navigate to the backend directory: `cd services-hub-backend`
3. Install dependencies: `npm install`
4. Set up environment variables by creating a `.env` file in the root directory:
   ```env
   PORT=8000
   ```
5. Build the TypeScript files: `npm run build`
6. Start the server: `npm run start`

### Frontend Context

1. Clone the frontend repository: `git clone https://github.com/gritik418/services-hub.git`
2. Navigate to the frontend directory: `cd services-hub`
3. Install dependencies: `npm install`
4. Set up environment variables by creating a `.env` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```
5. Start the development server: `npm run dev`
6. Visit `http://localhost:3000/services`

---

## Tech Decisions

- **Frontend Framework**: Next.js (App Router) for Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR) to ensure fast load times and strong SEO out of the box.
- **Styling**: Bootstrap 5 used for quick, clean, and responsive UI layouts, adhering to real-world constraint timelines.
- **Backend Framework**: Node.js with Express and TypeScript for robust, strongly-typed routing, minimizing bugs during development.

---

## Answers to Written Questions

### 2. Frontend Quality Check

#### Component Structure

Components are separated logically in the `components/` directory (e.g., `ServiceCard`, `Navbar`, `NoServiceCard`, `TryAgainButton`). The main page sits cleanly in `app/services/page.tsx`, keeping the business logic and UI separate. This favors testability, reusability, and clean code architecture.

#### Data Fetching

Data is fetched server-side in the Next.js App Router using the native `fetch` API. I used Incremental Static Regeneration (ISR) via `export const revalidate = 300;`. This means the page is statically built to ensure blazing speeds but revalidates data automatically every 5 minutes in the background, balancing performance with data freshness.

#### What you did to ensure SEO & performance

- **SEO Elements**: Implemented semantic HTML layout (`<main>`, `<section>`, `<article>`) and utilized Next.js `Metadata` to define robust page titles and meta descriptions.
- **Performance Implementations**: Used Server Components with Incremental Static Regeneration (ISR) to reduce client-side JavaScript and keep the page fast.

### 4. API Thinking (Critical)

#### How would you scale this API if traffic increases?

1. **Migration to DB:** Migrate from the mock/in-memory data repository to a highly scalable persistent database such as PostgreSQL or MongoDB.
2. **Caching Strategy:** Implement a caching layer (like Redis) right before the controllers to safely serve fast, repeated queries without exhausting DB connections.
3. **Horizontal Scaling:** Containerize the Node app with Docker and deploy across an orchestration platform (Kubernetes or AWS ECS) behind an Application Load Balancer.

#### What security concerns should be addressed in production?

1. **Rate Limiting:** Protect the backend against DoS or brute-force vectors by implementing strict IP or token-based rate limiting.
2. **CORS Validation:** Use `cors` middleware to explicitly restrict the allowed origins strictly to the production frontend domains.
3. **Validation Pipeline:** Introduce a validation schema parser (like Zod) to assert requests' shapes before reaching any logic.

#### How would you version this API?

To ensure backward compatibility when structural changes are introduced, API routes should be versioned explicitly. Currently handled via `app.use("/api/services", ...)`, this would scale seamlessly into URL routing strategies like `/api/v1/services` mapped specifically to `/v1/controllers/...`.

### 6. SEO & Performance Awareness

#### What makes your page SEO-friendly?

Uses standard HTML tags (`<header>`, `<main>`, etc.) to structure content clearly. Next.js Metadata adds titles and descriptions for search engines. Server-Side Rendering (SSR) delivers the full page content immediately, so search engines can read it without waiting for JavaScript.

#### What could be improved further if this went live?

Since this relies heavily on images/media for branding in a real scenario, we could introduce a CDN like Vercel's Edge Network or Cloudflare to serve optimized `<Image />` tags. Additionally, adding canonical URLs and dynamically generated `sitemap.xml` / `robots.txt` would significantly boost discoverability.

#### How would you measure performance?

I would measure performance by checking page load time, API response time, and bundle size. In the browser, I can use Chrome DevTools to analyze network requests, loading time, and performance issues. I would also monitor Core Web Vitals like LCP, CLS, and INP to ensure the user experience is smooth.

### 7. Refactoring Scenario

**Scenario: If a junior developer joins and this project grows 3× in complexity, what would you refactor first and why?**

**Refactor Priority:** Separating Database Code from Business Logic.

Right now, the API controllers handle everything directly. When we switch to a real database, keeping all this logic in the controllers will make the code repetitive and hard to test.

To fix this, I would split the code into three parts:

- **Controllers:** Handle user requests and responses.
- **Services:** Handle the business rules.

**Why this helps:**

1. Code is easier to read because each part has only one job.
2. Junior developers can add new features without breaking the app.
