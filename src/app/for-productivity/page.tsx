"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap, 
  Code, 
  Layers,
  ArrowRight,
  CheckCircle,
  Terminal,
  Cpu,
  GitBranch,
  Puzzle,
  Workflow,
  Database,
  Key,
  Bot,
  Network,
  Sparkles,
  Command,
  Menu,
  X,
  GraduationCap
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export default function ForProductivityPage() {
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
              <Terminal className="mr-2 h-4 w-4" />
              Model Context Protocol (MCP) Powered
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Stop Feeding Your AI Context.
              <span className="block text-primary">Give It a Key to Your Workspace.</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Context-aware AI that securely connects to your entire digital ecosystem—Notion, Slack, Google Drive, Obsidian, and yes, even Canvas—without the copy-paste.
            </p>
            
            {/* Primary CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/quickstart"
                className="group inline-flex items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Start Building
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/docs/api"
                className="inline-flex items-center rounded-lg border border-border bg-background px-8 py-4 text-lg font-semibold hover:bg-secondary transition-colors"
              >
                <Code className="mr-2 h-5 w-5" />
                Explore API
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-primary" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Key className="h-4 w-4 text-primary" />
                <span>Self-Hostable</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4 text-primary" />
                <span>20+ Integrations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem & Solution */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-12 lg:grid-cols-2"
            >
              {/* The Problem */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-destructive">The Problem with Current AI Tools</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-sm">✕</span>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Context switching hell:</span> Copy-paste from Notion, paste into ChatGPT, copy response, paste back...
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-sm">✕</span>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Information silos:</span> Your AI can't see your Trello board when drafting project updates
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-sm">✕</span>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Manual everything:</span> Re-explaining context for every query, maintaining state manually
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-destructive text-sm">✕</span>
                    </div>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">No real automation:</span> Can't trigger actions or update systems based on AI insights
                    </p>
                  </li>
                </ul>
              </div>

              {/* The Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-primary">The MCP Solution</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Unified context:</span> AI understands your entire canvas automatically
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Secure connections:</span> Granular permissions for each integration
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">True automation:</span> AI can read, write, and trigger actions across your tools
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Extensible system:</span> Build custom integrations with our powerful API
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Build Your Perfect System
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real workflows from the productivity community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Use Case 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Workflow className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Weekly Review Automation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Connect Trello, Slack, and Google Calendar to automatically generate comprehensive weekly summaries.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                <code>
                  <span className="text-primary">const</span> review = <span className="text-primary">await</span> mcp.<span className="text-blue-600">generateWeeklyReview</span>({`{`}<br />
                  &nbsp;&nbsp;sources: [<span className="text-green-600">'trello'</span>, <span className="text-green-600">'slack'</span>, <span className="text-green-600">'gcal'</span>],<br />
                  &nbsp;&nbsp;format: <span className="text-green-600">'markdown'</span>,<br />
                  &nbsp;&nbsp;includeMetrics: <span className="text-primary">true</span><br />
                  {`}`});
                </code>
              </div>
            </motion.div>

            {/* Use Case 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Second Brain Integration</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Let AI access your Obsidian vault to provide insights based on your entire knowledge base.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                <code>
                  <span className="text-primary">const</span> insight = <span className="text-primary">await</span> mcp.<span className="text-blue-600">queryKnowledgeBase</span>({`{`}<br />
                  &nbsp;&nbsp;query: <span className="text-green-600">"productivity frameworks"</span>,<br />
                  &nbsp;&nbsp;sources: [<span className="text-green-600">'obsidian'</span>, <span className="text-green-600">'notion'</span>],<br />
                  &nbsp;&nbsp;synthesize: <span className="text-primary">true</span><br />
                  {`}`});
                </code>
              </div>
            </motion.div>

            {/* Use Case 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Meeting Assistant</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Transcribe meetings, extract action items, and automatically create tasks in your project management tool.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                <code>
                  <span className="text-primary">const</span> actions = <span className="text-primary">await</span> mcp.<span className="text-blue-600">processMeeting</span>({`{`}<br />
                  &nbsp;&nbsp;transcript: otterTranscript,<br />
                  &nbsp;&nbsp;createTasks: <span className="text-primary">true</span>,<br />
                  &nbsp;&nbsp;destination: <span className="text-green-600">'asana'</span><br />
                  {`}`});
                </code>
              </div>
            </motion.div>

            {/* Use Case 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Puzzle className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Custom Workflows</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Build any workflow you can imagine with our extensible API and webhook support.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                <code>
                  <span className="text-primary">const</span> workflow = <span className="text-primary">new</span> <span className="text-blue-600">MCPWorkflow</span>()<br />
                  &nbsp;&nbsp;.<span className="text-blue-600">trigger</span>(<span className="text-green-600">'github.pr_merged'</span>)<br />
                  &nbsp;&nbsp;.<span className="text-blue-600">action</span>(<span className="text-green-600">'update_docs'</span>)<br />
                  &nbsp;&nbsp;.<span className="text-blue-600">notify</span>(<span className="text-green-600">'slack'</span>);
                </code>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
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
              Connect Your Entire Stack
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Pre-built integrations with your favorite productivity tools
            </p>
          </motion.div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { name: "Notion", category: "Knowledge" },
                { name: "Obsidian", category: "Knowledge" },
                { name: "Slack", category: "Communication" },
                { name: "Discord", category: "Communication" },
                { name: "Trello", category: "Project Mgmt" },
                { name: "Asana", category: "Project Mgmt" },
                { name: "GitHub", category: "Development" },
                { name: "Linear", category: "Development" },
                { name: "Google Drive", category: "Storage" },
                { name: "Dropbox", category: "Storage" },
                { name: "Canvas LMS", category: "Education" },
                { name: "Todoist", category: "Tasks" },
                { name: "Airtable", category: "Databases" },
                { name: "Zapier", category: "Automation" },
                { name: "Make", category: "Automation" },
                { name: "Custom API", category: "Your Tools" },
              ].map((integration, i) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative rounded-lg border bg-card p-4 hover:shadow-md transition-all hover:border-primary cursor-pointer"
                >
                  <h3 className="font-medium">{integration.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{integration.category}</p>
                  <div className="absolute top-2 right-2">
                    <CheckCircle className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/integrations"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                View all integrations
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Features */}
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
              Built for Power Users
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to build your perfect productivity system
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
              <Code className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Powerful REST API</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive API with SDKs for Python, JavaScript, and Go. Build anything you can imagine.
              </p>
              <Link href="/docs/api" className="text-primary font-medium hover:underline inline-flex items-center">
                View API docs
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Layers className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Webhook Support</h3>
              <p className="text-muted-foreground mb-4">
                Real-time event notifications. Trigger workflows based on any event across your connected tools.
              </p>
              <Link href="/docs/webhooks" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Command className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">CLI Tool</h3>
              <p className="text-muted-foreground mb-4">
                Command-line interface for power users. Script and automate everything from your terminal.
              </p>
              <Link href="/docs/cli" className="text-primary font-medium hover:underline inline-flex items-center">
                Install CLI
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <GitBranch className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Open Source</h3>
              <p className="text-muted-foreground mb-4">
                Full source code available. Self-host, contribute, or fork to build your own custom solution.
              </p>
              <a href="https://github.com/jamubc/syllabus" className="text-primary font-medium hover:underline inline-flex items-center">
                View on GitHub
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Cpu className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Self-Hostable</h3>
              <p className="text-muted-foreground mb-4">
                Deploy on your own infrastructure. Complete control over your data and integrations.
              </p>
              <Link href="/docs/self-hosting" className="text-primary font-medium hover:underline inline-flex items-center">
                Deployment guide
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border bg-card p-6"
            >
              <Key className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Granular Permissions</h3>
              <p className="text-muted-foreground mb-4">
                Control exactly what data the AI can access. Per-app, per-folder, per-document permissions.
              </p>
              <Link href="/docs/security" className="text-primary font-medium hover:underline inline-flex items-center">
                Security docs
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
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
                Join the Productivity Revolution
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Featured by the productivity community's most trusted voices
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">AA</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ali Abdaal</h3>
                    <p className="text-sm text-muted-foreground mb-3">Productivity YouTuber • 5M+ subscribers</p>
                    <p className="text-muted-foreground italic">
                      "This is the missing piece in my productivity stack. The MCP integration finally lets AI understand all my courses without the friction."
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">TF</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Thomas Frank</h3>
                    <p className="text-sm text-muted-foreground mb-3">Notion Expert • College Info Geek</p>
                    <p className="text-muted-foreground italic">
                      "The Notion integration alone is worth it. Being able to query my entire second brain with AI is a game-changer for content creation."
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">KP</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Keep Productive</h3>
                    <p className="text-sm text-muted-foreground mb-3">Francesco D'Alessio • Tool Reviews</p>
                    <p className="text-muted-foreground italic">
                      "In my 10 years of reviewing productivity tools, this is the most significant advancement I've seen in AI integration for education."
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-2xl border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-medium">PH</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Product Hunt</h3>
                    <p className="text-sm text-muted-foreground mb-3">#1 Product of the Day</p>
                    <p className="text-muted-foreground italic">
                      "Incredible execution on a complex technical problem. The future of productivity tools is context-aware AI."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg font-medium mb-6">Join 10,000+ productivity enthusiasts building with MCP</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://discord.gg/canvas-mcp"
                  className="inline-flex items-center rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold hover:bg-secondary transition-colors"
                >
                  Join Discord Community
                </a>
              </div>
            </div>
          </motion.div>
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
              Ready to Build Your Perfect System?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Start with our quickstart guide or dive deep into the API documentation
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/quickstart"
                className="inline-flex items-center rounded-lg bg-background px-8 py-4 text-lg font-semibold text-foreground hover:bg-secondary transition-colors group"
              >
                Get Started
                <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <a
                href="https://github.com/jamubc/syllabus"
                className="inline-flex items-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              >
                <GitBranch className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-primary-foreground/80">
              <div>
                <p className="font-semibold text-2xl text-primary-foreground">10k+</p>
                <p>Active Users</p>
              </div>
              <div>
                <p className="font-semibold text-2xl text-primary-foreground">20+</p>
                <p>Integrations</p>
              </div>
              <div>
                <p className="font-semibold text-2xl text-primary-foreground">5k+</p>
                <p>GitHub Stars</p>
              </div>
              <div>
                <p className="font-semibold text-2xl text-primary-foreground">100%</p>
                <p>Open Source</p>
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
                Context-aware AI for your productivity stack
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs/api" className="text-muted-foreground hover:text-foreground">API Reference</Link></li>
                <li><Link href="/docs/sdk" className="text-muted-foreground hover:text-foreground">SDKs</Link></li>
                <li><a href="https://github.com/jamubc/syllabus" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/integrations" className="text-muted-foreground hover:text-foreground">Integrations</Link></li>
                <li><Link href="/templates" className="text-muted-foreground hover:text-foreground">Templates</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://github.com/jamubc/syllabus" className="text-muted-foreground hover:text-foreground">GitHub</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Syllabus. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </>
  );
}