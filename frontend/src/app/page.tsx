"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  CheckCircle,
  BarChart3,
  ArrowRight,
  Upload,
  ScanLine,
  ClipboardCheck,
  Share2,
  Users,
  ShieldCheck,
  Zap,
  BookOpen,
  Settings,
  UserCheck,
} from "lucide-react";

/* ─────────────────────── DATA ─────────────────────── */

const stats = [
  { number: "10x", description: "Faster grading than manual review" },
  { number: "98%", description: "Accuracy on structured answer sheets" },
  { number: "5k+", description: "Answer sheets processed per session" },
];

const features = [
  {
    icon: ScanLine,
    title: "AI-Powered Scanning",
    description:
      "Automatically scan and parse handwritten or printed answer sheets with high accuracy.",
  },
  {
    icon: ClipboardCheck,
    title: "Rubric-Based Grading",
    description:
      "Define custom rubrics per question; the system grades consistently according to your criteria.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Visualise class performance, question difficulty, and grade distributions at a glance.",
  },
  {
    icon: ShieldCheck,
    title: "Tamper-Proof Records",
    description:
      "Every result is logged with a full audit trail, keeping grades secure and verifiable.",
  },
  {
    icon: Zap,
    title: "Bulk Processing",
    description:
      "Upload entire exam batches and receive graded results within minutes, not days.",
  },
  {
    icon: BookOpen,
    title: "Multi-Subject Support",
    description:
      "Works across MCQs, short answers, and structured questions for any subject area.",
  },
];

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Sheets",
    description: "Scan or photograph answer sheets and upload them in bulk.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "AI Reads & Parses",
    description: "Our model extracts answers and maps them to your question set.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Auto-Grade",
    description: "Each response is scored against your rubric instantly.",
  },
  {
    number: "04",
    icon: Share2,
    title: "Publish Results",
    description: "Export reports or publish directly to your institution portal.",
  },
];

const roles = [
  {
    icon: UserCheck,
    title: "Examiners",
    description:
      "Set up rubrics once and let AutoGrade handle hundreds of scripts consistently and fairly.",
    accent: "#378ADD",
  },
  {
    icon: Settings,
    title: "Administrators",
    description:
      "Oversee results, manage departments, and generate institutional reports from one dashboard.",
    accent: "#0C447C",
  },
  {
    icon: Users,
    title: "Students",
    description:
      "Receive detailed, transparent feedback faster than ever — know where you stand sooner.",
    accent: "#22C55E",
  },
];

/* ─────────────────────── COMPONENT ─────────────────────── */

