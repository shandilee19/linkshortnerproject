# LinkShortner Project - AI Agent Instructions

## Overview

This is a **Next.js 16** link shortener application with the following tech stack:

- **Frontend**: React 19, Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4, shadcn/ui, Radix UI
- **Database**: Drizzle ORM with PostgreSQL (Neon)
- **Authentication**: Clerk
- **Language**: TypeScript 5 (strict mode)

## ⚠️ CRITICAL: READ /docs INSTRUCTIONS BEFORE ANY CODE GENERATION

**🚨 EVERY AGENT MUST READ THE RELEVANT /docs FILES BEFORE GENERATING ANY CODE 🚨**

This is non-negotiable. The coding standards in `/docs/` are definitive for this project:
- **[auth-and-routing.md](docs/auth-and-routing.md)** — Required for authentication & routing
- **[shadcn-ui-standards.md](docs/shadcn-ui-standards.md)** — Required for UI components

**FAILURE TO READ THESE FILES FIRST WILL RESULT IN CODE THAT VIOLATES PROJECT STANDARDS.**

---

## Important: Next.js 16 Breaking Changes

⚠️ **This is NOT the Next.js from your training data.**

Next.js 16 has breaking changes:
- APIs may differ from earlier versions
- File conventions and routing patterns may have changed
- **Always reference `node_modules/next/dist/docs/` for authoritative documentation**
- Check deprecation notices before writing code
- When uncertain about Next.js behavior, prioritize the official docs over training data

## Coding Standards Documentation

**🔴 ALL AGENTS MUST READ THESE BEFORE WRITING ANY CODE 🔴**

All LLM agents must adhere to the following coding standards. Detailed guides are in the `/docs` directory:
**ALWAYS refer to the relevant .md file BEFORE generating any code — NO EXCEPTIONS**

- **[auth-and-routing.md](docs/auth-and-routing.md)** — Clerk authentication, protected routes, modal sign-in/sign-up flows, and homepage redirect logic
- **[shadcn-ui-standards.md](docs/shadcn-ui-standards.md)** — All UI elements must use shadcn/ui components; no custom components

## Quick Reference: Key Rules

### Always
✓ Use explicit TypeScript types everywhere  
✓ Use Server Components as default (use `'use client'` only when needed)  
✓ Prefer async/await over `.then()` chains  
✓ Use utility-first Tailwind CSS (no custom CSS)  
✓ Use relative database queries (not raw SQL)    
✓ Check import paths use `@/` aliases  
✓ Include proper error handling and loading states  

### Never
✗ Use `any` types  
✗ Use `className` with dynamic template strings (`bg-${color}-500`)  
✗ Mix styled-components or CSS-in-JS (Tailwind only)  
✗ Use class components  
✗ Fetch data in client components (use Server Components)  
✗ String-concatenate SQL queries  
✗ Skip type definitions for props or return values  
✗ Use default exports mixed with named exports in the same file (be consistent)

## When Adding New Code

**🚨 MANDATORY FIRST STEP: READ THE RELEVANT /docs FILE 🚨**

1. **Read the relevant standard** in `/docs/` for that code type — THIS IS NOT OPTIONAL
2. **Ensure TypeScript** - no `any`, explicit types
6. **Reference Next.js 16** docs if uncertain about framework behavior

## Project Structure Reference

```
linkshortnerproject/
├── app/                 # Next.js App Router
├── components/          # React components (ui/, layout/, features/)
├── DB/                  # Database schema and client
├── lib/                 # Utilities and helpers
├── hooks/               # Custom React hooks
├── constants/           # Application constants
├── types/               # TypeScript type definitions
└── docs/                # This documentation (coding standards)
```

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run lint      # Run ESLint
npm run start     # Start production server
```

## Environment Setup

Create `.env.local` in project root:

```
# Database
DATABASE_URL=postgresql://...

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Optional
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Detailed Documentation

All coding standards are documented in separate markdown files in the `/docs` directory. **ALWAYS refer to the relevant file before generating any code:**




## Questions or Issues?

1. **Check the relevant documentation file** listed above
2. **Review existing code** in the project for patterns
3. **Refer to official docs** if needed:
   - Next.js: `node_modules/next/dist/docs/`
   - Drizzle ORM: `node_modules/drizzle-orm/`
   - Tailwind CSS: `node_modules/tailwindcss/`
4. **Check CLAUDE.md** for session-specific instructions

## Key Constraints

### TypeScript
- ✅ Strict mode ENABLED - must use explicit types
- ✅ No `any` type allowed
- ✅ All function signatures require return types
- ✅ All components require prop interfaces

### Components
- ✅ Use Server Components by default
- ✅ Only use `'use client'` when hooks or interactivity needed
- ✅ Named exports preferred (consistent with codebase)
- ✅ Component props defined with interfaces

### Styling
- ✅ Tailwind CSS v4 utility-first only
- ✅ No custom CSS or styled-components
- ✅ No dynamic class generation (`bg-${color}-500`)
- ✅ Use `clsx` or `cn()` for conditional styles

### Database
- ✅ Drizzle ORM for all queries
- ✅ Parameterized queries only (no string concatenation)
- ✅ Validate input before database operations
- ✅ Proper error handling and logging

### Architecture
- ✅ Fetch data in Server Components
- ✅ Use Server Actions for mutations
- ✅ Client Components only for interactivity
- ✅ Import paths use `@/` alias

## Development Workflow

### Before Starting
1. **READ the relevant `/docs` file FIRST** — This is mandatory before writing any code
2. Check existing similar code in project
3. Review naming conventions for your task type
4. Plan error handling and validation

### While Developing
1. Keep files focused and single-responsibility
2. Include JSDoc for complex functions
3. Add proper error handling
4. Use TypeScript strict types
5. Test locally with `npm run dev`

### Before Committing
1. Run `npm run lint` to check code
2. Verify TypeScript strict mode compliance
3. Test error cases
4. Update documentation if needed

## Tech Stack Details

### Frontend
- **Next.js 16**: Latest version with App Router
- **React 19**: Latest with improved compiler
- **TypeScript 5**: Strict mode enabled
- **Tailwind CSS 4**: PostCSS v4
- **shadcn/ui + Radix**: Pre-built accessible components

### Database & Backend
- **PostgreSQL**: Via Neon serverless
- **Drizzle ORM 0.45**: Type-safe queries
- **Database URL**: Via environment variable

### Authentication
- **Clerk 7.4**: Full auth system with webhooks
- **Public & Secret Keys**: In environment

### Development
- **ESLint 9**: Static code analysis
- **tsx 4.22**: TypeScript execution
- **drizzle-kit**: Schema migrations

## Performance Best Practices

- Use Server Components for data fetching
- Implement Suspense boundaries for slow queries
- Optimize images with Next.js Image component
- Paginate large datasets
- Use database indexes for common queries
- Minimize client-side JavaScript
- Cache frequently accessed data

## Security Best Practices

- Validate all user input
- Use parameterized database queries
- Store secrets in environment variables
- Use Clerk for authentication
- Implement proper error handling
- Never expose database errors to clients
- Sanitize HTML content
- Use HTTPS in production

---

**Last Updated**: May 27, 2026  
**Next.js Version**: 16.2.6  
**React Version**: 19.2.4  
**TypeScript Version**: 5

For AI Agents: Always consult the documentation files BEFORE writing any code. The coding standards in `/docs/` are definitive for this project.
