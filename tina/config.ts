import { defineConfig } from "tinacms";

import { articleFields } from "./templates";
import { categoryFields } from "./templates";
import { misc__elsewhere_Fields } from "./templates";
import { publicationFields } from "./templates";
import { video__elsewhere_Fields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "master";

// Turn titles into URL slugs
function slugify(values: any): string {
  const title = values && values?.title || "untitled";
  return String(title)
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[^\w ]+/g, '')
    .trim()
    .replace(/\s+/, '-');
}

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "./",
//    basePath: process.env.TINA_BASE_PATH, // May be undefined
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "./",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        format: "md",
        label: "Articles",
        name: "articles",
        path: "_articles",
        match: {
          include: "**/*",
        },
        defaultItem: () => ({
          // Use today's date as the default
          date: new Date().toISOString(),
        }),
        fields: articleFields(),
        ui: {
          filename: {
            readonly: true,
            slugify: slugify,
          },
        },
      },
      {
        format: "md",
        label: "Publications",
        name: "publications",
        path: "_publications",
        match: {
          include: "**/*",
        },
        fields: publicationFields(),
        ui: {
          filename: {
            readonly: true,
            slugify,
          },
        },
      },
      {
        format: "md",
        label: "Categories",
        name: "categories",
        path: "_categories",
        match: {
          include: "**/*",
        },
        fields: categoryFields(),
        ui: {
          filename: {
            readonly: true,
            slugify,
          },
        },
      },
      // This collection is retained although not really used currently
      {
        format: "md",
        label: "Videos",
        name: "videos",
        path: "_videos_elsewhere",
        match: {
          include: "**/*",
        },
        fields: video__elsewhere_Fields(),
        ui: {
          filename: {
            readonly: true,
            slugify,
          },
        },
      },
      // This collection is retained although not really used currently
      {
        format: "md",
        label: "Misc",
        name: "misc",
        path: "_misc_elsewhere",
        match: {
          include: "**/*",
        },
        fields: misc__elsewhere_Fields(),
        ui: {
          filename: {
            readonly: true,
            slugify,
          },
        },
      },
    ],
  },
  search: {
    tina: {
      indexerToken: process.env.TINA_SEARCH_TOKEN,
      stopwordLanguages: ['eng'],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  }
});
