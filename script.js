/* ═══════════════════════════════════════════════════════════
   LawXTech (lawxtech.in) — Interactive Client Scripts & Lightbox
   Author: Tarun Bhatia (Privacy Engineer & Data Governance Specialist)
═══════════════════════════════════════════════════════════ */

// ── 30 Verified Screenshots Registry (Single .png paths) ──
const SCREENSHOTS = [
  {
    id: 1,
    src: '/assets/screenshots/01-entra-employee-directory.png',
    title: 'Figure 01: Workforce Directory Provisioning (26 Users)',
    caption: 'Provisioned 26 cloud identities in Microsoft Entra ID across Indian operational centers, establishing segregated roles for privacy leadership, IT security, and business operations under DPDP Act Section 8(5).'
  },
  {
    id: 2,
    src: '/assets/screenshots/02-entra-security-groups-part1.png',
    title: 'Figure 02: Departmental Security Group Architecture (Part 1)',
    caption: 'Established 12 role-segmented Entra Security Groups (SG-NEX-Finance, SG-NEX-HR, SG-NEX-Legal-Compliance) replacing individual user permissions with scalable Zero-Trust RBAC.'
  },
  {
    id: 3,
    src: '/assets/screenshots/03-entra-security-groups-part2.png',
    title: 'Figure 03: Departmental Security Group Architecture (Part 2)',
    caption: 'Completed departmental segregation ensuring analysts and consultants cannot traverse unauthorized operational silos without documented group membership.'
  },
  {
    id: 4,
    src: '/assets/screenshots/04-pim-dpo-eligible-roles.png',
    title: 'Figure 04: Just-In-Time Privilege Elevation (Entra PIM)',
    caption: 'Zero standing administrative privileges for the Data Protection Officer (DPO). High-privilege compliance roles are held as Eligible assignments requiring MFA and justification.'
  },
  {
    id: 5,
    src: '/assets/screenshots/05-pim-breakglass-admin.png',
    title: 'Figure 05: Out-of-Band Break-Glass Administrator Isolation',
    caption: 'Isolated emergency Global Administrator account with 100% cloud-only identity and exclusion from routine operational workflows under ISO 27001 emergency access controls.'
  },
  {
    id: 6,
    src: '/assets/screenshots/06-azure-resource-group-central-india.png',
    title: 'Figure 06: Data Sovereignty — Central India Resource Group',
    caption: 'Enforced sovereign cloud hosting within Central India (rg-nexora-privacy-lab-dev-001) ensuring critical financial and patient datasets remain compliant with domestic data localization standards.'
  },
  {
    id: 7,
    src: '/assets/screenshots/07-azure-all-cloud-resources.png',
    title: 'Figure 07: Unified Azure Cloud Governance Stack',
    caption: 'Comprehensive deployment overview encompassing Microsoft Purview account, segregated storage accounts (stnexorafinance001, stnexorahrdev001), and Azure SQL data stores.'
  },
  {
    id: 8,
    src: '/assets/screenshots/08-purview-account-rbac.png',
    title: 'Figure 08: Purview Governance Plane RBAC Lockdown',
    caption: 'Administrative role-based lockdown on purview-nexora-gov-001 allowing auditors to review compliance policies without permissions to alter classification engines.'
  },
  {
    id: 9,
    src: '/assets/screenshots/09-storage-account-rbac.png',
    title: 'Figure 09: Storage Account Management-Plane RBAC',
    caption: 'Two-tier storage architecture: at the storage account level, security groups hold read-only metadata visibility with zero direct data-plane blob access.'
  },
  {
    id: 10,
    src: '/assets/screenshots/10-container-scoped-rbac.png',
    title: 'Figure 10: Container-Scoped Least-Privilege IAM',
    caption: 'Granular container-level permissions: SG-NEX-Finance holds Storage Blob Data Contributor only on finance-documents, while Privacy Operations is restricted to Storage Blob Data Reader.'
  },
  {
    id: 11,
    src: '/assets/screenshots/11-azure-private-blob-container.png',
    title: 'Figure 11: Private Blob Container & Public Access Lockdown',
    caption: 'Strict elimination of anonymous public access on finance-documents container, requiring authenticated Azure AD tokens for all data transactions.'
  },
  {
    id: 12,
    src: '/assets/screenshots/12-azure-staged-financial-datasets.png',
    title: 'Figure 12: Staged Financial & Vendor Datasets',
    caption: 'Production-grade staged datasets (bank_reconciliation.csv, card_transactions_test_only.csv, vendor_master.csv) simulating real B2B enterprise workload.'
  },
  {
    id: 13,
    src: '/assets/screenshots/13-purview-datamap-source-registration.png',
    title: 'Figure 13: Keyless Purview Data Map Source Registration',
    caption: 'Registered Azure Blob Storage using System-Assigned Managed Identity authentication, eliminating persistent storage account keys and SAS tokens.'
  },
  {
    id: 14,
    src: '/assets/screenshots/14-purview-unified-catalog-assets.png',
    title: 'Figure 14: Purview Unified Catalog Asset Indexing',
    caption: 'Automated metadata scanning and indexing across all storage endpoints, providing real-time visibility into multi-table data assets.'
  },
  {
    id: 15,
    src: '/assets/screenshots/15-purview-bank-reconciliation-schema.png',
    title: 'Figure 15: Column-Level PII Auto-Classification (India PAN)',
    caption: 'Purview automated scan detecting India Permanent Account Number (PAN) inside Beneficiary_PAN_TEST column with high statistical confidence.'
  },
  {
    id: 16,
    src: '/assets/screenshots/16-sensitivity-label-priority-9.png',
    title: 'Figure 16: Cryptographic Sensitivity Label (Priority 9)',
    caption: 'Engineered top-priority label Confidential - PII and Financial with AES-256 encryption restricted exclusively to internal enterprise personnel.'
  },
  {
    id: 17,
    src: '/assets/screenshots/17-global-label-publishing-policy.png',
    title: 'Figure 17: Enterprise Label Publishing & Downgrade Justification',
    caption: 'Mandatory downgrade justification policy published to SG-NEX-All-Employees preventing unauthorized declassification of sensitive corporate data.'
  },
  {
    id: 18,
    src: '/assets/screenshots/18-custom-ndis-regex-classifier.png',
    title: 'Figure 18: Custom Healthcare & Patient ID Regex Classifier',
    caption: 'Engineered custom Sensitive Information Type \\bNDIS-\\d{3}-\\d{3}-\\d{3}\\b paired with healthcare proximity terms to capture structured patient identifiers missed by standard classifiers.'
  },
  {
    id: 19,
    src: '/assets/screenshots/19-auto-labeling-simulation-matches.png',
    title: 'Figure 19: Auto-Labeling Policy Simulation & Live Matches',
    caption: 'Simulation engine testing auto-classification rules across Exchange, SharePoint, and OneDrive prior to non-disruptive production rollout.'
  },
  {
    id: 20,
    src: '/assets/screenshots/20-active-dlp-policies-overview.png',
    title: 'Figure 20: Active DLP Policy Suite Overview',
    caption: 'Full synchronization of Nexora-PII-Financial-Leak-Prevention and Nexora-Copilot-PII-Protection across cloud messaging and collaboration workloads.'
  },
  {
    id: 21,
    src: '/assets/screenshots/21-m365-external-dlp-rule.png',
    title: 'Figure 21: External Data Exfiltration Prevention Rule',
    caption: 'Real-time rule blocking transmissions containing PAN, Credit Cards, or Patient IDs to external unverified domains.'
  },
  {
    id: 22,
    src: '/assets/screenshots/22-live-outlook-dlp-block-proof.png',
    title: 'Figure 22: LIVE PROOF — Real-Time Outlook Exfiltration Interception',
    caption: 'Live demonstration: Outbound email containing PAN and payment card details to external Gmail blocked immediately with system policy bounce notice.'
  },
  {
    id: 23,
    src: '/assets/screenshots/23-copilot-dlp-policy-config.png',
    title: 'Figure 23: Microsoft 365 Copilot AI DLP Architecture',
    caption: 'Dedicated Generative AI guardrails preventing Copilot Chat and Copilot Cowork from ingesting sensitive personal identifiers into AI prompts.'
  },
  {
    id: 24,
    src: '/assets/screenshots/24-live-copilot-prompt-block-proof.png',
    title: 'Figure 24: LIVE PROOF — Copilot Prompt Interception in Real-Time',
    caption: 'Live demonstration: Direct prompt injection containing synthetic PAN and Credit Card blocked on submission by Copilot with organizational security policy restriction alert.'
  },
  {
    id: 25,
    src: '/assets/screenshots/25-sharepoint-finance-portal-datasets.png',
    title: 'Figure 25: Multi-Tenant SharePoint Financial Repository',
    caption: 'Restricted corporate team site hosting vendor master databases and invoices subject to statutory data subject access requests.'
  },
  {
    id: 26,
    src: '/assets/screenshots/26-ediscovery-dsar-case.png',
    title: 'Figure 26: Statutory DSAR eDiscovery Premium Case Creation',
    caption: 'Provisioned formal case DSAR-2026-001-Vendor-and-Employee-Access-Request under Section 11 of the DPDP Act 2023.'
  },
  {
    id: 27,
    src: '/assets/screenshots/27-ediscovery-dsar-search-query.png',
    title: 'Figure 27: Targeted Discovery Query & Result Isolation',
    caption: 'KQL search query targeted at Demo Vendor 0002 isolating exactly 3 relevant files (272 KB) while excluding unrelated enterprise transaction logs.'
  },
  {
    id: 28,
    src: '/assets/screenshots/28-ediscovery-reviewset-redaction-tag.png',
    title: 'Figure 28: Third-Party PII Redaction Tagging in Review Set',
    caption: 'Applied custom Requires-Redaction tag to strip co-located third-party PAN identifiers prior to external disclosure to data principals.'
  },
  {
    id: 29,
    src: '/assets/screenshots/29-ediscovery-group-based-rbac.png',
    title: 'Figure 29: Case-Sandboxed Reviewer RBAC & Chain-of-Custody Audit',
    caption: 'Assigned Purview Reviewer role group strictly to DSAR-2026-001 with 4-file Chain-of-Custody export (Summary, Locations, Settings, Statistics) backed by Unified Audit Logging.'
  },
  {
    id: 30,
    src: '/assets/screenshots/30-azure-rbac-kql-audit.png',
    title: 'Figure 30: Azure Resource Graph KQL RBAC Audit (All 11 Assignments)',
    caption: 'Single KQL query executed in Azure Resource Graph auditing all 11 role assignments across Subscription, Resource Group, Storage Account, and Container levels in under 2 seconds.'
  }
];

