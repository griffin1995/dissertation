#!/bin/bash

# Activate the virtual environment and start the backend
source env/bin/activate
# e.g., python manage.py runserver &

# Start the frontend
cd ../frontend
npm run dev

# Return to the root directory
cd ..
