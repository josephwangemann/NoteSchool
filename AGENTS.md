# NoteSchool agent guide

## App at a glance

NoteSchool is a small Expo/React Native music theory reference app. Its three tabs show diatonic chords, quiz fretboard notes, and play reference pitches. Read `README.md` for user-facing setup and `package.json` for the current dependency versions and scripts.

## Where to work

- `src/app/_layout.tsx` provides the root stack and safe area context. `src/app/(tabs)/_layout.tsx` defines the native tabs; `index.tsx`, `notes.tsx`, and `pitches.tsx` are the Chords, Notes, and Pitches screens.
- `src/utils/chords.ts` contains the music theory calculations. `src/utils/keys.ts` defines selectable keys and modes; `src/utils/notes.ts` maps notes to the bundled files in `assets/audio/`.
- `src/constants/theme.ts` is the shared color palette. `src/constants/storage.ts` defines the MMKV instance and persisted setting keys. `src/components/OptionsModal.tsx` is the shared selector UI.
- `app.json` holds Expo configuration. `ios/` and `android/` are tracked native projects, with their own settings and generated assets. Check their existing changes before editing or regenerating them; `expo prebuild --clean` replaces these directories.

## Established conventions

- Use TypeScript, functional React components, and hooks, following the style of the file you touch. Keep changes focused; avoid unrelated formatting or refactors.
- Reuse the shared theme, music data, and storage keys instead of duplicating them. Preserve note spelling and the distinction between display labels (such as `C♯`) and internal key values (such as `C#`).
- Keep audio playback on `expo-audio` and native tab navigation on Expo Router's `NativeTabs`. When package APIs change, check the installed package types before changing call sites.
- Keep comments for non-obvious behavior and explain decisions that affect future maintenance. Do not turn incidental lint findings into unrelated edits.

## Tooling and verification

- npm is the package manager. Keep `package-lock.json` in sync with `package.json`; do not reintroduce Bun or `patch-package`. Use Node.js 22.13 or newer.
- Use `npm install` for dependencies, `npm run ios` / `npm run android` for local builds, and `npm run lint` for linting. For type checking, use `npx tsc --noEmit`. There is no test script currently.
- After changing native dependencies, sync CocoaPods in `ios/`. Validate in proportion to the change and report any checks you could not run or failures unrelated to the task.