export default function AutoGradeLanding() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-8 py-4">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-[#0C447C]" />
            <span className="font-bold text-lg text-[#0C447C]">AutoGrade</span>
          </Link>

          {/* Centre links */}
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-600 font-medium">
            <Link href="#features" className="hover:text-[#0C447C] transition-colors">Features</Link>
            <Link href="#how-it-works" className="hover:text-[#0C447C] transition-colors">How it works</Link>
            <Link href="#institutions" className="hover:text-[#0C447C] transition-colors">For institutions</Link>
            <Link href="#contact" className="hover:text-[#0C447C] transition-colors">Contact</Link>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="border border-[#0C447C] text-[#0C447C] text-sm font-semibold px-5 py-2 rounded-md hover:bg-blue-50 transition-colors"
            >
              Login
            </Link>
            <Link
              href="#contact"
              className="bg-[#0C447C] text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-[#0a3a6b] transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white py-20 px-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[520px]">

          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <h1 className="text-6xl font-extrabold text-[#0C447C] leading-[1.05] mb-6">
              Grade smarter.<br />Teach better.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              AutoGrade uses AI to evaluate handwritten answer sheets — both MCQs and
              descriptive answers — so your teachers spend less time grading and more
              time teaching.
            </p>
            <div className="flex gap-4 flex-wrap mb-10">
              <Link
                href="#contact"
                className="bg-[#0C447C] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#0a3a6b] transition-colors shadow-sm text-sm"
              >
                Request a demo
              </Link>
              <Link
                href="#how-it-works"
                className="border border-[#0C447C] text-[#0C447C] font-semibold px-7 py-3.5 rounded-md hover:bg-blue-50 transition-colors text-sm"
              >
                See how it works
              </Link>
            </div>
            {/* Trust badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                CU
              </div>
              <span className="text-sm text-gray-500">Trusted by COMSATS University</span>
            </div>
          </motion.div>

          {/* Right — Grading Dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="w-full max-w-[560px] bg-[#f0f4fb] rounded-2xl p-6 shadow-sm">
              {/* Window chrome */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>

              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-semibold text-gray-800">Grading Dashboard</span>
                <span className="text-xs text-gray-400">Spring 2026</span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="text-2xl font-bold text-[#378ADD]">243</div>
                  <div className="text-xs text-gray-500 mt-1">Graded</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-green-50 rounded-xl p-4 shadow-sm"
                >
                  <div className="text-2xl font-bold text-green-600">18</div>
                  <div className="text-xs text-gray-500 mt-1">Pending</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="text-2xl font-bold text-purple-600">92%</div>
                  <div className="text-xs text-gray-500 mt-1">Accuracy</div>
                </motion.div>
              </div>

              {/* Bar chart */}
              <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
                <div className="flex items-end gap-2 h-28">
                  {[55, 75, 90, 60, 45, 85, 70].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.8 + i * 0.07, duration: 0.4, ease: "easeOut" }}
                      style={{ height: `${h}%`, transformOrigin: "bottom" }}
                      className="flex-1 bg-[#378ADD] rounded-t-md opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              {/* Bottom result row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="bg-white rounded-xl px-4 py-3 shadow-sm flex items-center gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                <div>
                  <div className="text-sm font-medium text-gray-800">Question 3 – CLO 2.1</div>
                  <div className="text-xs text-gray-400">AI Score: 8/10 · Reviewed ✓</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-gray-50 py-12 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#0C447C] mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 bg-blue-50 text-[#378ADD] text-sm font-semibold rounded-full mb-4 uppercase tracking-wide">
              Core Features
            </div>
            <h2 className="text-4xl font-bold text-[#0C447C]">
              Everything your institution needs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-xl border border-gray-200 hover:border-[#378ADD] hover:shadow-xl transition-all cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-[#378ADD] flex items-center justify-center mb-4 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-[#0C447C] group-hover:text-white transition-colors" strokeWidth={2} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-8 bg-gradient-to-b from-gray-50 to-blue-50/30">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0C447C]">
              From paper to published results in minutes
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="absolute top-16 h-0.5 bg-[#378ADD]/30 hidden lg:block"
              style={{ left: "12.5%", right: "12.5%" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-50 relative z-10 cursor-pointer"
                      >
                        <Icon className="w-12 h-12 text-[#378ADD]" strokeWidth={2} />
                      </motion.div>
                      <div className="inline-block px-4 py-1 bg-[#0C447C] text-white text-sm font-bold rounded-full mb-3">
                        Step {step.number}
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>

                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                        className="absolute top-16 -right-3 z-0 hidden lg:block"
                      >
                        <ArrowRight className="w-6 h-6 text-[#378ADD]" />
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── ROLES ── */}
      <section id="institutions" className="py-20 px-8 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#0C447C]">
              Built for everyone in your institution
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="p-8 rounded-xl border-2 hover:shadow-2xl transition-all cursor-pointer"
                  style={{ borderColor: role.accent + "40" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: role.accent + "15" }}
                  >
                    <Icon className="w-8 h-8" style={{ color: role.accent }} strokeWidth={2} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{role.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{role.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0C447C] text-white py-16 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6" />
                <span className="font-bold text-xl">AutoGrade</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                AI-assisted grading for academic institutions
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                {["#features", "#how-it-works", "#pricing", "#security"].map((href, i) => (
                  <li key={i}>
                    <Link href={href} className="hover:text-white transition-colors capitalize">
                      {href.replace("#", "").replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                {["Documentation", "Help Center", "Training", "System Status"].map((label, i) => (
                  <li key={i}>
                    <Link href="#" className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div id="contact">
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <a href="mailto:info@autograde.pk" className="hover:text-white transition-colors">
                    info@autograde.pk
                  </a>
                </li>
                <li>
                  <a href="tel:+92512345678" className="hover:text-white transition-colors">
                    +92 51 234 5678
                  </a>
                </li>
                <li className="pt-2">
                  COMSATS University
                  <br />
                  Wah Campus
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-blue-700">
            <p className="text-sm text-blue-100">
              © 2025 AutoGrade — COMSATS University Islamabad, Wah Campus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}