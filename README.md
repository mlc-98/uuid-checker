# uuid-checker

Checks if a string is accepted by a UUID regex. Version [1-7] are supported, as well as nil UUIDs.

```typescript
console.log(isUUID('wrong-string')); // false
console.log(isUUID('22bf0f7a-cf34-4df9-9678-78dcbf590500')); // true
console.log(isUUID('22bf0f7a-cf34-4df9-9678-78dcbf590500', { validators: [v1] })) // false, it's a valid uuid, but version 4, not 1

```

This project was created using `bun init` in bun v1.2.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
