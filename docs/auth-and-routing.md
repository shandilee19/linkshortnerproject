# Authentication & Routing Standards

## Authentication Requirements

### Clerk is the Single Auth Provider

- **ALL** authentication must use Clerk
- **NO** alternative auth methods are permitted
- Clerk v7.4+ is the source of truth for user identity
- Environment variables must be set:
  - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (public)
  - `CLERK_SECRET_KEY` (secret)

### Clerk Integration Points

1. **Wrap app with Clerk provider** in root layout
2. **Use Clerk hooks** for auth state:
   - `useUser()` - current user object
   - `useAuth()` - auth tokens and session info
   - `useSignIn()` / `useSignUp()` - auth flows
3. **Use Clerk components** for UI:
   - `<SignIn />` - sign in form
   - `<SignUp />` - sign up form
   - `<UserButton />` - user menu
4. **Server-side auth** with `auth()` function in Server Components/Actions

## Routing Rules

### Protected Routes

**The `/dashboard` route is protected and requires authentication:**

- Redirect unauthenticated users to homepage (`/`)
- Implement protection in the layout or using middleware
- Use `useUser()` in Client Components or `auth()` in Server Components
- Show loading state while checking auth

### Homepage (`/`) Routing Logic

**Logged-in users are redirected to `/dashboard`:**

- Check user status on homepage load
- If authenticated → redirect to `/dashboard`
- If unauthenticated → display homepage normally

### Suggested Implementation Pattern

```typescript
// In app/page.tsx or Server Component
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  
  if (userId) {
    redirect("/dashboard");
  }
  
  // Render homepage for unauthenticated users
  return (/* homepage content */);
}
```

## Modal Authentication Flows

### Sign In / Sign Up Modals

- Clerk sign-in and sign-up flows **MUST** launch as modals
- Use Clerk's modal components, not full-page forms
- Modals should:
  - Overlay the current page
  - Allow users to close and return to previous view
  - Redirect to `/dashboard` upon successful authentication

### Example Modal Implementation

```typescript
// Client Component with modal trigger
'use client';

import { SignIn } from "@clerk/nextjs";

export function AuthModal() {
  return (
    <div className="modal-overlay">
      <SignIn routing="hash" />
    </div>
  );
}
```

## Authentication Checklist

Before implementing auth features:

- ✅ Verify Clerk environment variables are set
- ✅ Clerk provider wraps the entire app
- ✅ `/dashboard` redirects unauthenticated users
- ✅ Homepage redirects authenticated users to `/dashboard`
- ✅ Sign in/sign up use modal components
- ✅ No alternative auth methods exist in codebase
- ✅ Server Components use `auth()` function
- ✅ Client Components use `useUser()` hook

## Key Rules

### Always
✅ Use Clerk for ALL authentication  
✅ Use modal for sign-in/sign-up flows  
✅ Protect `/dashboard` from unauthenticated access  
✅ Redirect authenticated homepage visitors to `/dashboard`  
✅ Use explicit auth checks in protected routes  
✅ Handle loading and error states properly  

### Never
❌ Use alternative authentication libraries  
❌ Implement custom JWT/session logic  
❌ Create full-page sign in/sign up forms  
❌ Store user credentials in database  
❌ Skip auth checks on protected routes  
❌ Mix Clerk with other auth methods  

## Testing Auth Flows

1. Test unauthenticated homepage access
2. Test authenticated user redirect from homepage
3. Test sign-in modal workflow
4. Test dashboard access protection
5. Test sign-out behavior
6. Test session persistence

---

**Last Updated**: May 27, 2026  
**Clerk Version**: 7.4+  
**Next.js Version**: 16+
