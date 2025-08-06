#!/bin/bash

# Script to run both main and staging environments simultaneously

echo "🚀 Starting both development environments..."

# Kill any existing Next.js processes
echo "🛑 Stopping existing servers..."
pkill -f "next dev" 2>/dev/null || true

# Start main environment on port 7007
echo "📱 Starting MAIN environment on port 7007..."
git checkout main
npm run dev &
MAIN_PID=$!

# Wait a moment for main to start
sleep 3

# Start staging environment on port 7008
echo "🧪 Starting STAGING environment on port 7008..."
git checkout staging
npx next dev -p 7008 &
STAGING_PID=$!

echo ""
echo "✅ Both environments are now running!"
echo ""
echo "🌐 MAIN (Full Site):     http://localhost:7007"
echo "🧪 STAGING (Minimal):    http://localhost:7008"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
wait 