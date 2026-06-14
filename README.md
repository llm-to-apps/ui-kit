# OS7 UI Kit

Shared source-based UI kit for OS7 application templates.

This repository intentionally ships editable source files instead of a compiled
component package. OS7 apps import files from `./ui-kit/src` so agents can inspect
and edit components, tokens, and styles inside each app workspace.

## Structure

```text
src/
  components/ui/
  lib/
  styles/
```

The components follow shadcn/ui conventions with Tailwind CSS utility classes,
CSS variable tokens, and Radix primitives where needed.
