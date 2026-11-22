/* ═══════════════════════════════════════════════════════════
   LawXTech Portfolio — script.js
   Author: Tarun Bhatia
═══════════════════════════════════════════════════════════ */

/* ── Screenshot registry (all 30) ── */
const SCREENSHOTS = [
  { file: '01-entra-employee-directory.png.png',          caption: '01 — Workforce Directory: 26 Entra ID Users Provisioned Across Indian & Australian Teams' },
  { file: '02-entra-security-groups-part1.png.png',       caption: '02 — Security Groups (1/2): 12 Role-Segmented Entra Security Groups' },
  { file: '03-entra-security-groups-part2.png.png',       caption: '03 — Security Groups (2/2): Department-Level Group Segmentation' },
  { file: '04-pim-dpo-eligible-roles.png.png',            caption: '04 — PIM JIT Elevation: DPO Eligible Roles — Zero Standing Privileges' },
  { file: '05-pim-breakglass-admin.png.png',              caption: '05 — Break-Glass Admin: Global Administrator Isolated for Emergency Use Only' },
  { file: '06-azure-resource-group-central-india.png.png',caption: '06 — Azure Resource Group (Central India): Data Sovereignty Region — rg-nexora-privacy-lab-dev-001' },
  { file: '07-azure-all-cloud-resources.png.png',         caption: '07 — All Cloud Resources: Purview, Storage Accounts, Azure SQL — All in Central India' },
  { file: '08-purview-account-rbac.png.png',              caption: '08 — Purview RBAC: Governance Plane Access Control — purview-nexora-gov-001' },
  { file: '09-storage-account-rbac.png.png',              caption: '09 — Storage Account RBAC: Hierarchical IAM — stnexorafinance001' },
  { file: '10-container-scoped-rbac.png.png',             caption: '10 — Container-Scoped RBAC: Least-Privilege Access on finance-documents Container' },
  { file: '11-azure-private-blob-container.png.png',      caption: '11 — Private Blob Container: Anonymous Public Access Disabled on finance-documents' },
  { file: '12-azure-staged-financial-datasets.png.png',   caption: '12 — Staged Financial Datasets: bank_reconciliation.csv, invoice_register.csv, vendor_master.csv' },
  { file: '13-purview-datamap-source-registration.png.png', caption: '13 — Purview Data Map: Keyless Managed Identity Source Registration' },
  { file: '14-purview-unified-catalog-assets.png.png',    caption: '14 — Unified Catalog Assets: Automated CSV Indexing — All 4 Financial Files Catalogued' },
  { file: '15-purview-bank-reconciliation-schema.png.png',caption: '15 — PII Auto-Classification: India PAN (Beneficiary_PAN_TEST) Auto-Detected in bank_reconciliation.csv' },
  { file: '16-sensitivity-label-priority-9.png.png',      caption: '16 — Sensitivity Label Priority 9: "Confidential - PII and Financial" — Above Public, General, Confidential' },
  { file: '17-global-label-publishing-policy.png.png',    caption: '17 — Global Label Publishing Policy: Published to SG-NEX-All-Employees with Mandatory Downgrade Justification' },
  { file: '18-custom-ndis-regex-classifier.png.png',      caption: '18 — Custom NDIS Regex Classifier: \\bNDIS-\\d{3}-\\d{3}-\\d{3}\\b — Detects Australian Disability Record IDs' },
  { file: '19-auto-labeling-simulation-matches.png.png',  caption: '19 — Auto-Label Simulation Matches: Nexora-AutoLabel-Confidential-PII — Live Matches Across Exchange, SharePoint, OneDrive' },
  { file: '20-active-dlp-policies-overview.png.png',      caption: '20 — Active DLP Policies: Nexora-PII-Financial-Leak-Prevention & Nexora-Copilot-PII-Protection — Sync Completed' },
  { file: '21-m365-external-dlp-rule.png.png',            caption: '21 — M365 External DLP Rule: Block External Recipients — PAN + Credit Card + NDIS Triggers' },
  { file: '22-live-outlook-dlp-block-proof.png.png',      caption: '22 🔴 LIVE PROOF — Outlook DLP Block: "Message Blocked: Confidential Q4 Client & Employee Payout Verification" — PAN + Credit Card + NDIS Intercepted' },
  { file: '23-copilot-dlp-policy-config.png.png',         caption: '23 — Copilot DLP Policy Config: Nexora-Copilot-PII-Protection Across M365 Copilot, Copilot Chat, Copilot Cowork' },
  { file: '24-live-copilot-prompt-block-proof.png.png',   caption: '24 🔴 LIVE PROOF — Copilot Prompt Block: PAN + Credit Card + NDIS Paste Refused by Organizational Policy in Real-Time' },
  { file: '25-sharepoint-finance-portal-datasets.png.png',caption: '25 — SharePoint Finance Portal: Nexora-Finance-Portal — 4 Financial & Vendor Datasets' },
  { file: '26-ediscovery-dsar-case.png.png',              caption: '26 — eDiscovery DSAR Case: DSAR-2026-001-Vendor-and-Employee-Access-Request Created in Purview' },
  { file: '27-ediscovery-dsar-search-query.png.png',      caption: '27 — DSAR Search Query: Demo Vendor 0002 Group — 3 Files (272,103 bytes) Precisely Isolated' },
  { file: '28-ediscovery-reviewset-redaction-tag.png.png',caption: '28 — Redaction Tag Applied: "Requires-Redaction" on Third-Party PAN Records in vendor_master.csv' },
  { file: '29-ediscovery-group-based-rbac.png.png',       caption: '29 — DSAR Case RBAC: SG-NEX-Legal-Compliance Sandboxed to DSAR-2026-001 — No Cross-Case Access' },
  { file: '30-azure-rbac-kql-audit.png',                  caption: '30 — KQL RBAC Audit: Azure Resource Graph Query — All 11 Least-Privilege RBAC Assignments Verified' },
];

