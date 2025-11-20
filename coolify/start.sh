#!/bin/sh

# Start Astro SSR server in the background
echo "Starting Astro SSR server..."
node dist/server/entry.mjs &

# Wait a moment for Node server to start
sleep 2

# Start nginx in the foreground
echo "Starting Nginx..."
nginx -g "daemon off;"
