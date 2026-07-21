/* =====================================================
   Trust Lugard — Portfolio interactions
   EDIT the SKILLS and PROJECTS arrays below to update
   your site — no other code changes needed.
   ===================================================== */

/* ---------- SKILLS DATA ---------- */
const SKILLS = [
  {
    title: "n8n Automation Platform",
    sub: "Production Workflow Systems",
    tags: ["n8n", "Multi-Step Workflows", "Sub-Workflows", "Error Handling", "Webhooks", "Scheduled & Event Triggers", "HTTP Request Nodes", "Custom Integrations", "Multi-Agent Orchestration"],
  },
  {
    title: "AI / LLM Engineering",
    sub: "Agents & Conversational AI",
    tags: ["OpenAI API", "Prompt Engineering", "Multi-Agent System Design", "Conversational AI Agents", "Voice Agents", "LLM Workflows"],
  },
  {
    title: "Integrations & APIs",
    sub: "Connecting Business Systems",
    tags: ["WhatsApp Cloud API", "Pipedrive", "Gmail", "Paystack", "REST APIs", "Webhooks"],
  },
  {
    title: "Data & Backend",
    sub: "Storage & Scripting",
    tags: ["Supabase", "PostgreSQL", "Python", "JSON Transformation"],
  },
  {
    title: "Solution Domains",
    sub: "Where I Deliver Value",
    tags: ["Conversational AI Agents", "B2B Sales Automation", "Fintech · Payments & BNPL", "Social Media Automation", "Operations Automation"],
  },
  {
    title: "Architecture & Delivery",
    sub: "Built for Real Businesses",
    tags: ["Multi-Tenant Systems", "Reference Architectures", "Payment Rails", "CRM Pipelines", "Messaging Platforms", "End-to-End Automation"],
  },
];

/* ---------- PROJECTS DATA ----------
   category: "agents" | "automation" | "fintech"
   Set `demo` to a live/workflow/demo link and `code` to a repo or
   workflow-template link when you have them ("#" hides nothing, it
   just links nowhere yet). */
const PROJECTS = [
  {
    category: "automation",
    catLabel: "Operations Automation",
    title: "Invoice Officer — AI Invoicing Agent",
    sub: "Autonomous Invoice Generation & Follow-Up",
    desc: "An n8n automation agent that acts as a full invoice officer — extracting invoice data with Firecrawl, generating and sending invoices via Gmail, tracking records in Supabase, chasing overdue payments with automated reminders and posting real-time status updates to Slack.",
    tags: ["n8n", "Supabase", "Firecrawl", "Slack", "Gmail", "OpenAI"],
    demo: "#",
    code: "#",
  },
  {
    category: "agents",
    catLabel: "WhatsApp & AI Agents",
    title: "Multi-Tenant WhatsApp Pharmacy Refill Agent",
    sub: "Conversations, Refills & Payments on Autopilot",
    desc: "A multi-tenant n8n system automating customer conversations, refill scheduling and payment collection across multiple pharmacy accounts from a single workflow architecture — now the reference architecture for subsequent builds.",
    tags: ["n8n", "WhatsApp Cloud API", "Supabase", "Python", "OpenAI", "Paystack"],
    demo: "#",
    code: "#",
  },
  {
    category: "automation",
    catLabel: "Sales & Marketing",
    title: "Multi-Agent B2B Sales System",
    sub: "Prospecting · RevOps · SDR Sub-Agents",
    desc: "A multi-agent sales automation system with three specialized sub-agents orchestrated across Pipedrive and Gmail — automating lead research, pipeline operations and outbound outreach end-to-end.",
    tags: ["n8n", "Multi-Agent", "Pipedrive", "Gmail", "OpenAI"],
    demo: "#",
    code: "#",
  },
  {
    category: "automation",
    catLabel: "Sales & Marketing",
    title: "AI Social Media Manager",
    sub: "Six Coordinated Sub-Agents",
    desc: "An AI content system composed of six coordinated n8n sub-agents that automate content planning, drafting and scheduling — already running for its first onboarded client.",
    tags: ["n8n", "Multi-Agent", "OpenAI", "Content Automation", "Scheduling"],
    demo: "#",
    code: "#",
  },
  {
    category: "fintech",
    catLabel: "Fintech",
    title: "Vendor BNPL System",
    sub: "Buy-Now-Pay-Later for Gadget Vendors",
    desc: "A fintech workflow system automating BNPL application intake, eligibility checks and repayment tracking for gadget vendors, with a roadmap of additional BNPL verticals.",
    tags: ["n8n", "Fintech", "Paystack", "Supabase", "Eligibility Logic"],
    demo: "#",
    code: "#",
  },
  {
    category: "fintech",
    catLabel: "Fintech",
    title: "Equity Portfolio Rebalancer",
    sub: "Live Prices, Alerts & Reports",
    desc: "An n8n workflow that tracks an equity portfolio with live price data, fires automated push notifications on rebalancing triggers and delivers scheduled email reports.",
    tags: ["n8n", "Live Market Data", "Push Notifications", "Email Reports", "Scheduling"],
    demo: "#",
    code: "#",
  },
  {
    category: "agents",
    catLabel: "WhatsApp & AI Agents",
    title: "Restocka — WhatsApp Ordering & Collections Agent",
    sub: "AI for Distributors & Informal Retailers",
    desc: "A WhatsApp-based AI ordering and collections agent on n8n for distributors and informal retailers — currently in active development at IchakaSystems.",
    tags: ["n8n", "WhatsApp Cloud API", "OpenAI", "Collections", "In Progress"],
    demo: "#",
    code: "#",
  },
];

