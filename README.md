
# AI-Powered Disaster Response Platform

A modern web application designed to predict, analyze, and respond to natural disasters using artificial intelligence and blockchain technology.

## Features

### 1. AI Prediction System
- Real-time disaster prediction using machine learning models
- Geographic visualization of high-risk areas
- Population density and infrastructure damage assessment
- Weather pattern recognition integration

### 2. Model Evaluation Framework
- Comprehensive training data analysis from 27 crisis regions
- 92% prediction accuracy on training sets
- Cross-validation across different geographical regions
- Independent evaluation by humanitarian experts

### 3. Resource Allocation
- Real-time optimization of aid distribution
- Population density tracking
- Infrastructure damage assessment
- Medical need prioritization
- Supply route accessibility monitoring

### 4. Technology Stack

**Frontend:**
- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for UI components
- React Router for navigation
- Recharts for data visualization

**AI Components:**
- Random Forest for disaster classification
- LSTM Networks for time-series prediction
- CNN for satellite data analysis

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd <project-name>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
src/
├── components/          # React components
│   ├── AISection/      # AI features documentation
│   ├── PredictionMap/  # Geographic prediction visualization
│   └── ui/             # Reusable UI components
├── pages/              # Route pages
├── lib/               # Utility functions
└── hooks/             # Custom React hooks
```

## Key Components

### PredictionMap
Interactive map showing disaster-prone areas with risk levels and detailed analytics.

### ModelEvaluationTable
Comprehensive display of model performance metrics, including:
- Training results (92% accuracy)
- Validation outcomes
- Pilot testing results
- Evaluation metrics
- Generalization capabilities

### AISection
Detailed documentation of AI implementation including:
- Predictive analytics
- Real-time resource allocation
- Technology stack details

## Development

This project uses:
- TypeScript for type safety
- React Query for data fetching
- Tailwind CSS for styling
- shadcn/ui for component library
- Vite for fast development and building

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

