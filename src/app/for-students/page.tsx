"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  GraduationCap, 
  Clock, 
  Brain,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  BookOpen,
  PenTool,
  Trophy,
  Users,
  Zap,
  MessageSquare,
  Calendar,
  Target,
  Menu,
  X
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export default function ForStudentsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/docs/quickstart", label: "Get Started", primary: true }
  ];
  
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Syllabus</span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    item.primary
                      ? "rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                      : "text-sm font-medium hover:text-primary transition-colors"
                  }
                >
                  {item.label}
                </Link>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t bg-background/95 backdrop-blur">
              <nav className="container mx-auto px-4 py-4 space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      item.primary
                        ? "block w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors text-center"
                        : "block text-sm font-medium hover:text-primary transition-colors"
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              Free Pro Plan for .edu emails
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Your Personal AI Tutor
              <span className="block text-primary">Right Inside Canvas</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Ace your classes, save hours of work, and build skills for the modern workforce—all with your 24/7 AI study partner.
            </p>
            
            {/* Primary CTA */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/quickstart"
                className="group inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Get Free Pro Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-sm text-muted-foreground">
                No credit card required • Free forever with .edu email
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm font-medium">4.9/5 from 2,000+ students</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              We Get It. College is Hard.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Syllabus solves your biggest academic challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Problem/Solution pairs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Spending hours on assignments?</h3>
                <p className="text-muted-foreground">
                  Our AI helps you create outlines, draft essays, and format papers in minutes—saving you 1+ hour per assignment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Brain className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Struggling with complex subjects?</h3>
                <p className="text-muted-foreground">
                  Get instant explanations, practice problems, and study guides tailored to your course materials and learning style.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <PenTool className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Writer's block killing your GPA?</h3>
                <p className="text-muted-foreground">
                  Break through blocks with AI brainstorming, get instant feedback on drafts, and ensure perfect grammar and citations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Missing deadlines and falling behind?</h3>
                <p className="text-muted-foreground">
                  Never miss another deadline with smart reminders, assignment tracking, and prioritized to-do lists synced with Canvas.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features for Students */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features designed specifically for student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Assignment Helper</h3>
              <p className="text-muted-foreground mb-4">
                Automatically reads your Canvas assignments and helps you start with outlines, research, and first drafts.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Auto-generates essay outlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Finds relevant sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Checks requirements</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Brain className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Study Buddy</h3>
              <p className="text-muted-foreground mb-4">
                Get instant help understanding lectures, readings, and complex topics—like having a TA available anytime.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Explains difficult concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Creates practice problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Summarizes readings</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Grade Tracker Pro</h3>
              <p className="text-muted-foreground mb-4">
                Monitor your progress across all courses and get AI-powered recommendations to improve your GPA.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time grade updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>GPA predictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Study recommendations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <MessageSquare className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Writing Assistant</h3>
              <p className="text-muted-foreground mb-4">
                Improve your writing with grammar checks, style suggestions, and proper citations in any format.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Grammar & clarity fixes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>APA/MLA/Chicago citations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Plagiarism checker</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Group Project Manager</h3>
              <p className="text-muted-foreground mb-4">
                Coordinate with teammates, divide tasks fairly, and ensure everyone stays on track for group success.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Task assignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Progress tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Meeting summaries</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Trophy className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Career Prep Tools</h3>
              <p className="text-muted-foreground mb-4">
                Build real-world skills with resume help, interview prep, and LinkedIn optimization for your future.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Resume builder</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Interview practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Skill assessments</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Join 50,000+ Students Getting Better Grades
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real stories from real students using Syllabus
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "This tool saved my semester! I went from a C+ to an A- in Biology after using the study guides and practice problems. The 24/7 help is a game-changer."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">SK</span>
                </div>
                <div>
                  <p className="font-medium">Sarah K.</p>
                  <p className="text-sm text-muted-foreground">Pre-Med Student, UCLA</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "I save at least 2 hours on every essay now. The outline generator and citation tool are incredible. Plus, my writing has actually improved!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">MR</span>
                </div>
                <div>
                  <p className="font-medium">Marcus R.</p>
                  <p className="text-sm text-muted-foreground">English Major, NYU</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "The grade tracker helped me identify which classes needed more attention. Raised my GPA from 3.2 to 3.7 in one semester!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">AL</span>
                </div>
                <div>
                  <p className="font-medium">Ashley L.</p>
                  <p className="text-sm text-muted-foreground">Business Student, UT Austin</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary">87%</p>
              <p className="mt-2 text-sm text-muted-foreground">Report saving 1+ hour per week</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary">3.5→3.8</p>
              <p className="mt-2 text-sm text-muted-foreground">Average GPA improvement</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="mt-2 text-sm text-muted-foreground">Say it helps with job prep</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary">50k+</p>
              <p className="mt-2 text-sm text-muted-foreground">Active student users</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to Transform Your Academic Life?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Join thousands of students already succeeding with Syllabus. Free forever with your .edu email.
            </p>
            
            <div className="mt-8 flex flex-col items-center">
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center rounded-lg bg-background px-8 py-4 text-lg font-semibold text-foreground hover:bg-secondary transition-colors group"
              >
                Try the beta
                <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
              
              <div className="mt-4 flex items-center gap-6 text-sm text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Full Pro features</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Syllabus</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                AI-powered productivity for Canvas LMS
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/features" className="text-muted-foreground hover:text-foreground">Features</Link></li>
                <li><Link href="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
                <li><Link href="/docs" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/for-students" className="text-muted-foreground hover:text-foreground">For Students</Link></li>
                <li><Link href="/for-educators" className="text-muted-foreground hover:text-foreground">For Educators</Link></li>
                <li><Link href="/for-productivity" className="text-muted-foreground hover:text-foreground">For Productivity</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/jamubc/syllabus" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Discord</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Syllabus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}