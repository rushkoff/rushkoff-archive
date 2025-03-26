# Editors

This file has some guidelines for editors working on this site. It is a work in progress. If you think anything is wrong or missing, please file an [issue in the GitHub project][issues].

## Editing the content.

### Using TinaCMS

Originally this site had an editors' UI using the [Forestry.io][Forestry] web service, but that application was end-of-lifed in April 2023. The successor is [TinaCMS], which at the time wasn't very mature, so we did without for a period. Switching wasn't trivial, and alternatives don't seem to be very forthcoming. However, we have now switched to TinaCMS - although at the time of writing, it is still a best effort based on a limited budget.

The Jekyll back-end works the same as it did. The GitHub action used to build the site has changed to perform the extra steps needed to sync with TinaCMS's online service. Also, there are scripts in the new `package.json` needed for Tina which will run the site and the editor's UI locally.

For more details of all this see [TINA.md](./TINA.md).

### Using GitHub's UI

Assuming you have write access, it's entirely possible to edit the articles directly in GitHub's UI. If you click on the name of an editable file, you should see a preview, with a pencil icon in the top-right of the header above the content.  This should open the content in edit view, allowing you to make changes, preview the result and commit them.

The details depend on the file type, but for files with a `.md` suffix, the content is [Markdown][markdown], which is more or less plain text with some formatting rules, and the ability to inline some basic HTML tags should you need to. See the [GitHub Markdown Documentation][github-markdown] for more information on the format. There is usually a link to that document in the edit page, at the bottom right - click the Markdown icon there.

You will also need to know some basic concepts about Jekyll. [Still to be written; in the mean time ask an existing editor for guidance.]

After editing a file, you should include a commit message explaining what was changed. The site should rebuild on committing the change, and this message remains in the commit history as a record.

If you don't have write access, you need to ask the maintainers of this project, or submit your changes by cloning the repository, and submitting a pull request (which requires some technical know-how).  Most people who need to be altering the site will already be in contact with the maintainers. But in case not, the best way to contact the maintainers is probably to submit an issue to the GitHub project.


## Rebuilding the site.

There is a GitHub Action which rebuilds the website whenever changes are committed to the master branch of this repository. To check the state of this action look on the [Actions Tab][actions] of this project.  You can also trigger the action manually there.

If there are problems building, contact a developer who has access to the project. A sensible way to do this is to submit an issue describing a problem in the [Issues][issues] tab on the GitHub project page. When doing this it is extremely helpful to explain what the problem is - and importantly - how a developer would recreate the problem you're seeing.

[Forestry]: https://forestry.io
[TinaCMS]: https://tina.io
[actions]: https://github.com/rushkoff/rushkoff-archive/actions
[issues]: https://github.com/rushkoff/rushkoff-archive/issues
[github-markdown]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
[markdown]: https://en.wikipedia.org/wiki/Markdown
