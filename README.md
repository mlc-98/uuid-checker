# uuid-checker

Checks if a string is accepted by a UUID regex. Versions [1-7] are supported, as well as nil UUIDs. This package is based on [afram's `is-uuid` package](https://github.com/afram/is-uuid). My version is just a basic update to use ES Modules instead of `require()` and some minor changes.

Once conceptual difference is in the API. Whereas afram's package offers methods (`isUUID.v1`, `isUUID.v2`, `isUUID.nil`, `ìsUUID.anyNonNil`), this version only exposes one function (`isUUID`), which in turn can take up to two arguments: `input`, the string to be evaluated, and an optional `options` object, which contains one field: `validators`. In `validators`, users can pass the UUID versions they want to test the input against. If no validators are provided, the function will check *with all the validators, including `nil`*. Therefore, `isUUID` will return `true` for nil uuids if no validators are specified.

Another difference is that this package also validates UUID v7.


```typescript
import { isUUID, v1, v7 } from 'uuid-checker';

// false
console.log(isUUID('wrong-string'));

// true
console.log(isUUID('22bf0f7a-cf34-4df9-9678-78dcbf590500'));

// false
console.log(isUUID('22bf0f7a-cf34-4df9-9678-78dcbf590500', { validators: [v1] }))

// true
console.log(isUUID('00000000-0000-0000-0000-000000000000'));

// false
console.log(isUUID('00000000-0000-0000-0000-000000000000', { validators: [v7] }));


```