let currentLbIndex = 0;

// ── Lightbox Functions ──
function openLightbox(index) {
  const item = SCREENSHOTS[index];
  if (!item) return;
  currentLbIndex = index;
  
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lb-image');
  const caption = document.getElementById('lb-caption-text');
  const counter = document.getElementById('lb-counter-text');
  
  img.src = item.src;
  img.alt = item.title;
  caption.innerHTML = `<strong>${item.title}:</strong> ${item.caption}`;
  counter.textContent = `Screenshot ${index + 1} of ${SCREENSHOTS.length}`;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function nextLightbox(e) {
  if (e) e.stopPropagation();
  currentLbIndex = (currentLbIndex + 1) % SCREENSHOTS.length;
  openLightbox(currentLbIndex);
}

function prevLightbox(e) {
  if (e) e.stopPropagation();
  currentLbIndex = (currentLbIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length;
  openLightbox(currentLbIndex);
}

// Keyboard shortcuts for Lightbox
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightbox-modal');
  if (!modal || !modal.classList.contains('active')) return;
  
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightbox();
  if (e.key === 'ArrowLeft') prevLightbox();
});

// Click outside modal container to close
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('lb-wrapper')) {
        closeLightbox();
      }
    });
  }
});

// ── Reading Progress Bar ──
window.addEventListener('scroll', () => {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  bar.style.width = scrolled + '%';
}, { passive: true });

// ── Mobile Menu Toggle ──
document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.getElementById('mobile-btn');
  const navbar = document.getElementById('navbar');
  if (mobileBtn && navbar) {
    mobileBtn.addEventListener('click', () => {
      navbar.classList.toggle('menu-open');
    });
  }
});

// ── Table of Contents Active Highlighting ──
document.addEventListener('DOMContentLoaded', () => {
  const tocLinks = document.querySelectorAll('.toc-link');
  if (tocLinks.length === 0) return;
  
  const sections = Array.from(tocLinks)
    .map(link => {
      const id = link.getAttribute('href').replace('#', '');
      return document.getElementById(id);
    })
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(s => observer.observe(s));
});

// ── One-Click Code Copy ──
function copyCode(btn) {
  const codeBlock = btn.closest('.code-block').querySelector('code');
  if (!codeBlock) return;
  
  navigator.clipboard.writeText(codeBlock.innerText).then(() => {
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    btn.style.color = 'var(--accent-green)';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.color = '';
    }, 2000);
  });
}
