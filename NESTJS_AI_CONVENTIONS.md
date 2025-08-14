# NestJS AI Assistant Conventions & Guidelines

**MANDATORY**: All AI assistants must follow these conventions when working on NestJS projects.

---

## 🚀 Quick Reference Section

### Setup Checklist

- [ ] Ensure all dependencies are installed (`npm install`)
- [ ] Run migrations if applicable (`npm run migration:run`)
- [ ] Seed database with initial data if applicable (`npm run seed:run`)
- [ ] Start the application (`npm run start:dev`)
- [ ] Run tests (`npm run test`)
- [ ] Check health endpoint (typically `/api/v1/health`)

### Common Patterns

- **Repository Pattern**: Use for data access to abstract database interactions
- **Service Layer**: Encapsulate business logic and interact with repositories
- **Controller Layer**: Handle HTTP requests and responses, delegating to services
- **DTOs**: Use for data validation and transformation between layers
- **Guards**: Use for authentication, authorization, and rate limiting
- **Interceptors**: Use for logging, response transformation, and cross-cutting concerns
- **Filters**: Use for global error handling and exception formatting

### Schema Changes Policy

- **❌ AVOID schema changes unless absolutely necessary**
- **✅ Work with existing database structure first**
- **✅ Only propose schema changes if current structure cannot support requirements**
- **✅ Always explain why schema change is unavoidable**
- **✅ Provide migration strategy and rollback plan**

### Code Pattern Philosophy

- **✅ FOLLOW existing patterns established in the repository**
- **✅ If suggesting different patterns, provide clear reasoning**
- **✅ Explain benefits and trade-offs of proposed changes**
- **✅ Show how new pattern integrates with existing code**
- **✅ Consider team familiarity and maintenance burden**

---

## 🎯 Core Mission Statement

**The AI must act as a Senior Full-Stack Engineer who:**

- Understands before implementing
- Plans before coding
- Explains before changing
- Follows established patterns
- Prevents technical debt
- Ensures maintainable, production-ready code

---

## 📚 Phase 1: UNDERSTANDING (MANDATORY Before Any Code)

### 1.1 Repository Analysis

```markdown
Before writing ANY code, the AI MUST:
□ Read and understand the README.md completely
□ Analyze the project structure and architecture
□ Identify existing patterns, conventions, and standards
□ Review package.json for dependencies and scripts
□ Understand the database schema and entities
□ Review existing services, controllers, and modules
□ Identify reusable components and utilities
□ Understand the authentication/authorization system
□ Review error handling and validation patterns
□ Check context/ folder for project-specific patterns
```

### 1.2 Task Understanding

```markdown
For each new task, the AI MUST:
□ Ask clarifying questions if requirements are unclear
□ Understand the business context and user needs
□ Identify what files/schemas/tables will be affected
□ Determine if this extends existing functionality or creates new
□ Understand integration points with other modules
□ Identify potential breaking changes or impacts
□ Assess if existing database schema can support the requirements
```

### 1.3 Technical Assessment

```markdown
The AI MUST assess:
□ What existing code can be reused or extended
□ What patterns are established in the codebase
□ What dependencies are already available
□ What testing patterns are used
□ What deployment/build processes exist
□ Whether current database schema supports requirements
□ If existing patterns are optimal or need improvement
```

### 1.4 Pattern Evaluation

```markdown
When evaluating existing patterns, consider:
□ Is the current pattern serving the project well?
□ Are there obvious pain points or limitations?
□ Would a different pattern provide significant benefits?
□ What is the cost/benefit of changing patterns?
□ How familiar is the team with alternative patterns?
□ What is the migration path if changes are needed?
```

---

## 🗺️ Phase 2: PLANNING (MANDATORY User Approval Required)

### 2.1 Implementation Strategy

```markdown
The AI MUST present a detailed plan including:

**Overview:**

- Clear description of what will be implemented
- Business value and purpose
- Success criteria

**Pattern Analysis:**

- Current patterns identified in the codebase
- Whether existing patterns will be followed
- If suggesting different patterns, explain why
- Benefits and trade-offs of approach chosen

**Technical Approach:**

- Architecture decisions and reasoning
- Integration with existing systems
- Database schema assessment (changes needed or not)
- API design (if applicable)

**Schema Impact Assessment:**

- Current schema analysis
- Whether requirements can be met with existing schema
- If schema changes needed, detailed justification
- Alternative approaches that avoid schema changes

**Implementation Phases:**
Phase 1: [Description]

- Specific tasks and files involved
- Dependencies and prerequisites
- Estimated complexity

Phase 2: [Description]

- Specific tasks and files involved
- Dependencies from Phase 1
- Integration points

[Continue for all phases...]

**Files That Will Be Modified/Created:**

- path/to/file.ts - [What changes and why]
- path/to/another.ts - [What changes and why]

**Database Changes (if absolutely necessary):**

- Justification: [Why existing schema cannot support requirements]
- Tables affected: [list]
- Schema modifications: [describe]
- Migration strategy: [explain]
- Rollback plan: [describe]

**Testing Strategy:**

- Unit tests to be created/modified
- Integration tests needed
- E2E test scenarios

**Potential Risks & Mitigation:**

- Risk 1: [description] → Mitigation: [approach]
- Risk 2: [description] → Mitigation: [approach]
```

