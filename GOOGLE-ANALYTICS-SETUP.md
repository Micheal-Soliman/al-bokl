# Google Analytics Setup Guide

## Quick Setup Instructions

### Step 1: Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Create a new GA4 property (if you haven't already):
   - Click "Admin" (gear icon)
   - Click "Create Property"
   - Enter property name: "Dr. Osama Al-Bokl Website"
   - Select timezone: "Egypt"
   - Select currency: "Egyptian Pound (EGP)"
4. Create a Data Stream:
   - Click "Data Streams"
   - Click "Add stream" > "Web"
   - Enter website URL: `https://www.albokl.com`
   - Enter stream name: "Al-Bokl Website"
5. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### Step 2: Add Measurement ID to Your Project

1. Create a `.env.local` file in the project root (if it doesn't exist)
2. Add the following line:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   Replace `G-XXXXXXXXXX` with your actual Measurement ID

### Step 3: Deploy

1. Commit your changes (don't commit `.env.local`!)
2. Add the environment variable to your hosting platform:
   - **Vercel:** Go to Project Settings > Environment Variables
   - Add: `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`
3. Redeploy your application

### Step 4: Verify Tracking

1. Visit your website
2. Open Google Analytics
3. Go to Reports > Realtime
4. You should see your visit in real-time

## What's Already Implemented

✅ Google Analytics component created  
✅ Integrated into root layout  
✅ Configured to track page views  
✅ Uses Next.js Script component for optimal loading  

## Features Included

- **Page View Tracking:** Automatically tracks all page views
- **Optimal Loading:** Uses `afterInteractive` strategy for performance
- **Privacy-Friendly:** Only loads when Measurement ID is provided
- **Next.js Optimized:** Uses Next.js Script component

## Troubleshooting

### Analytics Not Showing Data?

1. **Check Measurement ID:**
   - Verify it's in the correct format: `G-XXXXXXXXXX`
   - Make sure there are no extra spaces

2. **Check Environment Variable:**
   - Verify it's named exactly: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Restart development server after adding the variable

3. **Check Browser Console:**
   - Open browser DevTools (F12)
   - Look for any errors related to Google Analytics

4. **Wait for Data:**
   - It can take 24-48 hours for data to appear in standard reports
   - Use Realtime reports for immediate verification

### Ad Blockers

Note: Ad blockers may prevent Google Analytics from loading. This is normal and expected for users with ad blockers enabled.

## Additional Configuration (Optional)

### Enhanced Measurement

Google Analytics 4 automatically tracks:
- Page views ✅
- Scrolls
- Outbound clicks
- Site search
- Video engagement
- File downloads

These are enabled by default in GA4.

### Custom Events

To track custom events, you can add this code anywhere in your components:

```javascript
// Track button click
window.gtag('event', 'button_click', {
  button_name: 'Book Appointment',
  page_location: window.location.href
});

// Track form submission
window.gtag('event', 'form_submit', {
  form_name: 'Contact Form',
  form_destination: '/contact'
});
```

## Support

For more information:
- [Google Analytics Help Center](https://support.google.com/analytics)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Next.js Analytics Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/analytics)

---

**Note:** Keep your Measurement ID confidential and never commit `.env.local` to version control.
