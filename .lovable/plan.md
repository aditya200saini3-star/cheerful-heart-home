

## Goal
Move the code from your Lovable-synced repo (`friendly-greetings`) into your existing `QuizMasterProject` repo using local Git commands.

## What you'll need
- Git installed on your computer ([git-scm.com](https://git-scm.com/downloads))
- A terminal (Command Prompt / PowerShell on Windows, Terminal on Mac/Linux)
- Your GitHub credentials ready (or GitHub Desktop if you prefer a UI)

## Step-by-step (command line)

**1. Clone the Lovable-synced repo to your computer**
```bash
git clone https://github.com/aditya200saini3-star/friendly-greetings.git
cd friendly-greetings
```

**2. Remove the existing remote and point to your target repo**
```bash
git remote remove origin
git remote add origin https://github.com/aditya200saini3-star/QuizMasterProject.git
```

**3. Check what branch you're on**
```bash
git branch
```
Note the branch name (usually `main` or `master`).

**4. Push everything to QuizMasterProject**

If `QuizMasterProject` is empty:
```bash
git push -u origin main
```

If `QuizMasterProject` already has files (README, etc.) and you want to **overwrite** it with the Lovable code:
```bash
git push -u origin main --force
```

⚠️ `--force` will erase whatever is currently in `QuizMasterProject`. Only use it if you're sure you don't need that content.

**5. Verify**
Open `https://github.com/aditya200saini3-star/QuizMasterProject` in your browser — your Lovable code should now be there.

## Alternative: GitHub Desktop (no command line)

1. Install [GitHub Desktop](https://desktop.github.com/)
2. **File → Clone Repository** → pick `friendly-greetings`
3. **Repository → Repository Settings → Remote** → change the URL to `https://github.com/aditya200saini3-star/QuizMasterProject.git`
4. **Repository → Push** (check "force push" in settings if the target repo isn't empty)

## Important caveat

After this manual push, **`QuizMasterProject` will NOT auto-sync with Lovable**. Lovable will keep pushing future changes only to `friendly-greetings`. To keep `QuizMasterProject` updated, you'd need to repeat steps 1–4 every time, or just keep using `friendly-greetings` as your live repo.

If you want true auto-sync to `QuizMasterProject`, the only path is to delete that repo on GitHub, then use Lovable's Connectors flow to create a fresh repo with that exact name — but be aware Lovable creates new repos rather than linking to existing ones.

