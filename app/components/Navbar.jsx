"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";
import { Dumbbell } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-bold text-xl tracking-wider text-white"
        >
          {/* Modern Next.js img tag ba regular img tag */}
          <img
            src="/logo.png"
            alt="FitLog Logo"
            className="w-8 h-8 object-contain"
          />
          <span>FITLOG</span>
        </Link>

        {/* Middle: Links */}
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className={`font-medium text-sm transition-colors ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Workout
          </Link>
          <Link
            href="/my-plan"
            className={`font-medium text-sm transition-colors ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right: Badges */}
        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 bg-[#ccff00] text-black font-semibold text-xs px-3 py-1.5 rounded-full hover:bg-lime-400 transition"
          >
            <span>Plan</span>
            <span className="bg-black text-white px-1.5 py-0.5 rounded-full text-[10px]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 border border-zinc-700 text-zinc-300 font-semibold text-xs px-3 py-1.5 rounded-full hover:border-zinc-500 transition"
          >
            <span>Saved</span>
            <span className="bg-zinc-800 text-zinc-300 px-1.5 py-0.5 rounded-full text-[10px]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
