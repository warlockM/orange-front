// app/platform/dashboard/page.js
import { getSession } from '@auth0/nextjs-auth0';


export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    // Redirect to login if not authenticated
    return (
      <div>
        <meta httpEquiv="refresh" content="0;url=/api/auth/login" />
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {session.user.name} 👋</h1>
      <p>You're logged in to your dashboard.</p>
    </div>
  );
}
