# Growth Teams — Project Delivery SOP

---

## Delivery Philosophy
We ship working software, not promises of working software. Every 2 weeks, the client sees something real. Surprises are only positive ones.

---

## Sprint Structure

### Sprint = 2 weeks
Every project is broken into 2-week sprints. Each sprint has:
- A defined goal (agreed at the start of the sprint)
- A demo at the end (shown to the client)
- A retrospective note (internal — what went well, what to fix)

### Sprint Ceremonies

| Ceremony | Frequency | Duration | Who |
|----------|-----------|---------|-----|
| Sprint Planning | Start of each sprint | 1 hour | Team |
| Daily Check-in | Every day | 15 minutes | Team |
| Client Demo | End of each sprint | 30–45 min | Team + Client |
| Sprint Retrospective | End of each sprint | 30 min | Team only |

---

## Sprint Planning (Start of Sprint)

**Goal:** Define what gets built this sprint. No ambiguity.

**Inputs:**
- Remaining scope from proposal
- Feedback from last demo
- Any approved change requests

**Output:**
- Sprint goal: one sentence describing what the system can do by end of sprint
- Sprint task list in Linear/Notion with assignees and effort estimates
- Shared with client (optional, but transparency builds trust)

**Planning rules:**
- Only commit to what can realistically be done in 2 weeks
- Include buffer (20–30% of sprint capacity)
- Broken down to 1–4 hour tasks where possible

---

## Daily Check-in (Internal)

**Format (async on Slack/WhatsApp, or 15 min call):**
- What did I complete yesterday?
- What am I doing today?
- Any blockers?

**Rule:** If you are blocked, say so immediately. Do not wait for the daily check-in.

---

## Client Demo (End of Sprint)

**Before the demo:**
- [ ] Deploy to staging environment (never demo from local machine)
- [ ] Test every feature you will show
- [ ] Prepare a quick flow: know what you will click and in what order
- [ ] Have a backup video/screenshots in case of internet issues

**Demo structure (30–45 min):**
1. Recap (5 min): "Last sprint we completed X. Today we are showing Y."
2. Live demo (15–25 min): Show the system, click through it, explain what each part does
3. Q&A (5–10 min): Client asks questions, you answer
4. Next sprint preview (5 min): "Next, we are building Z."
5. Approval: "Is there anything you want changed before we move on?"

**After the demo:**
- Send a written summary within 2 hours:
  - What was shown and approved
  - Feedback received and whether it is in-scope or a change request
  - Next sprint focus

**Getting demo approval:**
Always close the demo with explicit approval:
> "Is everyone happy to move forward based on what you have seen today, or are there changes needed?"

Get this in writing (email reply or Slack message). This protects both parties.

---

## Code Standards

### Git Workflow
- `main` branch is always deployable
- All work happens on feature branches: `feature/user-auth`, `fix/dashboard-crash`
- Pull requests required before merging to `main`
- Commit messages: descriptive and in present tense: "Add role-based dashboard filter"

### Code Review Checklist
Before any PR is merged:
- [ ] Does it work as described in the task?
- [ ] Are error states handled (empty states, loading, network failure)?
- [ ] Is the code readable? Are variable names clear?
- [ ] Are there obvious performance issues (N+1 queries, large unoptimised loops)?
- [ ] Is sensitive data (passwords, tokens) handled correctly?
- [ ] Is the change covered by at least one test (unit or integration)?

### API Standards
- RESTful conventions (GET, POST, PUT, DELETE)
- JSON request/response
- Consistent error response format: `{ "error": "message", "code": "ERROR_CODE" }`
- Versioned if likely to change: `/api/v1/`
- Postman collection updated with every endpoint

---

## QA Checklist (Before Every Demo)

**Functional**
- [ ] Core user flows work end-to-end
- [ ] All forms validate correctly (required fields, format validation)
- [ ] All data is saved and retrieved correctly
- [ ] Role permissions are enforced (test with each role)
- [ ] Error states are handled (empty lists show a message, network errors show a message)

**Performance**
- [ ] Pages load in under 3 seconds on a standard connection
- [ ] No console errors or warnings

**Mobile (if applicable)**
- [ ] Tested on iOS and Android simulator
- [ ] Touch targets are large enough
- [ ] Keyboard does not obscure input fields

**Security**
- [ ] No hardcoded credentials in code
- [ ] API endpoints require authentication where appropriate
- [ ] User cannot access data belonging to another user

---

## Change Request Process

**What is a change request?**
Any work not in the original scope document. Examples:
- New feature requested after kickoff
- Significant redesign of an approved screen
- Third-party integration not in scope

**Process:**
1. Client requests change (written — email or Slack)
2. Developer assesses: How many hours? Does it affect the timeline?
3. Developer sends Change Request document:
   ```
   Change Request #[NUMBER]
   Project: [Project Name]
   Date: [Date]

   Requested change: [What the client asked for]
   Impact on scope: [What we need to build/modify]
   Additional cost: $[Amount]
   Timeline impact: +[X] days
   
   Please reply "Approved" to proceed.
   ```
4. Do not begin work until written approval is received

---

## Handover Checklist (Final Delivery)

### Code
- [ ] All code merged to `main` and tagged: `v1.0.0`
- [ ] README with: setup instructions, environment variables, deployment steps
- [ ] Postman collection / API documentation
- [ ] Database schema documentation

### Deployment
- [ ] Live on production environment
- [ ] Environment variables set correctly (not hardcoded)
- [ ] SSL certificate active
- [ ] Backup process in place (daily database backups)
- [ ] Domain pointed and working

### Documentation
- [ ] User manual (PDF or Notion page) — brief, screenshot-based
- [ ] Admin guide (how to manage users, settings)
- [ ] Known limitations documented

### Training
- [ ] Training call completed (90 minutes, recorded)
- [ ] Training recording shared with client
- [ ] Client has admin credentials and can log in independently

### Handover Sign-off
- [ ] Client confirms system is accepted (written)
- [ ] Final invoice (20%) raised and paid
- [ ] Warranty Period begins (30 days from this date)

---

## Post-Launch Support (30-Day Warranty)

**What is covered:**
- Bugs in functionality that was approved during demos
- Performance issues not present during testing
- Data migration errors (if we handled the migration)

**What is NOT covered:**
- New features
- Issues caused by client-side changes (hosting, third-party services)
- User error

**Response SLA:**
- Critical (system down): 2 hours
- Major (key feature broken): Next business day
- Minor (cosmetic, non-blocking): Within 5 business days

**Retainer conversation (Day 20):**
At day 20 of the warranty period, have a call or send this message:
> "The warranty period ends in 10 days. We would love to continue working together. Can we discuss an ongoing support and development retainer? Even a minimal arrangement means you always have us available when you need something."

---

## Project Closure

After the warranty period ends:
1. Archive the project in your internal docs
2. Ask for a written testimonial (specific: project name, outcome, what they liked)
3. Ask for a Clutch review (provide direct link)
4. Ask for a referral introduction if satisfied
5. Log the project in your case study library (internal)
6. Update the website case studies if results are strong

---

## Tools We Use

| Purpose | Tool | Cost |
|---------|------|------|
| Code hosting | GitHub | Free/Pro |
| Project management | Linear | Free |
| Client docs | Notion | Free |
| Design | Figma | Free |
| Communication | Slack (shared workspace) | Free |
| Video calls | Google Meet | Free |
| API testing | Postman | Free |
| Staging hosting | Railway / Render | ~$5/mo |
| CI/CD | GitHub Actions | Free |
