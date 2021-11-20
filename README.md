# Dear Diary

This is a private daily journal site where users can keep their most private thoughts!

Note: It is intentionally built to be insecure. In particular, it demonstrates broken access control.

## Challenge 1

There's a live version of this app at: https://guarded-garden-59963.herokuapp.com/login.html

But there's a security flaw! It's possible to get a list of all the accounts on the site and their details!

1. Find the information (list all users, including names and emails) send it via Slack to your instructor
2. Clone and run the app locally (see instructions below).
3. Fix the code so that it's no longer possible for someone to get that information.

Feel free to use the following strategies:
 - Use the browser inspector to see what requests the app sends
 - Use the browser console or Postman to send extra requests
 - Inspect the code

## Challenge 2

One of the users of this site has made some journal entries which are quite sensitive!

Find out which user has hidden a large sum of money and where they hid it.

2. Find the locateion of the treasure (send it via Slack to your instructor)
3. Fix the code so that it's no longer possible for someone to get that information.

## Running the code locally

1. Clone this repo

2. Install the dependencies

```
yarn
```

3. Set up the database

```
cat schema.sql | psql
``

4. Create the environment variables in a file called `.env`

```
EXPRESS_SESSION_SECRET_KEY="something random here"
```

5. Run the server

```
yarn start
```
