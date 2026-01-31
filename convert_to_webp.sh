#!/bin/bash

# Script to convert images to WebP format
# Requires cwebp to be installed (brew install webp on macOS)

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "cwebp not found. Installing webp tools..."
    if command -v brew &> /dev/null; then
        brew install webp
    else
        echo "Please install webp tools manually"
        exit 1
    fi
fi

# Convert all PNG images in assets folder to WebP
for file in assets/*.png; do
    if [ -f "$file" ]; then
        # Get filename without extension
        filename=$(basename "$file" .png)
        
        # Convert to WebP with 80% quality
        cwebp -q 80 "$file" -o "assets/${filename}.webp"
        echo "Converted $file to assets/${filename}.webp"
    fi
done

echo "Conversion complete!"