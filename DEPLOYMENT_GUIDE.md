# cPanel Deployment Guide

## Common CSS Issues on cPanel and Solutions

### Issue: CSS Not Loading on cPanel

This guide helps fix CSS and styling issues when deploying to cPanel.

## ✅ Solutions Applied

### 1. **CDN Fallbacks Added**

- Tailwind CSS now has a fallback CDN
- Font Awesome has multiple fallback sources
- AOS library has fallback loading
- Google Fonts has proper fallback fonts

### 2. **HTTPS/HTTP Issues Fixed**

- All CDN links use HTTPS
- Added integrity checks for security
- Proper crossorigin attributes

### 3. **File Path Issues**

- All relative paths use `./` prefix
- Images should be in the same directory or subdirectory
- Case-sensitive file names (Linux servers)

## 📋 Pre-Deployment Checklist

### Before Uploading to cPanel:

1. **File Structure**

   ```
   public_html/
   ├── index.html
   ├── cv.html
   ├── certificates.html
   ├── IMG_20250524_164945_746.jpg
   ├── IMG_20250524_165026_591.jpg
   ├── IMG_20250524_165120_190.jpg
   ├── Project 1.png
   ├── Project 2.png
   ├── Project 3.png
   └── Eyerusalem_kindalem_getnet.pdf
   ```

2. **File Permissions**

   - HTML files: `644` or `755`
   - Images: `644`
   - Folders: `755`

3. **Check File Names**
   - No spaces in file names (use hyphens: `project-1.png`)
   - Case-sensitive (Linux servers)
   - Use lowercase for consistency

## 🔧 Common Issues & Fixes

### Issue 1: Tailwind CSS Not Working

**Solution:**

- Check browser console for errors
- Verify CDN is accessible: `https://cdn.tailwindcss.com`
- The fallback will automatically load if primary fails

### Issue 2: Font Awesome Icons Not Showing

**Solution:**

- Check if Font Awesome CDN is blocked
- Multiple fallback sources are included
- Verify network tab in browser dev tools

### Issue 3: Animations Not Working

**Solution:**

- AOS library has fallback loading
- Check browser console for JavaScript errors
- Ensure scripts are loaded in correct order

### Issue 4: Images Not Loading

**Solution:**

- Check file paths (case-sensitive)
- Verify images are uploaded
- Check file permissions (644)
- Use relative paths: `./image.jpg`

### Issue 5: Mixed Content Warnings

**Solution:**

- All resources use HTTPS
- Check for any HTTP links
- Update browser cache

## 🚀 Deployment Steps

1. **Upload Files via cPanel File Manager**

   - Go to `public_html` folder
   - Upload all HTML files
   - Upload all images
   - Upload PDF file

2. **Set File Permissions**

   - Right-click files → Change Permissions
   - Files: `644`
   - Folders: `755`

3. **Test Your Site**

   - Visit: `https://yourdomain.com`
   - Check browser console (F12)
   - Test all pages
   - Verify images load
   - Test animations

4. **Clear Browser Cache**
   - Hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
   - Clear browser cache

## 🔍 Debugging Tips

### Check Browser Console (F12)

- Look for 404 errors (missing files)
- Check for CORS errors
- Verify CDN resources load

### Check Network Tab

- See which resources fail to load
- Check response codes
- Verify file sizes

### Test CDN Access

- Try accessing CDN URLs directly
- Check if your hosting blocks CDNs
- Contact hosting support if needed

## 📝 Additional Notes

- **Cache Issues**: Clear browser cache after deployment
- **CDN Blocking**: Some hosts block certain CDNs - contact support
- **SSL Certificate**: Ensure your domain has valid SSL
- **PHP Version**: Not required (static HTML)
- **.htaccess**: Not needed for basic deployment

## 🆘 Still Having Issues?

1. Check browser console for specific errors
2. Verify all files are uploaded correctly
3. Test CDN URLs directly in browser
4. Contact your hosting support
5. Try alternative CDN sources if blocked

## 📞 Support

If issues persist:

- Check browser console errors
- Verify file paths and permissions
- Test CDN accessibility
- Contact hosting provider support

---

**Last Updated:** 2025
**Version:** 1.0
