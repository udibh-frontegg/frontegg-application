# frontegg-application

## Setup

1. Clone the repo to your local machine:

git clone https://github.com/udibh-frontegg/frontegg-application.git
cd frontegg-application

2. Install dependencies:
npm install

3. Start the App:
npm start

App will open at http://localhost:3000. 
You should be redirected to the Frontegg login page.


## Frontegg Configuration

- Authentication → Login method → Hosted login
- Add http://localhost:3000/oauth/callback to Allowed Redirect URLs
- Enable Magic Link only sign-in
- Create limited role:
  View own profile
  Invite users
  Access audit logs
  Create M2M tokens
- Invite hunter@frontegg.com with this role

## Features

- User authentication integrated with Frontegg
- Home page shows user's name and profile picture
- Settings button opens the Frontegg Admin Portal
