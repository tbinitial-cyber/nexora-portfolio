/* ═══════════════════════════════════════════════════════════
   LawXTech (lawxtech.in) — Interactive Client Scripts & Lightbox
   Author: Tarun Bhatia (Privacy Engineer & Data Governance Specialist)
═══════════════════════════════════════════════════════════ */

// ── 30 Verified Screenshots Registry ──
const SCREENSHOTS = [
  {
    id: 1,
    file: '01-entra-employee-directory.png',
    title: 'Figure 01: Workforce Directory Provisioning (26 Users)',
    caption: 'Provisioned 26 cloud identities in Microsoft Entra ID across Indian operational centers, segregating routine business users from compliance leadership (simulated DPO Aadi Dugar) and break-glass administrative accounts under DPDP Act Section 8(5) readiness.'
  },
  {
    id: 2,
    file: '02-entra-security-groups-part1.png',
    title: 'Figure 02: Departmental Security Group Segmentation (Part 1)',
    caption: 'Established role-segmented Entra Security Groups (SG-NEX-Finance, SG-NEX-HR, SG-NEX-IT-Security) standardizing group-based access control across operational departments.'
  },
  {
    id: 3,
    file: '03-entra-security-groups-part2.png',
    title: 'Figure 03: Departmental Security Group Segmentation (Part 2)',
    caption: 'Completed departmental segregation ensuring Legal-Compliance, Privacy-Operations, and executive review teams operate within defined organizational boundaries.'
  },
  {
    id: 4,
    file: '04-pim-dpo-eligible-roles.png',
    title: 'Figure 04: JIT Privilege Elevation via Entra PIM',
    caption: 'Enforcing zero standing privileges for routine compliance administration. High-privilege roles for the simulated DPO are held as Eligible PIM assignments requiring MFA and business justification.'
  },
  {
    id: 5,
    file: '05-pim-breakglass-admin.png',
    title: 'Figure 05: Isolated Break-Glass Recovery Account',
    caption: 'Isolated emergency Global Administrator account with cloud-only identity and exclusion from routine operational workflows under ISO/IEC 27001:2022 Control 8.2 emergency access governance.'
  },
  {
    id: 6,
    file: '06-azure-resource-group-central-india.png',
    title: 'Figure 06: Central India Regional Resource Placement',
    caption: 'Regional resource placement within Central India (rg-nexora-privacy-lab-dev-001) for Purview, Storage, and SQL assets supporting domestic data architecture requirements.'
  },
  {
    id: 7,
    file: '07-azure-all-cloud-resources.png',
    title: 'Figure 07: Unified Cloud Resource Overview',
    caption: 'Overview of deployed Azure resources encompassing Microsoft Purview account (purview-nexora-gov-001), segregated storage accounts (stnexorafinance001, stnexorahrdev001), and SQL data stores.'
  },
  {
    id: 8,
    file: '08-purview-account-rbac.png',
    title: 'Figure 08: Purview Governance Plane RBAC',
    caption: 'Administrative role-based access control on purview-nexora-gov-001 allowing auditors to review compliance policies without permissions to alter classification engines.'
  },
  {
    id: 9,
    file: '09-storage-account-rbac.png',
    title: 'Figure 09: Storage Account Management-Plane RBAC',
    caption: 'Enforcing metadata-only read visibility on stnexorafinance001 with zero direct data-plane blob access at the storage account scope.'
  },
  {
    id: 10,
    file: '10-container-scoped-rbac.png',
    title: 'Figure 10: Container-Scoped Least-Privilege IAM',
    caption: 'Granular container-level permissions: SG-NEX-Finance holds Storage Blob Data Contributor only on finance-documents, while Privacy Operations is restricted to Storage Blob Data Reader.'
  },
  {
    id: 11,
    file: '11-azure-private-blob-container.png',
    title: 'Figure 11: Private Storage Container Configuration',
    caption: 'Eliminating anonymous public access on finance-documents container, requiring authenticated Microsoft Entra ID tokens for all data transactions.'
  },
  {
    id: 12,
    file: '12-azure-staged-financial-datasets.png',
    title: 'Figure 12: Staged Financial & Vendor Datasets',
    caption: 'Synthetic test datasets (bank_reconciliation.csv, card_transactions_test_only.csv, vendor_master.csv) simulating enterprise financial workloads with synthetic PAN and cardholder identifiers.'
  },
  {
    id: 13,
    file: '13-purview-datamap-source-registration.png',
    title: 'Figure 13: Keyless Purview Source Registration',
    caption: 'Registered Azure Blob Storage using System-Assigned Managed Identity authentication, eliminating persistent storage account keys and SAS tokens.'
  },
  {
    id: 14,
    file: '14-purview-unified-catalog-assets.png',
    title: 'Figure 14: Unified Catalog Asset Inventory',
    caption: 'Automated scanning and catalog indexing across cloud storage endpoints, providing inventory visibility into staged financial data assets.'
  },
  {
    id: 15,
    file: '15-purview-bank-reconciliation-schema.png',
    title: 'Figure 15: Column-Level PII Auto-Detection',
    caption: 'Automated classification scan identifying India Permanent Account Number (PAN) inside the Beneficiary_PAN_TEST column based on Purview system classifier pattern matches.'
  },
  {
    id: 16,
    file: '16-sensitivity-label-priority-9.png',
    title: 'Figure 16: Sensitivity Label Hierarchy & Document Protection (Priority 9)',
    caption: 'Configured label priority precedence (Priority 9) and Rights Management document protection for Confidential - PII and Financial records.'
  },
  {
    id: 17,
    file: '17-global-label-publishing-policy.png',
    title: 'Figure 17: Global Publishing & Downgrade Justification',
    caption: 'Publishing sensitivity label policy to SG-NEX-All-Employees with mandatory downgrade justification and audit logging.'
  },
  {
    id: 18,
    file: '18-custom-ndis-regex-classifier.png',
    title: 'Figure 18: Custom Healthcare & Patient ID Regex Classifier',
    caption: 'Custom Sensitive Information Type configuring regex pattern \bNDIS-\d{3}-\d{3}-\d{3}\b paired with healthcare proximity terms to detect proprietary patient identifiers.'
  },
  {
    id: 19,
    file: '19-auto-labeling-simulation-matches.png',
    title: 'Figure 19: Auto-Labeling Simulation Engine',
    caption: 'Simulation engine testing auto-labeling rules across Exchange, SharePoint, and OneDrive to verify matches prior to policy activation.'
  },
  {
    id: 20,
    file: '20-active-dlp-policies-overview.png',
    title: 'Figure 20: Active DLP Policy Suite',
    caption: 'Tenant synchronization of Nexora-PII-Financial-Leak-Prevention and Nexora-Copilot-PII-Protection across cloud messaging and collaboration workloads.'
  },
  {
    id: 21,
    file: '21-m365-external-dlp-rule.png',
    title: 'Figure 21: External Recipient Blocking Rule',
    caption: 'Data loss prevention rule configured to intercept sensitive identifiers (PAN, credit card numbers, patient IDs) across Exchange and cloud sharing channels.'
  },
  {
    id: 22,
    file: '22-live-outlook-dlp-block-proof.png',
    title: 'Figure 22: LIVE PROOF — Outlook DLP Policy Notification',
    caption: 'Observed Exchange Online DLP blocking notification during outbound email test containing synthetic PAN, card numbers, and patient IDs.'
  },
  {
    id: 23,
    file: '23-copilot-dlp-policy-config.png',
    title: 'Figure 23: Microsoft 365 Copilot DLP Configuration',
    caption: 'Configuring Microsoft 365 Copilot data loss prevention guardrails to inspect prompt submissions for sensitive personal identifiers.'
  },
  {
    id: 24,
    file: '24-live-copilot-prompt-block-proof.png',
    title: 'Figure 24: LIVE PROOF — Copilot Prompt Interception',
    caption: 'Observed prompt interception in Microsoft 365 Copilot Chat blocking submission of synthetic PAN and cardholder data as an automated technical data-security guardrail.'
  },
  {
    id: 25,
    file: '25-sharepoint-finance-portal-datasets.png',
    title: 'Figure 25: SharePoint Finance Portal Repository',
    caption: 'Restricted enterprise SharePoint site hosting staged vendor master records and invoices for simulated data discovery workflows.'
  },
  {
    id: 26,
    file: '26-ediscovery-dsar-case.png',
    title: 'Figure 26: eDiscovery Premium DSAR Case',
    caption: 'Provisioning case DSAR-2026-001-Vendor-and-Employee-Access-Request as a future-state DPDP Act Section 11 readiness simulation.'
  },
  {
    id: 27,
    file: '27-ediscovery-dsar-search-query.png',
    title: 'Figure 27: Targeted DSAR Search Query',
    caption: 'Targeted search query isolating 3 relevant files (272 KB) associated with Demo Vendor 0002 while filtering out non-responsive enterprise datasets.'
  },
  {
    id: 28,
    file: '28-ediscovery-reviewset-redaction-tag.png',
    title: 'Figure 28: Third-Party PII Redaction Tagging',
    caption: 'Applied Requires-Redaction tag to flag co-located third-party records within the review set for disclosure assessment and potential redaction.'
  },
  {
    id: 29,
    file: '29-ediscovery-group-based-rbac.png',
    title: 'Figure 29: Case-Sandboxed Reviewer RBAC & Process Evidence',
    caption: 'Assigned Purview Reviewer role group strictly to DSAR-2026-001 with 4-file eDiscovery process and audit report export (Summary, Locations, Settings, Statistics).'
  },
  {
    id: 30,
    file: '30-azure-rbac-kql-audit.png',
    title: 'Figure 30: Azure Resource Graph KQL RBAC Audit Output',
    caption: 'Verified 11-row least-privilege matrix demonstrating configured role separation across Subscription, Resource Group, Storage Account, and Container levels in Azure Resource Graph.'
  }
];

