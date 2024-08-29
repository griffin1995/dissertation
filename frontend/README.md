## Project Setup

Before you can start the project, you need to install all the required dependencies for both the backend and frontend.

### Installing Dependencies

1. **Navigate to the root directory** of the project:

   ```bash
   cd dissertation
   ```

2. **Install Python dependencies**:

   First, ensure you have a Python virtual environment set up. If not, you can create one:

   ```bash
   python -m venv env
   ```

   Then, activate the virtual environment:

   ```bash
   source env/bin/activate
   ```

   Next, navigate to the `backend` directory:

   ```bash
   cd backend
   ```

   Finally, install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

3. **Install Frontend dependencies**:

   Navigate to the `frontend` directory and install the necessary Node.js packages:

   ```bash
   cd ../frontend
   npm install
   ```

### Starting the Project

You can start the project either with a single command using the startup script or manually by starting each component separately.

#### One-Step Start

1. **Navigate to the root directory** of the project (if you're not already there):

   ```bash
   cd dissertation
   ```

2. **Run the startup script**:

   ```bash
   ./start.sh
   ```

#### Manual Start

If you prefer or need to start the backend and frontend separately, follow these steps:

1. **Start the Backend**:

   - From the root directory, activate the Python virtual environment:

     ```bash
     source env/bin/activate
     ```


2. **Start the Frontend**:

   - Open a new terminal window, navigate to the `frontend` directory:

     ```bash
     cd dissertation/frontend
     ```

   - Run the development server:

     ```bash
     npm run dev
     ```
