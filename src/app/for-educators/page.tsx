"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  BookOpen, 
  Clock, 
  Shield,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  BarChart,
  Lock,
  Award,
  FileText,
  Microscope,
  School,
  Briefcase,
  Building2,
  DollarSign,
  Menu,
  X,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

export default function ForEducatorsPage() {
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
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
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
              <Shield className="mr-2 h-4 w-4" />
              Enterprise-Ready • FERPA Compliant • LTI Integration
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Reclaim Your Time.
              <span className="block text-primary">Elevate Your Teaching.</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              The AI teaching & research assistant, natively integrated with Canvas. Save hours on administrative tasks while improving student outcomes.
            </p>
            
            {/* Primary CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-sales"
                className="group inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Request Institution Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs/pilot"
                className="inline-flex items-center rounded-lg border border-border bg-background px-8 py-4 text-lg font-semibold hover:bg-secondary transition-colors"
              >
                Start Free Pilot
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="font-medium">50+ Universities</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                <span className="font-medium">10,000+ Faculty</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="font-medium">40% Time Saved</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section for Institutions */}
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
              Proven ROI for Your Institution
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Measurable improvements in faculty productivity and student success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-8 text-center"
            >
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">$1.4M</h3>
              <p className="text-lg font-semibold mb-2">Annual Savings</p>
              <p className="text-muted-foreground">
                Average savings per 1,000 faculty members through improved efficiency and reduced administrative burden
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-8 text-center"
            >
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">10hrs</h3>
              <p className="text-lg font-semibold mb-2">Saved Per Week</p>
              <p className="text-muted-foreground">
                Faculty report saving 10+ hours weekly on grading, feedback, and administrative tasks
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-8 text-center"
            >
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">23%</h3>
              <p className="text-lg font-semibold mb-2">Better Outcomes</p>
              <p className="text-muted-foreground">
                Increase in student engagement and course completion rates with AI-enhanced instruction
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features for Faculty */}
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
              Tools That Transform Teaching
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empower faculty with AI assistance for every aspect of education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Course Design Assistant */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <School className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Intelligent Course Design Partner</h3>
                <p className="text-muted-foreground mb-4">
                  Build better courses in half the time with AI assistance for curriculum development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Generate aligned learning outcomes and objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Create engaging activities and assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Build differentiated materials for diverse learners</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Grading Assistant */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Efficient Grading & Feedback</h3>
                <p className="text-muted-foreground mb-4">
                  Provide richer feedback in less time while maintaining academic rigor.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>AI-assisted first-pass review for common issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Personalized feedback suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rubric-aligned consistency checking</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Research Assistant */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Microscope className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Research Acceleration Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Advance your scholarship with AI-powered research assistance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Literature synthesis and gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Grant proposal drafting assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Academic writing enhancement</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Admin Assistant */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Administrative Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Reduce time spent on repetitive tasks and focus on teaching.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Auto-generate syllabi and course materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Draft recommendation letters efficiently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Streamline email communications</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Security Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Your data security is our highest priority
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">FERPA Compliant</h3>
                  <p className="text-sm text-muted-foreground">
                    Full compliance with Family Educational Rights and Privacy Act requirements
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">256-bit Encryption</h3>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-grade AES encryption for data at rest and in transit
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">SOC 2 Type II</h3>
                  <p className="text-sm text-muted-foreground">
                    Audited and certified for security, availability, and confidentiality
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Building2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">SAML SSO</h3>
                  <p className="text-sm text-muted-foreground">
                    Single sign-on integration with your institution's identity provider
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <BarChart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Admin Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive dashboards for usage monitoring and insights
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Role-Based Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Granular permissions for administrators, faculty, and students
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/security"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                View complete security documentation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
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
              Trusted by Leading Universities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how institutions are transforming education with Syllabus
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-8"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">University of California</h3>
                <p className="text-sm text-muted-foreground">50,000+ Students • 3,000+ Faculty</p>
              </div>
              <blockquote className="text-lg mb-6">
                "Syllabus has revolutionized how our faculty approach teaching. The time savings alone justified the investment, but the improvement in student outcomes has been transformative."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">DR</span>
                </div>
                <div>
                  <p className="font-medium">Dr. Sarah Richardson</p>
                  <p className="text-sm text-muted-foreground">Dean of Academic Innovation</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">42%</p>
                  <p className="text-sm text-muted-foreground">Time saved</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">4.8/5</p>
                  <p className="text-sm text-muted-foreground">Faculty rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Adoption rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-8"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">MIT</h3>
                <p className="text-sm text-muted-foreground">12,000+ Students • 1,000+ Faculty</p>
              </div>
              <blockquote className="text-lg mb-6">
                "The research acceleration features have been game-changing for our faculty. Grant proposals that used to take weeks now take days, with better outcomes."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">JC</span>
                </div>
                <div>
                  <p className="font-medium">Dr. James Chen</p>
                  <p className="text-sm text-muted-foreground">Vice Provost for Research</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">3x</p>
                  <p className="text-sm text-muted-foreground">Research output</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$2.3M</p>
                  <p className="text-sm text-muted-foreground">Grants secured</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">15hrs</p>
                  <p className="text-sm text-muted-foreground">Weekly savings</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
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
              Simple Implementation Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From pilot to full deployment in weeks, not months
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Free Pilot Program (2-4 weeks)</h3>
                  <p className="text-muted-foreground">
                    Start with a department or college. We'll provide full support, training, and success metrics tracking.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">LTI Integration & SSO Setup (1-2 days)</h3>
                  <p className="text-muted-foreground">
                    Our team works with your IT department for seamless Canvas integration and single sign-on configuration.
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
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Faculty Training & Support (Ongoing)</h3>
                  <p className="text-muted-foreground">
                    Comprehensive training sessions, documentation, and dedicated support ensure smooth adoption.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Scale & Optimize (Flexible timeline)</h3>
                  <p className="text-muted-foreground">
                    Expand to additional departments based on success metrics. Our team helps optimize usage and measure ROI.
                  </p>
                </div>
              </motion.div>
            </div>
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
              Ready to Transform Your Institution?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Join leading universities already saving time and improving outcomes with AI-powered education
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-sales"
                className="inline-flex items-center rounded-lg bg-background px-8 py-4 text-lg font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Schedule Institution Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/docs/pilot"
                className="inline-flex items-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              >
                Start Free Pilot
              </Link>
            </div>
            
            <div className="mt-6 text-sm text-primary-foreground/80">
              <p>Questions? Contact our education team at <a href="mailto:education@canvas-mcp-tool.com" className="underline">education@canvas-mcp-tool.com</a></p>
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