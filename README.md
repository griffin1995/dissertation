# Dissertation - Optimization Methods for Financial Index Tracking

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project is my implementation of a sparse tracking algorithm for financial index tracking. Index tracking is a popular passive investment strategy where the goal is to create a portfolio that replicates the performance of a given financial index. Rather than purchasing all the assets in the index, which can be inefficient due to illiquid positions and high transaction costs, this approach focuses on constructing a portfolio with a sparse set of assets.

This implementation leverages signal processing techniques to solve the index tracking problem as a regression task, constrained by the need for sparsity in the portfolio. The sparse index tracking problem is similar to other sparsity-driven problems in signal processing, where the goal is to achieve an optimal balance between tracking accuracy and the number of assets included in the portfolio.

The dissertation provides a comprehensive overview of the sparse index tracking problem, including practical considerations such as rebalancing frequency, changes in index composition, and transaction costs. The algorithms developed in this project offer a practical solution by delivering efficient tracking portfolios that are significantly faster and more scalable than traditional methods like mixed-integer programming (MIP) solvers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Authors](#authors)
- [Acknowledgements](#acknowledgements)

## Installation

### Frontend

To install the dependencies for the frontend, navigate to the `frontend` directory and run:

```bash
npm install
```

### Backend

For the backend, ensure you have Python installed. Then navigate to the `backend` directory and run:

#### Windows:

```bash
pip install -r requirements.txt
```

#### Unix-based systems:

```bash
python3 -m pip install -r requirements.txt
```

## Usage

To run the project, follow these steps:

1. Navigate to the root directory of the project `dissertation`.
2. Activate the Python virtual environment:

   ```bash
   source env/bin/activate
   ```

3. Start the frontend development server:

   ```bash
   cd frontend
   npm run dev
   ```

4. Start the backend server:

   ```bash
   cd backend
   python3 manage.py runserver
   ```

## Contributing

Contributions to this project are welcome. If you would like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Authors

- **Jack Griffin** - _Initial work_ - [griffin1995](https://github.com/griffin1995)

## Acknowledgements

- Special thanks to Dr. Yiyong Feng, Three Stones Capital Limited, for his invaluable guidance and support during this research.
- Thanks to all the open-source contributors and the academic community for their resources and insights.
