import * as React from "react";
import type { TinaField } from "tinacms";
export function articleFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "subtitle",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "reference",
      name: "publication",
      label: "publication",
      collections: ["publications"],
      required: true,
    },
    {
      type: "string",
      name: "blurb",
      label: "blurb",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "refs",
      label: "refs",
    },
    {
      type: "string",
      name: "sources",
      label: "sources",
    },
    {
      // Ideally this would be a list of references to the categories
      // collection. We can't have lists of references. And lists of objects
      // wrapping references are janky - and don't work. Because, the
      // returned items are not strings, as we need them to be, but objects.
      // Therefore, we hack this by hardwiring a list of strings which will work,
      // so long as the categories aren't changed!
      type: "string",
      label: "categories",
      name: "categories",
      list: true,
      options: [
        { value: "_categories/book-chapters.md", label: "Book Chapters" },
        { value: "_categories/fiction-miscellaneous.md", label: "Fiction and Miscellaneous" },
        { value: "_categories/journalism.md", label: "Journalism" },
        { value: "_categories/scholarship.md", label: "Scholarship" },
      ]
    },
  ] as TinaField[];
}
export function categoryFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
  ] as TinaField[];
}
export function misc__elsewhere_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
  ] as TinaField[];
}
export function publicationFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "string",
      name: "url",
      label: "url",
    },
  ] as TinaField[];
}
export function video__elsewhere_Fields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "string",
      name: "video_url",
      label: "video_url",
      required: true,
    },
    {
      type: "string",
      name: "notes",
      label: "notes",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
  ] as TinaField[];
}
