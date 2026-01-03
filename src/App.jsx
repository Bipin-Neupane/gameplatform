import {
  ShieldCheck,
  Flame,
  Stars,
  Rocket,
  Gamepad2,
  Zap,
  Send,
  MessageCircle,
  Instagram,
} from "lucide-react";


const games = [
  { name: "Fire Kirin", icon: Flame },
  { name: "Milky Way", icon: Stars },
  { name: "GameVault", icon: Gamepad2 },
  { name: "Juwa", icon: Zap },
];


export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white">

      {/* TOP SECURITY BAR */}
      <div className="border-b border-white/10 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-center items-center gap-2 text-sm text-emerald-400 font-semibold">
          <ShieldCheck size={16} />
          Security Verified • Instant Cashouts
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Play Smart. Cash Out Fast.
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Get instant access to Fire Kirin, Juwa, GameVault, Milky Way and more.
          Enjoy free play, referral bonuses, and fast support.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#social" className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold">
            Join & Get 100% Deposit Bonus
          </a>
          <a href="#games" className="px-8 py-4 rounded-xl border border-white/20">
            View Games
          </a>
        </div>
      </section>

      {/* TRUST STRIP (AUTHORITY BAR) */}
      <section className="border-y border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <span>✔ 1,000+ Active Players</span>
          <span>✔ Instant Cashout</span>
          <span>✔ 24/7 Live Support</span>
          <span>✔ Verified & Encrypted Payouts</span>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Supported Games
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:scale-105 transition"
            >
              <game.icon size={44} className="text-cyan-400" />
              <p className="font-semibold text-center">{game.name}</p>
            </div>
          ))}
        </div>
      </section>


      {/* BONUSES */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Player Bonuses
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Bonus title="$10 Free Play" text="Every new user gets $10 free play." />
          <Bonus title="$10 Referral Bonus" text="Earn $10 for every referral." />
          <Bonus title="20% Reload Bonus" text="Regular players receive extra credit." />
          <Bonus title="Instant Cashout" text="Fast and reliable payouts." />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Trusted by Real Players
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Testimonial text="Cashout was instant and support helped me set up my account fast." name="Jason M." />
          <Testimonial text="Very legit platform. Bonuses are added instantly." name="Amanda R." />
          <Testimonial text="Tried many sites, this one actually pays on time." name="Luis T." />
        </div>
      </section>

      {/* SINGLE FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <FAQ q="Is this platform safe?" a="Yes. All transactions are encrypted and payouts are verified manually." />
          <FAQ q="How fast is cashout?" a="Most payouts are processed within 5–10 minutes." />
          <FAQ q="How do I get $10 free play?" a="Join us through Telegram, Messenger, or Instagram and our support team will assist you." />
          <FAQ q="Which games are supported?" a="Fire Kirin, Milky Way, Orion Stars, GameVault, and Juwa." />
        </div>
      </section>

      {/* SOCIAL CTA */}
      <section id="social" className="text-center py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Join Us Now</h2>

        <div className="flex justify-center gap-4 flex-wrap">
          <a className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
             href="https://t.me/zombie2k23"
            target="_blank"
            rel="noopener noreferrer">
            <Send size={18} /> Telegram
          </a>

          <a className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
             href="https://m.me/bipin.neupane.660022"
            target="_blank"
            rel="noopener noreferrer">
            <MessageCircle size={18} /> Messenger
          </a>

          {/* <a className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
            <Instagram size={18} /> Instagram
          </a> */}
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-4 inset-x-4 z-50 sm:hidden">
        <a
        href="#social"
        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold shadow-2xl"
        >
          <ShieldCheck size={18} /> Join Securely & Play
        </a>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Game Platform. All rights reserved.
      </footer>

    </div>
  );
}

/* COMPONENTS */

function Bonus({ title, text }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}

function Testimonial({ text, name }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <p className="text-gray-300 mb-4">“{text}”</p>
      <p className="font-semibold">{name}</p>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <details className="bg-white/5 border border-white/10 rounded-xl p-5">
      <summary className="cursor-pointer font-semibold">{q}</summary>
      <p className="text-gray-400 mt-3">{a}</p>
    </details>
  );
}
