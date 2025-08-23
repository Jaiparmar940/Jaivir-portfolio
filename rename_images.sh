#!/bin/bash

# Script to rename project images to standardized format
# Usage: ./rename_images.sh

echo "Starting image renaming process..."

# Function to rename images in a project folder
rename_project_images() {
    local project_dir=$1
    local project_name=$2
    
    echo "Processing $project_name..."
    
    # Check if directory exists
    if [ ! -d "$project_dir" ]; then
        echo "  Directory $project_dir not found, skipping..."
        return
    fi
    
    # Find all image files in the project directory
    local images=($(find "$project_dir" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.heic" \) | sort))
    
    if [ ${#images[@]} -eq 0 ]; then
        echo "  No images found in $project_dir"
        return
    fi
    
    echo "  Found ${#images[@]} images"
    
    # Rename images to standardized format
    local counter=1
    for img in "${images[@]}"; do
        local extension="${img##*.}"
        local new_name="image${counter}.$(echo "$extension" | tr '[:upper:]' '[:lower:]')"
        
        echo "    Renaming: $(basename "$img") -> $new_name"
        mv "$img" "$project_dir/$new_name"
        
        ((counter++))
        
        # Limit to 3 images per project
        if [ $counter -gt 3 ]; then
            echo "    Limiting to 3 images per project"
            break
        fi
    done
    
    echo "  Completed $project_name"
    echo ""
}

# List of project directories
projects=(
    "public/projects/pump-support-platform:Pump Support Platform"
    "public/projects/autonomous-robot:Autonomous Robot"
    "public/projects/mousetrap-vehicle:Mousetrap Vehicle"
    "public/projects/crypto-mining-servers:Crypto Mining Servers"
    "public/projects/corvette-harmonic-balancer:Corvette Harmonic Balancer"
    "public/projects/piano-repair:Piano Repair"
    "public/projects/boat-restoration:Boat Restoration"
    "public/projects/bmw-m4-tuning:BMW M4 Tuning"
    "public/projects/motorcycle-business:Motorcycle Business"
    "public/projects/custom-closet:Custom Closet"
    "public/projects/mercedes-steering:Mercedes Steering"
    "public/projects/luxury-dining-table:Luxury Dining Table"
    "public/projects/boulder-transport-device:Boulder Transport Device"
    "public/projects/mcdonalds-toy:McDonald's Toy"
    "public/projects/jpcommerce:JPcommerce"
)

# Process each project
for project in "${projects[@]}"; do
    IFS=':' read -r dir name <<< "$project"
    rename_project_images "$dir" "$name"
done

echo "Image renaming process completed!"
echo ""
echo "Note: HEIC files have been renamed but browsers still cannot display them."
echo "Please convert HEIC files to JPG or PNG format for proper display."
