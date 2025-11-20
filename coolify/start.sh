#!/bin/sh

# Start Astro SSR server in the background with specific port and host
echo "Starting Astro SSR server on port 4321..."
HOST=0.0.0.0 PORT=4321 node dist/server/entry.mjs &

# Wait a moment for Node server to start
sleep 3

# Start nginx in the foreground
echo "Starting Nginx..."
nginx -g "daemon off;"
