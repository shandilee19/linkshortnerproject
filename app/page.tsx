import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Share2,
  BarChart3,
  Lock,
  Clock,
  Layers,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Shortening",
    description: "Convert long URLs into memorable short links in seconds",
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Share shortened links across social media and messaging platforms",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Analytics & Tracking",
    description: "Monitor clicks, geographic data, and referrer information in real-time",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure & Private",
    description: "Your links are protected with secure encryption and privacy controls",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Link Expiration",
    description: "Set custom expiration dates and manage link lifecycles",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Custom Domains",
    description: "Use your own domain to maintain brand consistency",
  },
];

export default async function Home(): Promise<React.ReactNode> {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 sm:py-32">
        <div className="max-w-4xl w-full space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-black dark:text-white">
              Shorten Your Links,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Amplify Your Impact
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Create, manage, and track short links with powerful analytics.
              Perfect for social media, marketing campaigns, and sharing.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="text-base px-8 py-6">
              <a href="/dashboard">
                Get Started Free
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 py-20 sm:py-32 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to manage and optimize your links
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-800 hover:shadow-lg dark:hover:shadow-zinc-900/50 transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-blue-600 dark:text-blue-400">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join thousands of users who are already shortening and tracking their links.
            </p>
          </div>
          <Button asChild size="lg" className="text-base px-8 py-6">
            <a href="/dashboard">
              Start Shortening Links Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
