# TEAM GUIDE - How We Will Work Together

This guide explains how we will work together in harmony step by step, and also explains some terms.

## 1. What are Issues? And why did Benny create them?

Issue is one piece of work. I have created 12 Issues, one for each slice. The purpose of the issues is that everyone knows exactly what is theirs to build so their is no confusion. 

### Your Issues:

- Benny - Project setup / layout / nav
- Phillken - Responsive design
- Hannah - Authentication
- Beatrice - Comments UI
- Eunice - Profile API + User model
- Grace - Listings UI (Posts UI)
- Rahab - Register / Login UI
- Collins - Database / env / deployment
- Wycliffe - Listings API (Posts API)
- Zubeda - Comments API
- Ivy - Profile page 
- Benny - Tests + API docs (The Team Lead leads, everyone contributes)

## 2.What is Branching? Why do we need it?
 
- Main branch is the clean, working version. Branch is the copy version of the Main. Remember not to push directly to main.
- If everyone pushes to main, we will get conflicts and break the app.
- Each person works on their own branch, then asks their Reviewer to approve.
- Branch names - use this format:
  - slice-1-benny-setup
  - slice-2-phillken-responsive
  - slice-3-hannah-auth
  - slice-4-beatrice-comments-ui
  - slice-5-eunice-profile-api
  - slice-6-grace-listings-ui
  - slice-7-rahab-auth-ui
  - slice-8-collins-db-deploy
  - slice-9-wycliffe-listings-api
  - slice-10-zubeda-comments-apis
  - slice-11-ivy-profile-ui
  - slice-12-benny-tests-docs

## 3. How to Create a Branch and Push - Step by Step

- Do this in VS Code terminal or Git Bash:

## Step 1: Get latest code
- git checkout main
- git pull origin main

## Step 2: Create your branch
- git checkout -b (your branch name e.g. slice-6-grace-listings-ui)

## Step 3: 
git add .
git commit -m 
git push -u origin (your branch name e.g. slice-6-grace-listings-ui)

## 4. What is Pull Request (PR)?
PR is asking the Reviewer to check your work and add it to main." You should not merge yourself. You ask for review.

### How to create a PR:
- Go to GitHub > Your Repo > Pull Requests > New Pull Request
- Base = main , Compare = your branch e.g. slice-6-grace-listings-ui
- Title: Write the title of your slice
- In the body show what you did .e.g. Added listings list page, Added listing detail page and closes the issue #number shown
- Click Create Pull Request
- Under the Reviewers, add the name of the assigned reviewer on your slice.

## 5. What is Pull? And why do we Pull?
- Pull means downloading the latest code from GitHub to your laptop, tablet or mobile.
- Why? Because other people merged their work, and your device does not have the latest update from the GitHub repository.

Here's how to do it:
- git checkout main
- git pull origin main
- git checkout your-branch-name
- git merge main

- If you don't pull, you will work on old code and get conflicts.

- Pull after your PR is merged:
  - Go back to main and pull again to get the new clean code.

## 6. When Should Issues Be Closed?
- Do not close your Issue manually by clicking Close.Your Issue closes AUTOMATICALLY when your PR is merged because you wrote Closes issue number, e.g. #6 in your PR.
- If your PR was merged but Issue is still open, tell the Team Lead.If you did work but did NOT use a PR, your Issue stays open. That is wrong.Issue is closed = Work is in main and approved.

## 7. Reviewer - What to do if PR is Good or Bad?

**If PR is GOOD:**
- Reviewer goes to PR > Files changed > Review > Approve 
-Reviewer leaves comment: Approved

*Only Lead merges. 

**If PR is NOT GOOD:**
- Reviewer goes to PR > Files changed > Review > Request changes
- Reviewer writes CLEAR comments, e.g.:This button does not work on phone, please fix

*Reviewer does NOT merge.

## 8. Owner - How to Correct and PR Again
- If your PR got 'Request changes,' do not create a new PR. Stay on the same branch
- Stay on YOUR SAME branch, don't create a new one:
- git checkout (your branch e.g. slice-6-grace-listings-ui)
- Fix the problems the reviewer said
- Push again to the SAME branch:
  - git add .
  - git commit -m "Fix mobile button as requested"
  - git push

- Your old PR will update automatically. 

- Comment on the PR: e.g. @Benny I have fixed it, please re-check. 
- Wait for new review.
- Repeat until Approved.

## 9. Lead Merging - Why Only Team Lead Merges to Main
- Only Team Lead merges to main. This is to avoid conflicts.
- Why? If 2 people merge at the same time, GitHub can mix up code and break the app.
**Process:**
  - Owner creates PR
  - Reviewer Approves
  - Team Lead checks one last time then clicks Merge Pull Request
  - The Lead Team then deletes the branch after merging
  - The Lead Team tells the group: Slice 6 merged, everyone pull main
  - After the Lead Team merges, everyone must pull main before starting new work.

##10. Updating CONTRIBUTORS.md
- We have a file called CONTRIBUTORS.md. This is our record of who did what. It helps the instructor or anyone else see our work.
- After your PR is merged, YOU must update it, for example, like this: 
  - Grace | Slice 6: Listings UI | #6 | #15 |

##The Project Structure

This is how the project structure looks like:

RentSmart/
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── pages/
│       │   ├── Register.jsx
│       │   ├── Login.jsx
│       │   ├── Profile.jsx
│       │   ├── Listings.jsx
│       │   └── Comments.jsx
│       └── components/
│           └── Navbar.jsx
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── .env.example
│   └── routes/
│       ├── auth.js
│       ├── profile.js
│       ├── listings.js
│       └── comments.js
├── CONTRIBUTORS.md
└── README.md

###Who builds what:

As a recap, the

*Frontend:*
- Benny: App.jsx + components/Navbar.jsx + create pages/ and components/ folders
- Phillken: index.css - He will handle CSS for everyone at the end
- Rahab: pages/Register.jsx + pages/Login.jsx
- Ivy: pages/Profile.jsxGrace: pages/Listings.jsx
- Beatrice: pages/Comments.jsx

*Backend:*
- Collins: server.js + package.json + routes/ folder setup
- Hannah: routes/auth.js
- Eunice: routes/profile.js
- Wycliffe: routes/listings.js
- Zubeda: routes/comments.js

***Note*** When the frontend and backend are merged, you can start pushig. You'll be informed when they're merged. In the meantime, plan how you'll build your issue, and can work on it locally till the front and backend are merged. 