# Basic - A Simple BabylonJS Example with TypesScript

- [Basic - A Simple BabylonJS Example with TypesScript](#basic---a-simple-babylonjs-example-with-typesscript)
  - [How to build](#how-to-build)
    - [Software Requirements](#software-requirements)
    - [Install dependencies](#install-dependencies)
    - [Build](#build)
    - [Publish](#publish)
  - [Starting a new project](#starting-a-new-project)

I use this as a starting point for my BabylonJS projects.  
You can see the result [here](https://corysia.github.io/basic).

## How to build

---

### Software Requirements

- npm - tested with npm 9.3.0

### Install dependencies

```bash
npm install
```

### Build

```bash
npm run build
```

or

```bash
npm run dev
```

### Publish

First, copy `deploy.sh.examples` to `deploy.sh` and edit it to your liking.

Then run:

```bash
npm run publish
```

After it completes, you can visit your site at `https://<your github username>.github.io/<your repo name>`.  It may take a few minutes for the site to be available.  Double-check that the GitHub Pages in your project is set to `gh-pages` in the repo settings.

## Starting a new project

- Edit `package.json` to change the name, description, and author.
- Remove the .git folder and re-initialize the repo.
- Have fun!