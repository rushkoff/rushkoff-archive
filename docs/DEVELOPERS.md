# Developers

This file has some guidelines for developers working on this site. It is a work in progress. If you think anything is wrong or missing, please file an issue in the GitHub project.

## Editing the site and building a development copy

This is how to build and develop this site.

You will need a working Jekyll installation - details of how to set this up on various platforms can be found on the [Jekyll Website][jekyll], the [GitHub Pages Docs][github-pages] and the [GitHub Pages Jekyll Docs][jekyll-github]. I also assume working knowledge of Jekyll, Ruby, Git, and HTML/CSS.

Given that you can build a working copy of the site, malke changes, and observe the result, before pushing the changes back to the repository's master branch. Once that is done, the GitHub pages action will be triggered to rebuild and publish the latest version of the site.

In brief, assuming you're on a Unix-like OS and have Git, Ruby, and Ruby's Bundler command installed:

- Check out this repository locally: `git clone git@github.com:wu-lee/rushkoff-archive.git`
- Change to the `src` folder: `cd rushkoff-archive/src`
- Install Jekyll: `bundle install`
- Run Jekyll: `bundle exec jekyll serve`
- This should print out the server address to use, typically http://127.0.0.1:4000. Open that in a browser.
- Edits should trigger Jekyll to rebuild the site automatically.

When satisfied, commit your changes on the master branch and:

- Run `git push` to push the commits back to the origin, GitHub.
- Wait a few minutes and the site should be rebuilt.
- Check the Actions tab on the GitHub project for progress and to see any errors in the build.

## Site layout

At the top level, there is:

- `README.md` - overview documentation which is shown on the GitHub project page
- `docs/` - documentation
- `src/` - the Jekyll and TinaCMS site
- `scripts/` - miscellaneous import/export scripts
- `assets/` - images and other things linked to by `README.md`
- `.github/` - GitHub workflow definitions (define the jobs which are run on changes)
- `.editorconfig` - cross-platform indentation config.

### Content related

They are all below `src/`.

These files define what text and other content you see in the
site. Typically they're markdown format, which can also include HTML.

The domain of site editors.

- The landing page (`index.md`, an index of all the articles)
- `404.html` - content shown on a 404 "Not Found" error page
- `uploads/` - image files uploaded for use in articles are stored here
- Collection index pages:
  - `publications.md`
  - `categories.md`
  - `misc_elsewhere.md` (now hidden on the site)
  - `videos.md` (now hidden on the site)
- Collection folders
  - `_articles/` - all the the articles on the site
  - `_publications/` - descriptions of the publications in which articles were originally published
  - `_categories/` - descriptions of the categories in which articles can be listed
  - `_misc_elsewhere/` - unused, intended for links to content elsewhere
  - `_videos_elsewhere/` - unused, intended for embedded videos hosted elsewhere

### Ruby and Jekyll configuration files

They are all below `src/`.

These files define Jekyll's behaviour. The domain of developers.

- `_config.yml` - the Jekyll configuration
- `_plugins/` - custom Jekyll code used on the site
- `Gemfile` - minimum Ruby dependencies needed for Jekyll
- `Gemfile.lock` - precise Ruby dependencies to deploy
- `.tool-versions` - tells the [ASDF] tool which Ruby / bundler versions to use
- `.bundle` - Ruby bundler configuration

### Theme related pages

They are all below `src/`.

These files define the look and behaviour of the website. This is in
the domain of developers and designers.

- `_includes/` - reusable template fragments 
- `_layouts/` - top level templates
- `assets/` - images, CSS, Javascript and other asset files 
- `_vendor/` - transient directory, Ruby bundler stores gems here
- `_site/` - transient directory, Jekyll writes the generated site here

### NodeJS and TinaCMS related files

They are all below `src/`. The domain of developers.

- `tina/` - TinaCMS configuration
  - `config.ts` - the main configuration file
  - `templates.ts` - an adjunct configuration file, defining collection fields
  - `tina-lock.json` - compiled configuration definition for TinaCMS
  - `__generated__` - transient, generated code
- `package.json` - NPM project configuration for TinaCMS
- `package-lock.json` - precise NodeJS dependencies to install
- `admin/` - transient, admin UI content created by TinaCMS for Jekyll to include
- `.env` - transient, you may need to create this to define API keys and tokens 
  when running TinaCMS locally
- `node_modules/` - transient, NPM installs Node modules here

### Import scripts

These are within `scripts`. 

Code to extract content and populate this site from the previous
incarnation of this archive website, which was hosted on a Strapi
installation at:

https://api.archive.rushkoff.com/

This site may no longer be online, and is now out of date in any case. 

These scripts require Ruby 2.x or later.

- `posts2yaml.rb` - used to extract data from the previous website as a YAML file
- `posts2tsv.rb` - ditto, but as a tab-delimited values file
- `tsv2yaml.rb` - reads a TSV file output by the latter, to generate the former

For the record, very briefly, to download the Rushkoff Archive posts
from the above API endpoint, and outputs this as YAML files in a
directory `import/_articles/`, you would run this from the top
directory of the project:

    scripts/posts2yaml.rb
	
Or this to likewise get tab-delimited values suitable for spreadsheet
import:

    scripts/posts2tsv.rb > import.tsv

Or this to regenerate the YAML files in `import/_articles/` from the
TSV file above:

    scripts/posts2tsv.rb < import.tsv

[github-pages]: https://pages.github.com/
[jekyll-github]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll
[actions]: https://github.com/rushkoff/rushkoff-archive/actions
[issues]: https://github.com/rushkoff/rushkoff-archive/issues
[ASDF]: https://asdf-vm.com/https://asdf-vm.com/
