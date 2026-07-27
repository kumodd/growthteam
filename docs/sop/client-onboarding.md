# Growth Teams — Client Onboarding SOP
**Use this from the moment the contract is signed**

---

## Trigger
This SOP begins when:
1. Service Agreement is signed by both parties
2. 40% initiation invoice is paid

**Do not begin any work until both conditions are met.**

---

## Step 1: Send Welcome Email (Day 0 — same day as payment received)

**Subject:** Welcome to Growth Teams — Project Kickoff

```
Hi [Name],

Payment received — thank you. We are officially starting.

Here is what happens next:

1. I will send a calendar invite for our kickoff call within 24 hours.
   Please aim for 45–60 minutes. We suggest [Time Zone] mornings.

2. Before the call, please complete the Onboarding Checklist below.

3. After the call, we set up your project channel and begin Sprint 1.

──────────────────────────────────────────
ONBOARDING CHECKLIST (please complete before kickoff call)

□ Share access credentials (existing systems, APIs, hosting accounts)
□ Share any existing design files, brand guidelines, or logo files
□ Confirm your preferred communication channel (Slack / WhatsApp / Email)
□ Confirm your preferred time for bi-weekly demos
□ Share any reference systems you like (screenshots, URLs, notes)

Please reply to this email with the above, or we can go through it together on the call.

──────────────────────────────────────────

Your project reference is: GT-[YEAR]-[NUMBER]
Your lead developer is: [Name]

Looking forward to building this with you.

[Your Name]
Growth Teams | hello@growthteams.in
```

---

## Step 2: Send Kickoff Call Invite (Day 0–1)

- Tool: Google Meet or Zoom
- Duration: 45–60 minutes
- Invite the key decision-maker + any technical contact the client has

---

## Step 3: Kickoff Call Agenda

**Before the call:**
- Review the proposal document and discovery notes
- Prepare a list of open questions (access, ambiguities, priorities)
- Set up a blank Notion doc for call notes

**Call Agenda (60 min):**

| Time | Topic |
|------|-------|
| 0–5 min | Introductions, quick recap of project |
| 5–20 min | Go through scope line-by-line — confirm each item |
| 20–35 min | Open questions from our side + their side |
| 35–45 min | Agree on: communication channel, demo cadence, escalation contact |
| 45–55 min | Confirm access checklist status |
| 55–60 min | Next steps + sprint 1 focus |

**What to confirm on the call:**
- [ ] Scope is understood and agreed (no surprises)
- [ ] Primary communication channel confirmed
- [ ] Demo frequency confirmed (bi-weekly recommended)
- [ ] Who reviews and approves on the client side?
- [ ] Who is the escalation contact if something urgent comes up?
- [ ] All required accesses have been shared or are in progress

---

## Step 4: Project Setup (Day 1–2 after kickoff)

### Internal Setup
- [ ] Create GitHub repository (private): `growthteams/[project-name]`
- [ ] Create project in Linear (or Notion board) with Sprint 1 tasks
- [ ] Create client folder in Google Drive: `Clients/[Client Name]/`
  - Sub-folders: `Contract`, `Designs`, `Assets`, `Docs`, `Comms`
- [ ] Store signed contract in Drive

### Client Communication Setup
If using Slack:
- [ ] Create shared Slack channel: `#[client-name]-project`
- [ ] Invite client contacts to channel
- [ ] Pin: project reference, proposal doc link, kickoff notes

If using email only:
- [ ] All project emails CC'd to one thread (reply-all discipline)
- [ ] Confirm client's preferred email address for updates

---

## Step 5: Send Kickoff Summary (Within 24 hours of call)

**Subject:** Kickoff Summary — [Project Name]

```
Hi [Name],

Thanks for the call. Here is a summary:

PROJECT: [Project Name]
REF: GT-[YEAR]-[NUMBER]
LEAD: [Your Name]

SCOPE CONFIRMED
[3–5 bullet points summarising the agreed scope]

SPRINT 1 FOCUS (first 2 weeks)
[2–3 specific things you will build in Sprint 1]

FIRST DEMO
[Date/Time confirmed for bi-weekly demo]

COMMUNICATION
Channel: [Slack / WhatsApp / Email]
Response time: Within 4 hours (business hours)
Demo cadence: Every 2 weeks

OPEN ITEMS
[List any unresolved questions or pending accesses]

Please confirm you are aligned with the above by replying "Confirmed".

[Your Name]
```

---

## Step 6: Begin Sprint 1

- Sprint 1 begins the day the kickoff summary is confirmed
- First task: Architecture and database design (internal review, not client-facing)
- Set up the development environment, CI/CD pipeline, and staging environment
- Client should see a working staging link by end of Sprint 1

---

## Ongoing: Weekly Update (Every Friday)

Even if there is nothing dramatic to report, send a brief update every Friday.

**Template:**
```
Hi [Name],

Quick weekly update for [Project Name]:

✓ Completed this week: [2–3 bullets]
→ Focus next week: [2–3 bullets]
? Open items: [any pending approvals or inputs needed from client]

Next demo: [Date]

[Your Name]
```

This takes 5 minutes and eliminates 90% of anxious client messages.

---

## Escalation: What to Do When Things Go Wrong

### Bug discovered after demo approval
1. Fix it within 2 business days (no additional charge within Warranty Period)
2. Notify client immediately: "Found an issue, fixing it by [date]"
3. Never try to hide a bug. Clients trust teams that communicate problems.

### Scope creep request
1. Log the request in writing
2. Assess impact (time + cost)
3. Send written response: "This is outside the current scope. We can add it as Change Request #X for $[amount] / [X] additional days."
4. Get written approval before proceeding

### Timeline risk
1. Identify it as early as possible (never the day before the deadline)
2. Notify client in writing immediately: "We have identified a risk to the [milestone] deadline. Here is what happened and here is our plan."
3. Offer options: scope reduction, timeline extension, phased delivery

### Client becomes unresponsive
1. Send a gentle reminder after 5 business days of no response
2. After 10 days, send a formal notice: "Project is on hold pending your feedback. We will resume within 48 hours of your response."
3. After 21 days of non-response, apply the pause/termination clause in the contract
