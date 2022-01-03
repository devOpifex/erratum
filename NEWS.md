# erratum 2.2.0

- Renamed `jab` to `bash`
- Remove deprecated `enforce`
- Add tests

# erratum 2.1.0

- Deprecate `enforce` in favour of `resolve`, much easier to memorise
- Ability to retrieve the call wherefrom the issue originates (from the `call` field)
- `e` and `w` capture the name of the parent function from which they are called
- Added `raiser` to change the `raise` method.
- `raise.e` and `raise.w` to define global `raise` methods
- Added `is.problem` to check whether the object is an error or a warning
- Fix `jab` when warning or error use a function.

# erratum 2.0.0

- Rename the package from err to erratum: err is already on CRAN.
- Rename `latche`, and `latchw` to `latch.e`, and `latch.w`.
- Add `return` method for error escalation.

# erratum 1.0.1

- Add `latche`, and `latchw` to latch errors and warnings onto object to later `enforce` them.
- Added `defer_enforce` to defer the enforce to when the function exits.

# erratum 1.0.0

* Initial version
