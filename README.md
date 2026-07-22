# Marhama Institute course registration site

A lightweight, mobile-first landing page for Marhama Institute’s online formation experiences with Shaykh Adeyinka Mendes. Registration is handled by Google Forms and payment is manually verified through Zelle. The site has no database, private registration data, or payment integration.

## Admin guide

Routine updates happen in one file: `src/content/siteConfig.ts`.

### Update class details

Edit the relevant class in `siteConfig.classes` to change its title, description, date, time, price, capacity, themes, or participant materials.

### Update registration buttons

Paste the main Google Form URL into `registration.generalGoogleFormUrl`. You may also add class-specific prefilled links in `marriageGoogleFormUrl`, `mindfulnessGoogleFormUrl`, and `bothClassesGoogleFormUrl`. A class-specific link takes priority; otherwise the main form is used.

In Google Forms, use **More → Get pre-filled link**, select the class option, generate the link, and paste it into the matching field in `siteConfig.ts`.

To connect the form to a spreadsheet, open Google Forms and choose **Responses → Link to Sheets → Create or select spreadsheet**.

### Update Zelle details

Edit `payment.zelleRecipient`, `payment.zelleRecipientName`, `payment.amountPerClass`, and `payment.memoFormat`. Payment is verified manually; the site never stores payment records.

### Replace images

1. Add the image file to `public/assets`.
2. Update the matching path in `siteConfig.ts`, for example `/assets/shaykh-mendes.jpg`.

Blank image paths show a graceful placeholder. Media items can be added, reordered, or hidden in `siteConfig.media` using `sortOrder` and `visible`.

### Change registration status

Set a class `status` to:

- `open` — shows the normal registration button
- `waitlist` — changes the button to “Join the Waitlist”
- `closed` — disables registration or uses `futureAnnouncementsUrl` when configured

### Deploy on Vercel

Import this public GitHub repository into Vercel and accept the detected Next.js settings. Changes pushed to the main branch deploy automatically.

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Public-repository safety

Never commit Zoom links, registrant data, API keys, credentials, payment records, private notes, or exported Google Sheets. Keep access details in private confirmation emails sent after payment verification.