let currentLbIndex = 0;

// Universal path resolver for local file:// and web http/https
function getImgSrc(filename) {
  const isBlog = window.location.pathname.includes('/blog/') || window.location.href.includes('/blog/');
  return (isBlog ? '../assets/screenshots/' : 'assets/screenshots/') + filename;
}

// ── Lightbox Functions ──
function openLightbox(index) {
  const item = SCREENSHOTS[index];
  if (!item) return;
  currentLbIndex = index;
  
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lb-image');
  const caption = document.getElementById('lb-caption-text');
  const counter = document.getElementById('lb-counter-text');
  
  if (!modal || !img) return;

  img.src = getImgSrc(item.file);
  img.alt = item.title;
  if (caption) {
    caption.innerHTML = `<strong>${item.title}:</strong> ${item.caption}`;
  }
  if (counter) {
    counter.textContent = `Screenshot ${index + 1} of ${SCREENSHOTS.length} · Press Esc, click anywhere, or scroll to close`;
  }
  
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

// Scroll event listener: If user scrolls wheel or touches while modal is open, close lightbox so they are NEVER trapped!
window.addEventListener('wheel', () => {
  const modal = document.getElementById('lightbox-modal');
  if (modal && modal.classList.contains('active')) {
    closeLightbox();
  }
}, { passive: true });

// Click anywhere on modal background or image to close cleanly
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      // Don't close if clicking prev/next navigation buttons
      if (e.target.classList.contains('lb-nav-btn')) return;
      closeLightbox();
    });
  }
});

// ── Reading Progress Bar ──
window.addEventListener('scroll', () => {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (height > 0) {
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + '%';
  }
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
  const explicitText = btn.getAttribute('data-copy-text');
  const codeBlock = btn.closest('.code-block')?.querySelector('code');
  const textToCopy = explicitText !== null ? explicitText : (codeBlock ? codeBlock.innerText : '');
  if (!textToCopy) return;
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = btn.textContent;
    btn.textContent = 'Copied!';
    btn.style.color = 'var(--accent-green)';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.color = '';
    }, 2000);
  });
}
