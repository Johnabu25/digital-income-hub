import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: EliteDigitalHubLandingPage,
  head: () => ({
    meta: [
      { title: "Elite Digital Hub — TikTok Shop, Dropshipping & AI Training" },
      {
        name: "description",
        content:
          "A complete step-by-step system to build a real online income from your phone with TikTok Shop, dropshipping, paid ads and AI automation.",
      },
      { property: "og:title", content: "Elite Digital Hub" },
      {
        property: "og:description",
        content:
          "Build a real online income with TikTok Shop, dropshipping and AI. Beginner friendly, action based, income focused.",
      },
    ],
  }),
});

function EliteDigitalHubLandingPage() {
  const modules = [
    "Welcome (Start here)",
    "Affirmation & Success Mindset",
    "TikTok Shop (Foundation)",
    "TikTok Shop Seller Dropshipping",
    "TikTok Ads (Scaling strategy)",
    "Facebook & Instagram Ads",
    "Snapchat Ads",
    "TikTok Live (Daily income method)",
    "Content With AI",
    "Content That Converts",
    "AI Twin (Build your digital presence)",
    "AI Automation (Save time & scale)",
    "AI Agents / Chatbots (Automated sales)",
    "AI Video Creation",
    "WhatsApp Automation (Close more sales)",
    "Prompts Vault (Done-for-you scripts & ideas)",
    "Replay Vault (Never miss anything)",
    "Book 1:1 With Me (Personal support & guidance)",
  ];

  const outcomes = [
    "Build a profitable TikTok Shop from scratch",
    "Start dropshipping without holding inventory",
    "Find winning products that actually sell",
    "Create high-converting content that brings daily sales",
    "Use TikTok Live to generate income in real time",
    "Run paid ads on TikTok, Facebook, Instagram and Snapchat",
    "Use AI tools to work smarter, not harder",
    "Automate your business and scale faster",
    "Build multiple income streams online",
  ];

  const audience = [
    "You want to start making money online, but don’t know how",
    "You’re tired of relying on one income",
    "You’re a busy mum or beginner looking for flexibility",
    "You want a simple system that actually works",
    "You’re ready to take action and change your situation",
  ];

  const bonuses = ["Ongoing updates", "New strategies", "Support & guidance"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-fuchsia-50 text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(217,70,239,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-pink-700 shadow-sm backdrop-blur">
                ELITE DIGITAL HUB
              </div>
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                Build a real online income with{" "}
                <span className="text-pink-600">TikTok Shop</span>, dropshipping and{" "}
                <span className="text-fuchsia-600">AI</span>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                This is not just another course. It is a complete step-by-step system designed to
                help beginners build a real online income from their phone, even if they are
                starting from zero.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://elitedigitalnetwork.info/shop/bb476594-03e1-4671-9f80-4e0a5f56b09e"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-pink-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:bg-pink-700"
                >
                  ACCESS COMMUNITY
                </a>
                <a
                  href="https://selar.com/67417f4761"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-pink-200 bg-white px-6 py-4 text-base font-semibold text-pink-700 shadow-sm transition hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50"
                >
                  BUY NOW
                </a>
              </div>
              <div className="mt-6 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
                <div className="rounded-xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-pink-100">
                  WhatsApp:{" "}
                  <a
                    className="font-semibold text-pink-700"
                    href="https://wa.me/447425890099"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +44 7425 890099
                  </a>
                </div>
                <div className="rounded-xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-pink-100">
                  Beginner friendly • Action based • Income focused
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2rem] border border-pink-100 bg-white p-8 shadow-2xl shadow-pink-100">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                      Inside the hub
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900">What you’ll learn</h2>
                  </div>
                  <div className="rounded-2xl bg-pink-100 px-4 py-2 text-sm font-bold text-pink-700">
                    Complete System
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {outcomes.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-gradient-to-br from-pink-50 to-fuchsia-50 p-4 text-sm font-medium text-slate-700 ring-1 ring-pink-100"
                    >
                      ✨ {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-pink-100 ring-1 ring-pink-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
              Why this is different
            </p>
            <p className="mt-3 text-slate-600">
              This is not theory. It is a practical blueprint you can actually follow to build a
              system that can generate income from your phone.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-pink-100 ring-1 ring-pink-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">
              What it takes
            </p>
            <p className="mt-3 text-slate-600">
              Results come from consistency, action and applying what you learn. This is not a
              get-rich-quick scheme.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-lg shadow-pink-100 ring-1 ring-pink-100">
            <p className="text-sm font-semibold uppercase tracking-wide text-pink-600">Best for</p>
            <p className="mt-3 text-slate-600">
              Beginners, busy mums and anyone ready to create more freedom with a simple system
              that actually works.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-pink-100 ring-1 ring-pink-100">
            <h2 className="text-3xl font-bold text-slate-900">Full training system</h2>
            <p className="mt-3 text-slate-600">
              Start from the first module, follow the process step by step and implement daily.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {modules.map((module) => (
                <div
                  key={module}
                  className="rounded-2xl border border-pink-100 bg-pink-50/70 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  👉 {module}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-gradient-to-br from-pink-600 to-fuchsia-600 p-8 text-white shadow-xl shadow-pink-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">
                This is for you if
              </p>
              <div className="mt-6 space-y-4">
                {audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/10 p-4 text-sm leading-6 backdrop-blur"
                  >
                    💜 {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-pink-100 ring-1 ring-pink-100">
              <h3 className="text-2xl font-bold text-slate-900">Bonus access</h3>
              <div className="mt-5 space-y-3">
                {bonuses.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-fuchsia-50 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-fuchsia-100"
                  >
                    ✨ {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                Important
              </p>
              <h2 className="mt-3 text-3xl font-bold">No refund policy</h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Due to the digital nature of this training hub, all payments are final and
                non-refundable. Once access has been granted, no refunds, cancellations or
                chargebacks will be accepted.
              </p>
              <p className="mt-4 max-w-2xl text-slate-300">
                By joining, you understand and agree that results are based on your own effort,
                consistency and implementation of the training provided.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
                Final message
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-200">
                You didn’t land here by accident. This could be the moment that changes your
                income, your confidence and your lifestyle.
              </p>
              <p className="mt-4 text-2xl font-bold text-white">
                Are you ready to take this seriously?
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://selar.com/67417f4761"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-pink-500 px-6 py-4 text-base font-semibold text-white transition hover:bg-pink-400"
                >
                  BUY NOW
                </a>
                <a
                  href="https://elitedigitalnetwork.info/shop/bb476594-03e1-4671-9f80-4e0a5f56b09e"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/15"
                >
                  ACCESS COMMUNITY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-12">
        <div className="flex flex-col gap-4 rounded-[2rem] border border-pink-100 bg-white p-6 text-sm text-slate-600 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-bold text-slate-900">ELITE DIGITAL HUB</span> • Build with
            strategy, consistency and AI.
          </div>
          <a
            href="https://wa.me/447425890099"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-pink-700"
          >
            Contact on WhatsApp: +44 7425 890099
          </a>
        </div>
      </footer>
    </div>
  );
}
