# Project Instructions

The goal of this project is to take practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

More than that, take practice to Natural Language Processing by using CloudMeaning API to classify news articles.

NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, like CloudMeaning API.

## Getting started

Remember that once you clone, you will still need to install everything:

`cd` into your new folder and run:
- `npm install`

## Setting up the API

The CloudMeaning API is not totaly different than what used before. It has to get a private key, and a URL to the script, that also need a url or file or some including text that appended to the the script of CloudMeaning.

### Step 1: Signup for an API key
First, you will need to go (https://www.meaningcloud.com/developer/). Signing up will get you an API key. Don't worry, at the time of this course, the API is free to check how many requests you have remaining for the day.

### Step 2: Adding the API credntials 
Next you'll need to add API credntials to .env file, to be used all over the project files. - [ ] Create a new ```.env``` file in the root of your project
- [ ] Go to your .gitignore file and add ```.env``` - this will make sure that we don't push our environment variables to Github! If you forget this step, all of the work we did to protect our API keys was pointless.
- [ ] Fill the .env file with your API keys like this:

```
API_URL=**************************
API_KEY=**************************
```




### Step 5: Using the API

The API has a lot, take a look at (https://www.meaningcloud.com/developer/apis). 


## Deploying

To host, these are really intuitive free hosting options: A great step to take your finished project and checkout [Netlify](https://www.netlify.com/) or [Heroku](https://www.heroku.com/).
# nlp
