import React from "react";
import { Rocket, CheckCircle, Flame, Star, Coins, Vault, Send, Instagram, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0b0f1a] to-[#1b2350] text-gray-100 font-sans">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-cyan-400/10 text-cyan-300 mb-6">
            <Rocket size={16} /> Fast setup • Instant cash out
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Play Smarter. <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">Earn More.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-8">
            We help players get started instantly by providing game points, account setup assistance,
            and exclusive bonuses for the most popular skill-based games.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#social" className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-black hover:opacity-90 transition">
              Join Now
            </a>
            <a href="#games" className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition">
              View Games
            </a>
          </div>
        </div>

        {/* HERO CARD */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
          <ul className="space-y-5">
            {["$10 Free Play for New Users", "$10 Bonus Per Referral", "Instant Cash Out", "20% Bonus for Regular Players"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle className="text-emerald-400" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Supported Games</h2>
          <p className="text-gray-400">Points and setup assistance for top platforms</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <GameCard icon={<Flame />} title="Fire Kirin" />
          {/* <GameCard icon={<Star />} title="Milky Way" /> */}
          {/* <GameCard icon={<Star />} title="Orion Stars" /> */}
          <GameCard icon={<Vault />} title="Gamevault" />
          <GameCard icon={<Coins />} title="Juwa" />
        </div>
      </section>

      {/* BONUSES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Bonuses & Rewards</h2>
          <p className="text-gray-400">More value for every player</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BonusCard title="$10 Free Play" desc="Free credits for every new user." />
          <BonusCard title="$10 Referral Bonus" desc="Earn rewards for every referral." />
          <BonusCard title="Instant Cash Out" desc="Fast and reliable withdrawals." />
          <BonusCard title="20% Regular Bonus" desc="Extra bonus for loyal players." />
        </div>
      </section>

      {/* SOCIAL */}
      <section id="social" className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-400 mb-10">Reach us instantly on your favorite platform</p>

        <div className="flex justify-center gap-6">
          <SocialButton icon={<Send />} />
          <SocialButton icon={<MessageCircle />} />
          <SocialButton icon={<Instagram />} />
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2025 Your Platform Name. All rights reserved.
      </footer>
    </div>
  );
}

function GameCard({ icon, title }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 transition">
      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center text-black mb-4">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
    </div>
  );
}

function BonusCard({ title, desc }) {
  return (
    <div className="bg-gradient-to-b from-white/5 to-white/0 border border-white/10 rounded-2xl p-6">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

function SocialButton({ icon }) {
  return (
    <a href="#" className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-500 hover:text-black transition">
      {icon}
    </a>
  );
}
