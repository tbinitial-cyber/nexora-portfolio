# Enterprise Generative AI Acceptable Use Policy (AUP)
**Organization:** LawXTech Governance Standards / Nexora Consulting Framework  
**Author:** Tarun Bhatia (Privacy Engineer & Data Governance Architect)  
**Jurisdiction & Compliance:** India DPDP Act 2023 (Sections 6 & 8(5)) · ISO/IEC 27001 · PCI-DSS  
**Classification:** Public Governance Template  

---

## 1. Purpose & Scope
This policy establishes mandatory operational guardrails governing employee, contractor, and executive interaction with Generative AI tools (including Microsoft 365 Copilot, OpenAI ChatGPT, Anthropic Claude, and Google Gemini).

Under Section 6 of India's Digital Personal Data Protection Act, 2023 (DPDP Act), personal data may only be processed for specific lawful purposes for which notice and consent have been obtained. Pasting confidential customer records, employee identifiers, or proprietary source code into external LLM prompts constitutes unauthorized processing and potential breach under Section 8(5).

---

## 2. Permitted vs. Prohibited Data Categories in AI Prompts

| Data Category | Examples | Status in Generative AI |
|---|---|---|
| **Public / Marketing** | Published blogs, press releases, public documentation | ✅ **Permitted** across approved enterprise tools |
| **Internal Non-Sensitive** | De-identified operational templates, generic scheduling | ⚠️ **Conditional** (Enterprise tenants only) |
| **Personal Identifiable Information (PII)** | PAN Numbers, Aadhaar, Passport, Mobile numbers, Patient IDs | 🛑 **STRICTLY PROHIBITED** |
| **Financial & Payment Card Data** | Credit card numbers, CVVs, Bank account details, Reconciliation CSVs | 🛑 **STRICTLY PROHIBITED** (PCI-DSS violation) |
| **Proprietary Source Code & Keys** | API keys, Azure access tokens, encryption certificates | 🛑 **STRICTLY PROHIBITED** |

---

## 3. Microsoft 365 Copilot Guardrails
For enterprise instances of Microsoft Copilot:
1. **Automated DLP Enforcement:** All prompts and responses are scanned in real-time by Microsoft Purview DLP policy `Nexora-Copilot-PII-Protection`.
2. **Immediate Interception:** Prompts detected containing PAN, Credit Cards, or custom Healthcare IDs are automatically refused at the point of ingestion.
3. **Web Search Grounding:** Web grounding must be disabled when processing internal document summaries.

---

## 4. Enforcement & Incident Reporting
Any accidental transmission of sensitive data into an unapproved AI system must be reported to the Data Protection Officer (DPO) within 6 hours.

*Provided by LawXTech (lawxtech.in) · Tarun Bhatia*
