# StudySpace — Edit Chapters Without Changing CSS

## Goal
For future chapter updates, edit only the chapter HTML file. Keep `assets/style.css` and `assets/app.js` unchanged.

## Use the template
1. Open `templates/chapter-template.html`.
2. Copy it and save the copy in the relevant subject's `chapters/` folder.
3. Name it with a short, lowercase filename, for example `food-additives.html`.
4. Replace `CHAPTER TITLE`, `SUBJECT NAME`, the intro, and the sample note content.
5. In the sidebar, copy the chapter links from another page in the same subject and update/add a link to your new chapter.
6. Upload the chapter PDF into the repository's root `pdf/` folder.
7. Replace both instances of `CHAPTER-PDF-FILENAME.pdf` with the exact PDF filename.
8. Add a link to the new chapter from that subject's `index.html` if you want it visible as a card.
9. Commit the changed/new HTML and PDF files. Vercel will redeploy.

## What to edit
- `<title>`, `<h1>`, introduction text.
- Main content inside `<!-- EDIT ONLY THE CONTENT BELOW -->`.
- Subject name and chapter navigation links.
- The PDF filename in the download and preview links.

## What not to change
- Keep `<link rel="stylesheet" href="/assets/style.css">`.
- Keep `<script src="/assets/app.js"></script>`.
- Keep the shared header and overall page layout.
- Do not upload a PDF outside the `pdf/` folder unless you also change the link path.

## PDF path example
If you upload `food-chemistry-unit-1.pdf` to the root `pdf/` folder, use:
`href="/pdf/food-chemistry-unit-1.pdf"`

## Example repository structure
```
your-repository/
├── assets/
│   ├── style.css
│   └── app.js
├── pdf/
│   └── food-chemistry-unit-1.pdf
├── subjects/
│   └── food-chemistry/
│       ├── index.html
│       └── chapters/
│           └── food-chemistry-unit-1.html
└── templates/
    └── chapter-template.html
```

Important: This site uses root-relative paths for a standard Vercel deployment at the domain root.
