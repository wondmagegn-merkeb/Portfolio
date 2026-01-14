# Image URLs Configuration

This document shows where to update image URLs in the project.

## Profile Images

### Hero Section (`src/components/Hero.jsx`)
- **Current URL**: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`
- **Line**: ~62
- **Usage**: Main profile photo in hero section

### About Section (`src/components/About.jsx`)
- **Current URL**: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face`
- **Line**: ~22
- **Usage**: About section profile photo

## Project Images

### Projects Section (`src/components/Projects.jsx`)
- **Project 1**: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop`
- **Project 2**: `https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop`
- **Project 3**: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop`

## Recommended Image Hosting Services

1. **Cloudinary** - Free tier available, great for optimization
   - URL format: `https://res.cloudinary.com/YOUR_CLOUD/image/upload/v1234567890/image.jpg`

2. **Imgur** - Free image hosting
   - URL format: `https://i.imgur.com/IMAGE_ID.jpg`

3. **GitHub** - Host images in a repository
   - URL format: `https://raw.githubusercontent.com/USERNAME/REPO/main/images/image.jpg`

4. **Google Drive** - Share images publicly
   - URL format: `https://drive.google.com/uc?export=view&id=FILE_ID`

5. **Unsplash** - Free stock photos (currently used as placeholders)
   - URL format: `https://images.unsplash.com/photo-PHOTO_ID?w=WIDTH&h=HEIGHT&fit=crop`

## CV Link

Update the CV link in `src/components/Header.jsx`:
- Replace `YOUR_FILE_ID` with your Google Drive file ID
- Or use any other hosting service URL

## Notes

- All images should be optimized for web (compressed, appropriate size)
- Recommended sizes:
  - Profile photos: 400x400px to 800x800px
  - Project images: 800x600px to 1200x900px
- Use HTTPS URLs for security
- Consider using CDN services for better performance
