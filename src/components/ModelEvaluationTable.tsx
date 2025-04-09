
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const ModelEvaluationTable = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          AI Model <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Validation & Evaluation</span>
        </h2>
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            Our AI forecasting model undergoes rigorous testing and validation to ensure reliable predictions 
            for humanitarian food distribution in crisis-affected areas.
          </p>
        </div>

        <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] font-bold">Phase</TableHead>
                <TableHead className="font-bold">Methodology</TableHead>
                <TableHead className="font-bold">Results</TableHead>
                <TableHead className="font-bold">Outcome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Training</TableCell>
                <TableCell>
                  Trained on 5 years of historical food distribution data across 27 crisis regions using transfer learning techniques
                </TableCell>
                <TableCell>
                  Achieved 92% prediction accuracy on training set with minimal overfitting
                </TableCell>
                <TableCell className="text-green-600">
                  Model successfully captured temporal and spatial patterns in food demand
                </TableCell>
              </TableRow>
              
              <TableRow>
                <TableCell className="font-medium">Validation</TableCell>
                <TableCell>
                  Cross-validated using 20% of data withheld from training, with 5-fold validation across different geographical regions
                </TableCell>
                <TableCell>
                  87% accuracy on validation set with 11% mean absolute error reduction compared to traditional forecasting
                </TableCell>
                <TableCell className="text-green-600">
                  Model generalized well to unseen data points within known regions
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Pilot Testing</TableCell>
                <TableCell>
                  Deployed in 3 active crisis zones for 3 months, with human oversight and blockchain verification
                </TableCell>
                <TableCell>
                  Reduced food waste by 31% and improved distribution speed by 24% compared to previous methods
                </TableCell>
                <TableCell className="text-green-600">
                  Model demonstrated real-world effectiveness in actual crisis scenarios
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Evaluation</TableCell>
                <TableCell>
                  Independent evaluation by humanitarian logistics experts and regional aid organizations
                </TableCell>
                <TableCell>
                  Received 4.7/5 rating for accuracy and 4.8/5 for practical utility in humanitarian contexts
                </TableCell>
                <TableCell className="text-green-600">
                  Model approved for full deployment with ongoing monitoring
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Generalization</TableCell>
                <TableCell>
                  Tested on entirely new crisis region with different climate, logistics, and population dynamics
                </TableCell>
                <TableCell>
                  82% accuracy in new region after minimal fine-tuning, improving to 89% after regional adaptation
                </TableCell>
                <TableCell className="text-green-600">
                  Model demonstrates strong transfer capability to new humanitarian contexts
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Continuous Validation</TableCell>
                <TableCell>
                  Ongoing weekly retraining with new data and quarterly comprehensive evaluations
                </TableCell>
                <TableCell>
                  Maintained 90%+ accuracy over 12 months with automatic anomaly detection and alerting
                </TableCell>
                <TableCell className="text-green-600">
                  Model remains accurate and relevant as crisis conditions evolve
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="text-center">
          <p className="text-gray-700 italic">
            All evaluation metrics are independently verified and stored on our transparent blockchain ledger, 
            ensuring accountability and trust in our AI forecasting capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModelEvaluationTable;
