# 👩🏾‍💻 CONTRIBUTING.md

## Uchechi's AI-Driven Development Workflow with Cursor & ChatGPT

This project follows a deliberate, AI-augmented development workflow that emphasizes deep understanding, planning, and production-quality implementation. All contributors are expected to follow these steps to ensure clarity, maintainability, and scalability of code.

---

## 🔹 Step 1: Understand & Scope

- ✅ Fully understand the assigned task or issue.
- ✅ Define clear **success criteria**:
    - What does "done" look like?
    - What should not break?
    - Performance/security expectations?
- ✅ Document the task in `TODO.md` or equivalent:
    - Context, goals, links, and scope.

---

## 🔹 Step 2: Context Sync with Cursor

- Ask Cursor to:
    - Read and analyze the relevant code.
    - Understand architecture, patterns, and dependencies.
    - Identify potential breaking changes or compatibility issues.
    - Map dependencies and data flow.
    - Ask clarifying questions.
- **Important**: Instruct Cursor  
  _"Do not take any action yet. Let's plan as engineers together."_
- **Validation Checklist**:
    - [ ] Current patterns and conventions identified
    - [ ] Dependencies mapped and understood
    - [ ] Potential breaking changes flagged

---

## 🔹 Step 3: Check for Existing Patterns

- Search for prior art:
    - Similar features already implemented.
    - Utilities or helpers to reuse (DRY).
    - Nearby TODOs, FIXMEs, deprecated patterns.

---

## 🔹 Step 4: Collaborative Planning

- Think through possible solutions independently.
- Discuss your plan with Cursor.
- Ask Cursor to:
    - Refine or optimize the approach.
    - Identify risks or tradeoffs.
- Iterate until you finalize a strong **v1 plan**.

---

## 🔹 Step 5: Granular Design with ChatGPT

- Use ChatGPT to:
    - Break the plan into **granular implementation steps**.
    - Explore tradeoffs, edge cases, failure modes.
    - Improve design for cloud-first, scalable, enterprise-ready architecture.

---

## 🔹 Step 6: Contracts & Interfaces

Before coding, define:

- **API contracts** (request/response with proper typing)
- **DTOs, schemas, interfaces** (TypeScript-first approach)
- **Function signatures** with clear input/output types
- **Database schema changes** (migrations, indexes, constraints)
- **API versioning strategy** if endpoints change
- Align them with existing standards and system constraints.

**Quality Gates**:

- [ ] Type safety enforced end-to-end
- [ ] Backward compatibility maintained
- [ ] Schema changes reviewed for performance impact

---

## 🔹 Step 7: Implementation Plan

Request or define a step-by-step **phased plan**:

- Follow established codebase conventions.
- Avoid arbitrary schema or architectural changes.
- **Performance impact assessment** - identify bottlenecks early.
- **Rollback strategy** - plan for quick reversion if needed.
- **Monitoring & logging requirements** - observability from day one.
- If necessary, justify and get explicit confirmation before proceeding.
- Ensure error handling, logging, validation, and testability are planned.

**Engineering Rigor**:

- [ ] Performance benchmarks defined
- [ ] Rollback procedure documented
- [ ] Monitoring/alerting strategy planned
- [ ] Technical debt impact assessed

---

## 🔹 Step 8: Pre-Implementation Validation

- Confirm plan handles:
    - **Edge cases and error scenarios** with graceful degradation.
    - **Cloud-first scalability patterns** (stateless, distributed).
    - **Security vulnerabilities** - authentication, authorization, input validation.
    - **Performance risks** - N+1 queries, memory leaks, blocking operations.
- **Dependency analysis**:
    - Impact on existing features and services.
    - Version compatibility and breaking changes.
- Plan testing coverage:
    - Unit, integration, mocks/fakes as needed.
    - **Load testing** for performance-critical features.
- Update `.env.example`, configs, or docs if impacted.

**Security & Performance Gates**:

- [ ] Security scan planned for new attack vectors
- [ ] Performance regression tests defined
- [ ] Dependency vulnerabilities checked

---

## 🔹 Step 9: Implementation

- 🚀 Begin coding:
    - **Small, atomic commits** with descriptive messages.
    - Stay aligned with Cursor/ChatGPT during execution.
    - **Self-review checklist** before each commit.
    - Add or update relevant tests with meaningful assertions.
    - Follow formatting/linting rules (Prettier, ESLint, etc.).
    - **Performance profiling** for critical paths.
    - **Documentation** for complex business logic and algorithms.

**Code Quality Standards**:

- [ ] Self-review completed before commit
- [ ] Performance impact measured
- [ ] Complex logic documented with examples
- [ ] Error handling covers edge cases
- [ ] Tests validate behavior, not just coverage

---

## 🔹 Step 10: Definition of Done

Before opening a PR, verify:

- [ ] **Code meets task goals** and success criteria.
- [ ] **No schema or infra changes** without justification.
- [ ] **Edge cases are handled** with graceful degradation.
- [ ] **Tests are included and pass** with meaningful assertions.
- [ ] **Feature is secure, modular, and reusable**.
- [ ] **Performance benchmarks** met or exceeded.
- [ ] **Technical debt** minimized or documented.
- [ ] **Maintainability score** - code is readable and extensible.
- [ ] **Rollback tested** and confirmed working.
- [ ] Docs, changelogs, or TODOs updated if needed.

**Engineering Excellence Checklist**:

- [ ] Code follows SOLID principles
- [ ] No code smells or anti-patterns introduced
- [ ] Resource usage optimized (memory, CPU, I/O)
- [ ] Monitoring and observability implemented

---

## 🔹 Optional: Post-Merge Notes

After merge:

- Reflect in `DEVLOG.md` or similar:
    - Lessons learned.
    - Patterns to reuse.
    - Any follow-ups or refactors for future sprints.

---

## 🙏🏾 Final Notes

This workflow is designed to produce **high-quality, enterprise-grade software** while keeping the developer in control of AI tools. We aim for thoughtfulness, clarity, and long-term maintainability.

Thanks for contributing the right way. 💙