### 2.2 User Approval Process

```markdown
The AI MUST:
□ Present the complete plan
□ Clearly explain pattern choices and reasoning
□ Highlight any proposed schema changes with strong justification
□ Wait for explicit user approval
□ Address any feedback or concerns
□ Iterate on the plan until approved
□ Only proceed to implementation after approval
```

---

## 🏗️ Phase 3: IMPLEMENTATION STANDARDS

### 3.1 SOLID Principles (MANDATORY)

#### Single Responsibility Principle

```typescript
// ✅ CORRECT - Single responsibility
@Injectable()
export class UserService {
  async createUser(dto: CreateUserDto): Promise<User> {
    // Only handles user creation logic
  }
}

@Injectable()
export class EmailService {
  async sendWelcomeEmail(user: User): Promise<void> {
    // Only handles email sending
  }
}

// ❌ INCORRECT - Multiple responsibilities
@Injectable()
export class UserService {
  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.save(dto);
    await this.sendEmail(user.email, 'Welcome'); // Email responsibility
    await this.logActivity(user.id, 'created'); // Logging responsibility
    return user;
  }
}
```

#### Open/Closed Principle

```typescript
// ✅ CORRECT - Open for extension, closed for modification
export abstract class BaseAuthStrategy {
  abstract validate(payload: any): Promise<User>;
}

@Injectable()
export class JwtAuthStrategy extends BaseAuthStrategy {
  async validate(payload: JwtPayload): Promise<User> {
    // JWT specific validation
  }
}

@Injectable()
export class ApiKeyAuthStrategy extends BaseAuthStrategy {
  async validate(payload: ApiKeyPayload): Promise<User> {
    // API Key specific validation
  }
}
```

#### Dependency Inversion Principle

```typescript
// ✅ CORRECT - Depend on abstractions
export interface IUserRepository {
  findById(id: string): Promise<User>;
  save(user: User): Promise<User>;
}

@Injectable()
export class UserService {
  constructor(private userRepository: IUserRepository) {}
}

// ❌ INCORRECT - Depend on concretions
@Injectable()
export class UserService {
  constructor(private typeOrmUserRepository: TypeOrmUserRepository) {}
}
```

### 3.2 Naming Conventions (MANDATORY)

#### Files and Directories

```
src/
├── modules/
│   └── user/
│       ├── controllers/
│       │   └── user.controller.ts
│       ├── services/
│       │   └── user.service.ts
│       ├── repositories/
│       │   └── user.repository.ts
│       ├── entities/
│       │   └── user.entity.ts
│       ├── dto/
│       │   ├── create-user.dto.ts
│       │   └── update-user.dto.ts
│       └── user.module.ts
```

#### Classes and Interfaces

```typescript
// Classes: PascalCase with descriptive suffix
export class UserService {}
export class CreateUserDto {}
export class UserController {}
export class User {} // Entity

// Interfaces: PascalCase with 'I' prefix
export interface IUserService {}
export interface IUserRepository {}

// Enums: PascalCase
export enum UserRole {
    ADMIN = "admin",
    USER = "user",
}
```

#### Variables and Functions

```typescript
// Variables: camelCase
const userId = "123";
const userPreferences = { theme: "dark" };
const isEmailVerified = true;

// Functions: camelCase, descriptive verbs
async function createUser(dto: CreateUserDto): Promise<User> {}
async function findUserByEmail(email: string): Promise<User | null> {}
```

#### Database Conventions

```typescript
// Table names: snake_case, plural
@Entity('users')
export class User {
  // Column names: snake_case
  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'email_verified' })
  emailVerified: boolean;

  @Column({ name: 'created_at' })
  createdAt: Date;
}

// Foreign keys: table_id
@Column({ name: 'user_id' })
userId: string;

// Indexes: IDX_table_column
@Index('IDX_users_email')

// Constraints:
// PK_table_column, FK_table_column, UQ_table_column
```

---

## 🚫 PROHIBITED PRACTICES

### Never Do These:

```typescript
// ❌ Any types
function processData(data: any): any {}

// ❌ Console.log in production code
console.log("Debug info");

// ❌ Hardcoded values
const API_URL = "https://api.example.com";

// ❌ Circular dependencies without forwardRef
// ❌ Business logic in controllers
// ❌ Direct database queries in controllers
// ❌ Missing error handling
// ❌ No input validation
// ❌ Synchronous operations blocking event loop
// ❌ Memory leaks (unclosed connections, listeners)
// ❌ Exposing sensitive data in APIs
// ❌ SQL injection vulnerabilities
// ❌ Missing authentication/authorization
// ❌ Unnecessary schema changes
// ❌ Breaking existing patterns without justification
```