/* ---------- RENDER SKILLS ---------- */
const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = SKILLS.map((s, i) => `
  <article class="skill-card reveal">
    <span class="skill-num">0${i + 1}</span>
    <h3>${s.title}</h3>
    <p class="skill-sub">${s.sub}</p>
    <div class="tag-row">${s.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
  </article>
`).join("");

/* ---------- RENDER PROJECTS ---------- */
const projectsGrid = document.getElementById("projectsGrid");
projectsGrid.innerHTML = PROJECTS.map(p => `
  <article class="project-card reveal" data-category="${p.category}">
    <p class="project-cat">${p.catLabel}</p>
    <h3>${p.title}</h3>
    <p class="project-sub">${p.sub}</p>
    <p class="project-desc">${p.desc}</p>
    <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    <div class="project-links">
      <a href="${p.demo}" target="_blank" rel="noopener">View Details →</a>
      <a href="${p.code}" target="_blank" rel="noopener">Code ↗</a>
    </div>
  </article>
`).join("");

/* ---------- PROJECT FILTERING ---------- */
document.getElementById("filterBar").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  const filter = btn.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card => {
    card.classList.toggle("hidden", filter !== "all" && card.dataset.category !== filter);
  });
});

/* ---------- TYPING EFFECT ---------- */
const ROLES = [
  "n8n Automation Specialist",
  "Workflow & AI Automation Engineer",
  "Multi-Agent System Builder",
  "Founder @ IchakaSystems",
];
const typedEl = document.getElementById("typed");
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const word = ROLES[roleIdx];
  typedEl.textContent = word.slice(0, charIdx);
  let delay = deleting ? 40 : 85;
  if (!deleting && charIdx === word.length) { deleting = true; delay = 1800; }
  else if (deleting && charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; delay = 400; }
  else charIdx += deleting ? -1 : 1;
  setTimeout(typeLoop, delay);
}
typeLoop();

/* ---------- NAVBAR SCROLL ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

/* ---------- MOBILE MENU ---------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  hamburger.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

/* ---------- SCROLL REVEAL ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* ---------- CONTACT FORM (opens email client) ---------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent(`[Portfolio] ${f.subject.value}`);
  const body = encodeURIComponent(`From: ${f.name.value} (${f.email.value})\n\n${f.message.value}`);
  window.location.href = `mailto:trustlugard9@gmail.com?subject=${subject}&body=${body}`;
});

/* ---------- FOOTER YEAR ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
