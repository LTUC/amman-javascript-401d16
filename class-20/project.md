# Mid-Term Projects - Backend

- Create an organization ( frontend & backend repos).
- Organization name will be the team name.
- Invite team members to the organization.
- The repo name will be the project name.
- The only person who can merge is the team leader.
- Plan for everything first draw the wireframe and structure your DataBase.
- Prepare a presentation.

# Git & GitHub Team Workflow

## When you start a new feature...

- Start from an up-to-date _main_ branch
  - `git checkout main` or `git checkout staging`
  - `git pull origin main` or `git pull origin staging`
  - Create a new feature branch with `git checkout -b <branch_name>`
- Do work on your feature branch and **add**, **commit**, and **push**
  - `git add <file>`
  - `git commit -m <useful message>`
  - `git push origin <feature_branch_name>`
- On GitHub...
  - Create a Pull Request (PR) for that branch on GitHub
  - Have someone else review the code in the PR and merge it

## Time for a Merge Party! we should do the merge party each day or twice a day

**WHEN A PULL REQUEST FROM SOMEONE ELSE'S \<FEATURE BRANCH> IS MERGED TO MAIN/staging, EVERYONE MUST DO THESE STEPS**

- commit changes to your _feature branch_ - not to lose my local changes
  - `git add <file>`
  - `git commit -m <useful message>`
- update your local _main_ branch
  - `git checkout main` or `git checkout staging`
  - `git pull origin main` or `git pull origin staging`
- update your _feature branch_ with changes in _main_
  - `git checkout <feature_branch_name>`
  - `git merge main` or `git merge staging`
- handle merge conflicts _if there are any_
  - Check all of your project files for the markers that indicate merge conflicts (in other words, the `>>>>>>>>>` and `HEAD` stuff that has mysteriously appeared in your code)
  - Edit the code to remove the redundancies causing the merge conflict, and eliminate the markers
  - `git add <affected-files>`
  - `git commit -m "merged main"` or `git commit -m "merged staging"`
