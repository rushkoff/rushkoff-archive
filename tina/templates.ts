import type { TinaField } from "tinacms";
export function articleFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "image",
      name: "image",
      description: "An optional image to put at the head of the article",      
      label: "Image",
    },
    {
      type: "string",
      name: "image_desc",
      description: "An optional description of the image for screen readers",
      label: "Image Description",
    },
    {
      type: "reference",
      name: "publication",
      label: "Publication",
      collections: ["publications"],
      required: true,
      ui: {
        optionComponent: (props) => props.title,
      },
    },
    {
      // Ideally this would be a list of references to the categories
      // collection. We can't have lists of references. And lists of objects
      // wrapping references are janky - and don't work. Because, the
      // returned items are not strings, as we need them to be, but objects.
      // Therefore, we hack this by hardwiring a list of strings which will work,
      // so long as the categories aren't changed!
      type: "string",
      label: "Categories",
      name: "categories",
      description: "Which category, if any, to include this article in. Categories essentially a hardwired list at present.",
      list: true,
      options: [
        { value: "_categories/book-chapters.md", label: "Book Chapters" },
        { value: "_categories/fiction-miscellaneous.md", label: "Fiction and Miscellaneous" },
        { value: "_categories/journalism.md", label: "Journalism" },
        { value: "_categories/scholarship.md", label: "Scholarship" },
      ]
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      description: "The publication date. Articles are shown in order of this by default.",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true,
    },
    {
      type: "rich-text",
      name: "blurb",
      description: "Optional short description. Currently not shown on the website.",
      label: "Blurb",
    },
    {
      type: "rich-text",
      name: "notes",
      description: "Optional free-form notes. Currently not shown on the website.",
      label: "Notes",
    },
  ] as TinaField[];
}
export function categoryFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      description: "Describe the category here.",
      isBody: true,
    },
  ] as TinaField[];
}
export function publicationFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "url",
      description: "An optional URL to link the publication title to",
      label: "Url",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      description: "Describe the publication here",
      isBody: true,
    },
  ] as TinaField[];
}
export function misc__elsewhere_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      description: "Describe the content here",
      isBody: true,
    },
    {
      type: "rich-text",
      name: "notes",
      label: "Notes",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
    },
  ] as TinaField[];
}
export function video__elsewhere_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "video_url",
      label: "Video_Url",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      description: "Describe the video here",
      isBody: true,
    },
    {
      type: "rich-text",
      name: "notes",
      label: "Notes",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
    },
  ] as TinaField[];
}
