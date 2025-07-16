"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  GraduationCap, 
  Check,
  X,
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  Shield,
  Zap,
  Star,
  Info,
  Menu
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export default function PricingPage() {
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Simple, Transparent Pricing
              <span className="block text-primary">For Everyone</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Start free, upgrade when you need more. Special pricing for students and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Free, With a UBC student email</h3>
                <p className="mt-2 text-muted-foreground">Perfect for getting started</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  Free with .edu emails
                </div>
              </div>

              <Link
                href="/docs/quickstart"
                className="w-full mb-6 inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-3 text-base font-semibold hover:bg-secondary transition-colors"
              >
                Try the beta
              </Link>

              <div className="space-y-4">
                <h4 className="font-semibold">Everything you need to start:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Canvas integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">50 AI queries per month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Assignment tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic grade viewing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Citation generator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Advanced AI features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Priority support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pro Tier (Most Popular) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border-2 border-primary bg-card p-8"
            >
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  <Star className="h-3 w-3" />
                  Most Popular
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="mt-2 text-muted-foreground">For serious students</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <Link
                href="/docs/quickstart"
                className="w-full mb-6 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Pro
              </Link>

              <div className="space-y-4">
                <h4 className="font-semibold">Everything in Free, plus:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited AI queries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Smart assignment assistant</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 AI tutoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced writing tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Grade predictions & insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Study plan generation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority email support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">API access (100k calls/mo)</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Team Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-8"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Team</h3>
                <p className="mt-2 text-muted-foreground">For study groups & clubs</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$5</span>
                  <span className="text-muted-foreground">/user/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Minimum 4 users</p>
              </div>

              <Link
                href="/contact-sales"
                className="w-full mb-6 inline-flex items-center justify-center rounded-lg border border-border bg-background px-4 py-3 text-base font-semibold hover:bg-secondary transition-colors"
              >
                Contact Sales
              </Link>

              <div className="space-y-4">
                <h4 className="font-semibold">Everything in Pro, plus:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Shared workspace</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Group project management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Collaborative notes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Team analytics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Admin controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority chat support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Volume discounts available</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Special Offers */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary/5 border border-primary/20 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Free for Student Organizations</h3>
                  <p className="text-sm text-muted-foreground">
                    Registered student clubs and organizations get Team plan free. Apply with your organization details.
                  </p>
                  <Link href="/student-orgs" className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Apply now
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl bg-primary/5 border border-primary/20 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">API & Developer Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Build custom integrations with our powerful MCP API. Included in Pro plans and above.
                  </p>
                  <Link href="/docs/api" className="mt-2 inline-flex items-center text-sm font-medium text-primary hover:underline">
                    View API docs
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institution Pricing */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Institution & Enterprise Plans
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Custom solutions for universities, colleges, and school districts
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-8 lg:p-12">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold">Institution Plan</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Comprehensive solution for entire institutions with enterprise features and support.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Unlimited users across your institution</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>LTI 1.3 integration with Canvas</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>SAML SSO and enterprise authentication</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Admin dashboard and analytics</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>FERPA compliant with data security</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Dedicated success manager</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Professional development & training</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>24/7 priority support with SLA</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold mb-4">Flexible Pricing Options</h4>
                    <div className="space-y-4 mb-8">
                      <div className="rounded-lg border bg-background p-4">
                        <p className="font-medium">Per-Seat Pricing</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Starting at $4/user/month for 1,000+ seats
                        </p>
                      </div>
                      <div className="rounded-lg border bg-background p-4">
                        <p className="font-medium">Unlimited Site License</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Fixed annual fee for unlimited users
                        </p>
                      </div>
                      <div className="rounded-lg border bg-background p-4">
                        <p className="font-medium">FTE-Based Pricing</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Based on full-time equivalent students
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Free Pilot Program</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Try Syllabus with a department or college for 30 days, no commitment required.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="/contact-sales"
                      className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Get Custom Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link
                      href="/docs/pilot"
                      className="w-full inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold hover:bg-secondary transition-colors"
                    >
                      Try the beta
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-6"
            >
              <h3 className="font-semibold mb-2">How do I get the free Pro plan with my .edu email?</h3>
              <p className="text-muted-foreground">
                Simply sign up with your university email address (.edu) and the Pro plan will be automatically applied to your account for free. No credit card required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-6"
            >
              <h3 className="font-semibold mb-2">Can I switch between plans?</h3>
              <p className="text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-6"
            >
              <h3 className="font-semibold mb-2">What happens when I graduate?</h3>
              <p className="text-muted-foreground">
                You can keep using Syllabus! Your free Pro access continues for 6 months after graduation. After that, you can continue with the regular Pro plan or switch to Free.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-6"
            >
              <h3 className="font-semibold mb-2">Do you offer discounts for non-profits?</h3>
              <p className="text-muted-foreground">
                Yes! Non-profit organizations and educational institutions qualify for special pricing. Contact our sales team for details.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-6"
            >
              <h3 className="font-semibold mb-2">Is there a limit on AI usage?</h3>
              <p className="text-muted-foreground">
                The Free plan includes 50 AI queries per month. Pro and Team plans have unlimited AI queries. Institution plans can be customized based on your needs.
              </p>
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
              Start Your Academic Transformation Today
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Join thousands of students and educators already succeeding with Syllabus
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center rounded-lg bg-background px-8 py-4 text-lg font-semibold text-foreground hover:bg-secondary transition-colors group"
              >
                Try the beta
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link
                href="/contact-sales"
                className="inline-flex items-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              >
                Talk to Sales
              </Link>
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