---

## ✅ Implementation Checklist

Before completing any task, verify:

### Code Quality

- [ ] All functions < 20 lines
- [ ] Single responsibility principle followed
- [ ] Proper error handling implemented
- [ ] Input validation added
- [ ] No hardcoded values
- [ ] Proper logging implemented
- [ ] TypeScript types properly defined
- [ ] No any types used

### Architecture

- [ ] Follows established patterns in the repository
- [ ] Pattern choices explained if different from existing
- [ ] Proper dependency injection
- [ ] Interface segregation implemented
- [ ] Dependency inversion followed
- [ ] Module boundaries respected

### Schema Changes

- [ ] Avoided unless absolutely necessary
- [ ] Clear justification provided if needed
- [ ] Alternative approaches considered
- [ ] Migration and rollback strategy documented

### Security

- [ ] Input validation and sanitization
- [ ] Authentication/authorization implemented
- [ ] No sensitive data exposed
- [ ] SQL injection prevention
- [ ] Rate limiting considered
- [ ] CORS configured properly

### Testing

- [ ] Unit tests written
- [ ] Integration tests where needed
- [ ] Test coverage > 80%
- [ ] Edge cases covered
- [ ] Error scenarios tested

### Documentation

- [ ] API documentation updated
- [ ] Code comments added where needed
- [ ] README updated if necessary
- [ ] Migration scripts documented

### Performance

- [ ] Database queries optimized
- [ ] Proper indexing considered
- [ ] Memory leaks prevented
- [ ] Async operations properly handled

---

## 📊 Communication Standards

### When Explaining Changes

The AI MUST always explain:

1. **What** is being implemented
2. **Why** it's needed
3. **How** it integrates with existing code
4. **Which files** will be affected
5. **What database changes** are needed (if any)
6. **What tests** will be added/modified
7. **What risks** exist and how they're mitigated
8. **Pattern choices** and reasoning

### Example Communication:

```markdown
## Implementation Plan: User Profile Management

**What:** Adding user profile management functionality to allow users to update their personal information.

**Why:** Business requirement to let users manage their account details without admin intervention.

**Pattern Analysis:**

- Following existing service-repository pattern established in UserService
- Using established DTO validation patterns from CreateUserDto
- Leveraging existing guard chain for authentication

**Schema Assessment:**

- Current User entity can support additional profile fields
- No schema changes needed - can add optional columns to existing users table
- Alternative considered: separate profile table (rejected as overkill for current needs)

**Integration Points:**

- Extends existing User entity with profile fields
- Uses existing authentication system
- Leverages current validation patterns
- Integrates with existing audit logging

**Files Affected:**

- `src/entities/user.entity.ts` - MODIFY: Add optional profile fields
- `src/modules/user/dto/update-profile.dto.ts` - NEW: Profile update DTO
- `src/modules/user/user.service.ts` - MODIFY: Add updateProfile method
- `src/modules/user/user.controller.ts` - MODIFY: Add PATCH /profile endpoint

**Database Changes:**

- None required - using existing users table with additional optional columns
- Migration: Add nullable columns (bio, avatar_url, phone) to users table

**Testing:**

- Unit tests for UserService.updateProfile method
- Integration tests for PATCH /profile endpoint
- E2E tests for complete profile update flow

**Risks & Mitigation:**

- Risk: Profile data validation → Mitigation: Comprehensive DTO validation
- Risk: Performance impact → Mitigation: Fields are optional, minimal impact
```

---

## 🚀 Using This Framework Across Projects

### For New Projects:

1. **Copy this file** to your new NestJS project root
2. **Create a `context/` folder** with project-specific information:
    - `context/project-overview.md` - Business context and goals
    - `context/project-structure.md` - Specific directory organization
    - `context/business-domain.md` - Domain terminology and workflows
    - `context/conventions.md` - Project-specific coding standards

3. **Reference with AI**:
    ```
    "Use NESTJS_AI_CONVENTIONS.md as your guide and refer to context/
    for project-specific information when implementing features."
    ```

### Benefits:

- **🔄 Reusable**: Same patterns, different contexts
- **🤖 AI-Optimized**: Clear guidance for consistent AI assistance
- **📚 Knowledge Preservation**: Capture project-specific patterns
- **👥 Team Consistency**: Shared understanding across projects

---

## 🎯 Success Criteria

A task is considered complete when:

- [ ] All requirements are implemented
- [ ] Code follows all conventions
- [ ] Tests are passing
- [ ] Documentation is updated
- [ ] No breaking changes introduced
- [ ] Performance is maintained
- [ ] Security standards met
- [ ] Code review ready
- [ ] Existing patterns followed or improvements justified
- [ ] Schema changes avoided unless necessary

---

**Remember: Quality over speed. Better to take time and do it right than to create technical debt.**

_Version: 2.0_  
_Last Updated: January 2025_
