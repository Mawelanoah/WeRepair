# WeRepair — Premium Phone Repair Website

A complete, modern, mobile-friendly static website for **WeRepair**, a phone repair business serving TUT campuses in South Africa.

Built from the official WeRepair flyer content (services, prices, contact details, service areas, and promotions).

---

## Features

- Professional dark-tech design with black, white, charcoal and blue accents
- Sticky navigation + floating WhatsApp button
- Hero section with clear call-to-actions
- Refer-a-Friend promotion (up to R50 iPhone / R20 Android)
- Exact advertised prices for Screen, Battery and Backglass repairs
- Full list of services from the flyer
- Supported brands section
- Working WhatsApp enquiry / booking forms (pre-fills message)
- Service areas covering all listed TUT campuses and towns
- “Why Choose WeRepair” trust section
- Customer feedback placeholder (no fake reviews)
- Contact section with click-to-call and WhatsApp
- Fully responsive (phones, tablets, desktops)
- Fast-loading static site — ready for GitHub Pages

---

## Folder Structure

```
werepair-website/
├── index.html          # Main page
├── css/
│   └── styles.css      # All styles
├── js/
│   └── script.js       # Form handling, navigation, interactions
├── assets/             # Place any custom images here
└── README.md           # This file
```

---

## How to Test Locally

### Option 1 — Simple (recommended)

1. Open the folder in your file explorer.
2. Double-click `index.html`  
   (or right-click → Open with → your browser)

### Option 2 — Local server (better for testing)

If you have Python installed:

```bash
cd werepair-website
python3 -m http.server 8000
```

Then open: [http://localhost:8000](http://localhost:8000)

Or with Node.js (if you have `npx`):

```bash
npx serve .
```

---

## How to Publish on GitHub Pages (Free)

1. Create a free GitHub account if you don’t have one.
2. Create a **new repository** (e.g. `werepair` or `werepair-website`).
3. Upload all the files and folders from this project into the repository.
4. Go to the repository **Settings → Pages**.
5. Under **Source**, select the branch `main` (or `master`) and the `/ (root)` folder.
6. Click **Save**.
7. After a minute or two, your site will be live at:  
   `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`

You can also connect a custom domain later if desired.

---

## How the Owner Can Update Content

### Change Prices

Open `index.html` and find the **Prices** section (search for `id="prices"`).  
Edit the price values directly, for example:

```html
<span class="price">R450</span>
```

### Add / Remove Services

In the **Our Services** section, copy an existing `.service-card` block and change the icon, title and description.

### Update WhatsApp Number

Search the entire project for `27738178823` and replace with the new number (country code without +).

Also update the visible number `073 817 8823`.

### Change Operating Hours or Service Areas

Edit the relevant text in the Contact section, Booking info cards, Service Areas section, and Footer.

### Add Real Customer Reviews (later)

Replace the placeholder in the Reviews section with real testimonials once you have permission to display them. Never invent reviews.

### Add Images

Place image files in the `assets/` folder and reference them in `index.html`, for example:

```html
<img src="assets/your-image.jpg" alt="Description">
```

---

## Important Business Notes

- All prices, services, warranty claim, referral offer, phone number, hours and service areas are taken directly from the supplied flyer.
- The website does **not** confirm appointments or process payments — it only prepares WhatsApp enquiries.
- Customers are clearly told that WeRepair must confirm availability and final pricing.
- No email address, physical shop address or social media profiles were invented.

---

## Technical Stack

- Pure HTML5, CSS3 and vanilla JavaScript
- Google Fonts (Inter)
- Font Awesome 6 icons (CDN)
- No build tools or backend required
- Fully compatible with GitHub Pages, Netlify, Vercel, or any static host

---

## Support

This website is a professional proposal ready to present to the WeRepair business owner.  
All interactive WhatsApp links point to **073 817 8823**.

---

**WeRepair** — Premium Phone Repair • Serving TUT Campuses  
WhatsApp: 073 817 8823 • Mon–Sat 08:00–17:00
