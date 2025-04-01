#!/bin/bash

# Stop on errors
set -e

# Configuration
SMB_URL="smb://192.168.4.244/config"
MOUNT_POINT="/Volumes/config"
DEST_PATH="$MOUNT_POINT/www/community/Ultra-Vehicle-Card"

# Build the project
echo "Building project..."
npm run build

# Check if the drive is already mounted
if [ ! -d "$MOUNT_POINT" ]; then
  echo "Mounting SMB share..."
  mkdir -p "$MOUNT_POINT"
  mount_smbfs "$SMB_URL" "$MOUNT_POINT"
  echo "SMB share mounted successfully."
else
  echo "SMB share is already mounted."
fi

# Make sure destination directory exists
if [ ! -d "$DEST_PATH" ]; then
  echo "Creating destination directory..."
  mkdir -p "$DEST_PATH"
fi

# Copy files to the SMB share
echo "Copying files to SMB share..."
rsync -av --delete dist/ "$DEST_PATH/"

echo "Deployment complete!" 