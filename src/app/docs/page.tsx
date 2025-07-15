"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  GraduationCap, 
  Terminal,
  Copy,
  Check,
  ArrowRight,
  BookOpen,
  Code,
  Settings,
  Zap,
  Download,
  GitBranch,
  Key,
  FileCode,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  HelpCircle
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";

export default function DocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/docs/quickstart", label: "Get Started", primary: true }
  ];

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
              Getting Started with
              <span className="block text-primary">Syllabus</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Set up your AI-powered Canvas assistant in just 5 minutes
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#quickstart"
                className="group inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Quick Start Guide
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://github.com/jamubc/syllabus/blob/main/README.md"
                className="inline-flex items-center rounded-lg border border-border bg-background px-6 py-3 text-base font-semibold hover:bg-secondary transition-colors"
              >
                <GitBranch className="mr-2 h-4 w-4" />
                Full Documentation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-8">Before You Begin</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Canvas API Token</h3>
                      <Link
                        href="https://canvas.instructure.com/doc/api/file.oauth.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-1 px-2 py-1 text-xs bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-md transition-colors"
                        aria-label="Learn about API safety"
                      >
                        <HelpCircle className="h-3 w-3 text-blue-600" />
                        <span className="text-blue-700 font-medium">API Safety</span>
                        <ExternalLink className="h-3 w-3 text-blue-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      You'll need an API token from your Canvas account to enable the integration.
                    </p>
                    <ol className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-medium">1.</span>
                        <span>Log in to your Canvas account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-medium">2.</span>
                        <span>Go to Account → Settings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-medium">3.</span>
                        <span>Click "+ New Access Token"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-medium">4.</span>
                        <span>Save the token securely</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-lg border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Terminal className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">AI Platform</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Syllabus works with multiple AI platforms. Choose your preferred one:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Claude Desktop (Recommended)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Claude Code CLI</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Gemini CLI</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section id="quickstart" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-8">Quick Start Guide</h2>

            {/* Method 1: Claude Code (Recommended) */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                Method 1: Claude Code CLI (Recommended)
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </span>
                    Install Claude Code
                  </h4>
                  <div className="ml-10 rounded-lg bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <code className="text-sm">npm install -g @anthropic/claude-code</code>
                      <button
                        onClick={() => copyToClipboard("npm install -g @anthropic/claude-code", "install-claude")}
                        className="ml-4 rounded p-1 hover:bg-background"
                      >
                        {copiedCode === "install-claude" ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </span>
                    Add Syllabus
                  </h4>
                  <div className="ml-10 rounded-lg bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <code className="text-sm">claude mcp add canvas -- npx canvas-mcp-tool</code>
                      <button
                        onClick={() => copyToClipboard("claude mcp add canvas -- npx canvas-mcp-tool", "add-canvas")}
                        className="ml-4 rounded p-1 hover:bg-background"
                      >
                        {copiedCode === "add-canvas" ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      3
                    </span>
                    Configure Your API Token
                  </h4>
                  <div className="ml-10 space-y-3">
                    <p className="text-sm text-muted-foreground">When prompted, enter:</p>
                    <div className="rounded-lg bg-muted p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <code className="text-sm">CANVAS_API_TOKEN: your_token_here</code>
                        <Copy className="h-4 w-4 opacity-50" />
                      </div>
                      <div className="flex items-center justify-between">
                        <code className="text-sm">CANVAS_BASE_URL: https://canvas.instructure.com</code>
                        <Copy className="h-4 w-4 opacity-50" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Replace with your institution's Canvas URL if different
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      4
                    </span>
                    Start Using Canvas MCP
                  </h4>
                  <div className="ml-10 rounded-lg bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <code className="text-sm">claude --mcp canvas</code>
                      <button
                        onClick={() => copyToClipboard("claude --mcp canvas", "start-claude")}
                        className="ml-4 rounded p-1 hover:bg-background"
                      >
                        {copiedCode === "start-claude" ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Method 2: Claude Desktop */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Settings className="h-6 w-6 text-primary" />
                Method 2: Claude Desktop App
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </span>
                    Open Claude Desktop Configuration
                  </h4>
                  <div className="ml-10 space-y-2 text-sm">
                    <p className="text-muted-foreground">Navigate to:</p>
                    <div className="rounded-lg bg-muted p-3">
                      <code className="text-xs">~/Library/Application Support/Claude/claude_desktop_config.json</code>
                    </div>
                    <p className="text-xs text-muted-foreground">On Windows: %APPDATA%/Claude/</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </span>
                    Add Canvas MCP Configuration
                  </h4>
                  <div className="ml-10 rounded-lg bg-muted p-4 overflow-x-auto">
                    <pre className="text-xs">
{`{
  "mcpServers": {
    "canvas": {
      "command": "npx",
      "args": ["canvas-mcp-tool"],
      "env": {
        "CANVAS_API_TOKEN": "your_token_here",
        "CANVAS_BASE_URL": "https://canvas.instructure.com"
      }
    }
  }
}`}
                    </pre>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      3
                    </span>
                    Restart Claude Desktop
                  </h4>
                  <div className="ml-10">
                    <p className="text-sm text-muted-foreground">
                      Quit and reopen Claude Desktop to load the new configuration.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Method 3: Direct NPX */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Terminal className="h-6 w-6 text-primary" />
                Method 3: Direct Installation
              </h3>
              
              <div className="rounded-lg bg-muted p-4">
                <div className="flex items-center justify-between">
                  <code className="text-sm">
                    CANVAS_API_TOKEN=your_token CANVAS_BASE_URL=https://canvas.instructure.com npx canvas-mcp-tool
                  </code>
                  <button
                    onClick={() => copyToClipboard("CANVAS_API_TOKEN=your_token CANVAS_BASE_URL=https://canvas.instructure.com npx canvas-mcp-tool", "npx-direct")}
                    className="ml-4 rounded p-1 hover:bg-background"
                  >
                    {copiedCode === "npx-direct" ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Use this method for testing or integration with other MCP-compatible tools.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Example Queries */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-8">Example Queries</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Once connected, try these natural language queries with your AI assistant:
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                { query: "Show me all my upcoming assignments", icon: BookOpen },
                { query: "What assignments are due this week?", icon: Terminal },
                { query: "List my current grades across all courses", icon: BarChart },
                { query: "Find course materials about machine learning", icon: Search },
                { query: "Show me unsubmitted assignments", icon: AlertCircle },
                { query: "What discussions are happening in CS101?", icon: MessageSquare },
                { query: "Get the syllabus for Biology 202", icon: FileText },
                { query: "Show me today's announcements", icon: Bell },
              ].map((example, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-lg border bg-card p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <example.icon className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">"{example.query}"</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Configuration */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-8">Advanced Configuration</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Environment Variables
                </h3>
                <div className="rounded-lg border bg-card overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="px-4 py-3 text-left text-sm font-semibold">Variable</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">Required</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">CANVAS_API_TOKEN</td>
                        <td className="px-4 py-3 text-sm">Your Canvas API access token</td>
                        <td className="px-4 py-3 text-sm text-primary">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">CANVAS_BASE_URL</td>
                        <td className="px-4 py-3 text-sm">Canvas instance URL</td>
                        <td className="px-4 py-3 text-sm text-primary">Yes</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">UBC_MODE</td>
                        <td className="px-4 py-3 text-sm">Enable UBC-specific features</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">No</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-mono text-sm">DEBUG</td>
                        <td className="px-4 py-3 text-sm">Enable debug logging</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-primary" />
                  Available Tools
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="font-semibold mb-2">Course Management</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• listCourses</li>
                      <li>• getCourse</li>
                      <li>• listStudentCourses</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="font-semibold mb-2">Assignments</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• listAssignments</li>
                      <li>• getAssignment</li>
                      <li>• getUpcomingAssignments</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="font-semibold mb-2">Content & Files</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• listFiles</li>
                      <li>• listFolders</li>
                      <li>• getFile</li>
                    </ul>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <h4 className="font-semibold mb-2">Communication</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• listConversations</li>
                      <li>• getConversation</li>
                      <li>• listNotifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-8">Troubleshooting</h2>

            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">API Token Issues</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If you're getting authentication errors, ensure your token has the necessary permissions and hasn't expired.
                </p>
                <Link href="#" className="text-sm text-primary hover:underline inline-flex items-center">
                  Learn about Canvas API permissions
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">Connection Problems</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Verify your CANVAS_BASE_URL matches your institution's Canvas domain exactly, including https://.
                </p>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-semibold mb-2">MCP Not Loading</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  If using Claude Desktop, ensure the configuration file is valid JSON and restart the app completely.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-primary/5 border border-primary/20 p-6">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Need Help?
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Join our community for support and updates:
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/jamubc/syllabus/issues" className="text-sm text-primary hover:underline inline-flex items-center">
                  GitHub Issues
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
                <a href="#" className="text-sm text-primary hover:underline inline-flex items-center">
                  Discord Community
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Next Steps</h2>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Link
                href="/features"
                className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-all hover:border-primary"
              >
                <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Explore Features</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Discover all the powerful capabilities of Syllabus
                </p>
                <span className="text-sm text-primary font-medium inline-flex items-center">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/for-productivity"
                className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-all hover:border-primary"
              >
                <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Build Integrations</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Create custom workflows with our powerful API
                </p>
                <span className="text-sm text-primary font-medium inline-flex items-center">
                  View API docs
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <a
                href="https://github.com/jamubc/syllabus"
                className="group rounded-lg border bg-card p-6 hover:shadow-lg transition-all hover:border-primary"
              >
                <GitBranch className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Contribute</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Help improve Syllabus on GitHub
                </p>
                <span className="text-sm text-primary font-medium inline-flex items-center">
                  Star on GitHub
                  <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
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

// Import statements for icons that were missing
import { Search, AlertCircle, MessageSquare, FileText, Bell, BarChart } from "lucide-react";