let currentIndex = 0;

/* ── Lightbox ── */
function openLightbox(index) {
  const ss = SCREENSHOTS[index];
  if (!ss) return;
  currentIndex = index;
  const img = document.getElementById('lb-img');
  img.src = 'assets/screenshots/' + ss.file;
  document.getElementById('lb-caption').textContent = ss.caption;
  document.getElementById('lb-counter').textContent = (index + 1) + ' / ' + SCREENSHOTS.length;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e && e.target !== document.getElementById('lightbox') && !e.target.classList.contains('lb-close')) return;
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbPrev(e) {
  if (e) e.stopPropagation();
  currentIndex = (currentIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length;
  openLightbox(currentIndex);
}

function lbNext(e) {
  if (e) e.stopPropagation();
  currentIndex = (currentIndex + 1) % SCREENSHOTS.length;
  openLightbox(currentIndex);
}

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox({target: document.getElementById('lightbox')});
  if (e.key === 'ArrowLeft') lbPrev();
  if (e.key === 'ArrowRight') lbNext();
});

/* ── Navbar scroll behavior ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

/* ── Mobile nav toggle ── */
const mobileBtn = document.getElementById('mobileBtn');
const navLinks = document.getElementById('navLinks');
mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('open');
  navbar.classList.toggle('mobile-open');
});
// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileBtn.classList.remove('open');
    navbar.classList.remove('mobile-open');
  });
});

/* ── Act accordion ── */
function toggleAct(id) {
  const card = document.getElementById(id);
  const body = card.querySelector('.act-body');
  const isOpen = card.classList.contains('open');
  card.classList.toggle('open');
  body.classList.toggle('active');
}

// Open Act 1 by default
document.addEventListener('DOMContentLoaded', () => {
  const act1 = document.getElementById('act1');
  if (act1) {
    act1.classList.add('open');
    act1.querySelector('.act-body').classList.add('active');
  }
});

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinkEls.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));

/* ── KQL copy button ── */
function copyKQL(btn) {
  const code = btn.closest('.kql-block').querySelector('code').textContent;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = 'Copied!';
    btn.style.color = 'var(--accent-green)';
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.style.color = '';
    }, 2000);
  });
}

/* ── Smooth scroll offset for fixed navbar ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
