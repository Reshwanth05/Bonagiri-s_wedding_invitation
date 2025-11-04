# 🚀 Quick Setup Guide

## Getting Started

Your beautiful wedding invitation website is ready! Follow these simple steps to view and customize it.

## 📋 Step 1: View Your Website

1. Simply open the `index.html` file in any web browser
2. The website will load with all animations and effects
3. Scroll through to see all sections:
   - Hero section with couple names
   - Welcome message
   - Couple photos
   - Three wedding events (Haldi, Pala Poraka, Wedding Ceremony)
   - Photo gallery
   - Live countdown timer
   - Location maps
   - Footer

## 🖼️ Step 2: Replace Images

Currently, the website uses placeholder images from Unsplash. Here's how to add your own photos:

### Option A: Using Image URLs

1. Upload your photos to a service like:
   - Google Photos
   - Imgur
   - Dropbox
   - Any image hosting service

2. Get the direct image URLs

3. Open `index.html` in a text editor

4. Find and replace these image URLs:

**Bride Photo** (Line ~143):
```html
<img src="YOUR_BRIDE_PHOTO_URL" alt="Sravani - The Bride">
```

**Groom Photo** (Line ~154):
```html
<img src="YOUR_GROOM_PHOTO_URL" alt="Sai Krishna - The Groom">
```

**Haldi Event** (Line ~184):
```html
<img src="YOUR_HALDI_PHOTO_URL" alt="Haldi Ceremony">
```

**Pala Poraka Event** (Line ~214):
```html
<img src="YOUR_PALA_PORAKA_PHOTO_URL" alt="Pala Poraka Ceremony">
```

**Wedding Ceremony** (Line ~244):
```html
<img src="YOUR_WEDDING_PHOTO_URL" alt="Wedding Ceremony">
```

**Gallery Images** (Lines ~284-305):
Replace all 4 gallery image URLs with your preferred photos.

### Option B: Using Local Images

1. Create an `images` folder in your project
2. Add your photos to this folder
3. Update the image paths in `index.html`:

```html
<img src="images/bride.jpg" alt="Sravani - The Bride">
<img src="images/groom.jpg" alt="Sai Krishna - The Groom">
<img src="images/haldi.jpg" alt="Haldi Ceremony">
```

## 🎨 Step 3: Customize Colors (Optional)

If you want to change the color scheme:

1. Open `css/style.css`
2. Find the `:root` section at the top (Lines 5-15)
3. Modify the color values:

```css
:root {
    --primary-red: #C41E3A;      /* Change wedding red */
    --primary-gold: #FFD700;     /* Change gold accent */
    --emerald-green: #50C878;    /* Change green accent */
    /* ... other colors ... */
}
```

## ✏️ Step 4: Edit Text Content (Optional)

To modify any text:

1. Open `index.html` in a text editor
2. Find the text you want to change
3. Edit it directly
4. Save the file

Common sections to customize:
- Line ~60: Welcome message
- Lines ~140-165: Couple descriptions
- Lines ~180-270: Event descriptions
- Line ~371: Footer message

## 📱 Step 5: Test on Devices

1. **Desktop**: Open in Chrome, Firefox, Safari, or Edge
2. **Mobile**: Transfer the file to your phone or use browser dev tools
3. **Tablet**: Test on iPad or Android tablet

Press `F12` in desktop browsers to open Developer Tools and test responsive design.

## 🌐 Step 6: Deploy Your Website

When you're ready to share your invitation online:

### Method 1: Using the Publish Tab (Recommended)
1. Go to the **Publish** tab in your development environment
2. Click the publish button
3. Get your live website URL
4. Share with guests!

### Method 2: Manual Hosting
You can also host on:
- **Netlify**: Drag and drop your folder
- **GitHub Pages**: Free hosting via GitHub
- **Vercel**: Quick deployment
- **Firebase Hosting**: Google's platform

## 📤 Step 7: Share Your Invitation

Once published, share via:
- **WhatsApp**: Send the URL to contacts
- **Email**: Create a beautiful email with the link
- **SMS**: Text the link to guests
- **Social Media**: Post on Facebook, Instagram
- **QR Code**: Generate a QR code for the URL

## 🎯 Tips for Best Results

### Image Recommendations
- **Couple Photos**: 600x800px (portrait orientation)
- **Event Photos**: 800x600px (landscape orientation)
- **Gallery Photos**: 600x600px (square format)
- **File Format**: JPG or PNG
- **File Size**: Keep under 500KB each for fast loading

### Performance Tips
1. Compress images before uploading
2. Use modern image formats (WebP when possible)
3. Test loading speed on slow connections
4. Clear browser cache when testing changes

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### Images Not Showing?
- Check that image URLs are correct and accessible
- Ensure images are not blocked by privacy settings
- Try using HTTPS URLs instead of HTTP

### Animations Not Working?
- Make sure JavaScript is enabled in your browser
- Check browser console (F12) for errors
- Try refreshing the page (Ctrl+F5 or Cmd+Shift+R)

### Layout Issues on Mobile?
- Clear browser cache
- Test in different mobile browsers
- Check that viewport meta tag is present

### Slow Loading?
- Compress large images
- Check internet connection
- Consider using a CDN for images

## 📞 Need Help?

If you encounter any issues:
1. Check the `README.md` file for detailed documentation
2. Ensure all files are in correct locations
3. Test in a different browser
4. Clear cache and reload

## 🎊 Final Checklist

Before sharing your invitation:
- [ ] All images replaced with actual photos
- [ ] All text reviewed and correct
- [ ] Event details verified (dates, times, locations)
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] Website published and accessible
- [ ] URL is easy to share and remember
- [ ] All animations working smoothly
- [ ] Maps links opening correctly
- [ ] Countdown timer displaying properly

## 🎉 You're All Set!

Your beautiful South Indian/Telangana wedding invitation is ready to share with the world!

**Congratulations to Sravani & Sai Krishna! 💕**

---

*For detailed technical information, see README.md*
