#!/bin/bash
# Script to create PNG icons from SVG using ImageMagick (if available)
# Or use an online converter if ImageMagick is not installed

if command -v convert &> /dev/null; then
    echo "ImageMagick found. Converting SVG to PNG..."
    convert -background none -density 300 icon-192.svg -resize 192x192 icon-192x192.png
    convert -background none -density 300 icon-512.svg -resize 512x512 icon-512x512.png
    convert -background none -density 300 icon-192.svg -resize 180x180 apple-touch-icon.png
    echo "PNG icons created successfully!"
else
    echo "ImageMagick not found."
    echo "Please convert the SVG files to PNG manually using:"
    echo "1. An online converter: https://cloudconvert.com/svg-to-png"
    echo "2. Or upload icon-192.svg and icon-512.svg"
    echo ""
    echo "Needed files:"
    echo "  - icon-192x192.png (192x192)"
    echo "  - icon-512x512.png (512x512)"
    echo "  - apple-touch-icon.png (180x180)"
fi
