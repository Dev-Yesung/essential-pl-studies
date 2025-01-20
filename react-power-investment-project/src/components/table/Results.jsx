import Table from "./Table";
import { calculateInvestmentResults, formatter } from "../../util/investment.js";

const theadValues = ['Year', 'Investment Value', 'Interest (Year)', 'Total Interest', 'Invested Capital'];

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput)
    .map(it => {
      const totalInterest = it.valueEndOfYear - it.annualInvestment * it.year - userInput.initialInvestment;
      const totalAmountInvested = it.valueEndOfYear - totalInterest

      return {
        'year': it.year,
        'annualInvestment': formatter.format(it.annualInvestment),
        'interest': formatter.format(it.interest),
        'valueEndOfYear': formatter.format(totalInterest),
        'investedCapital': formatter.format(totalAmountInvested)
      }
    });

  return (
    <Table
      theadValues={theadValues}
      tbodyValues={results}
    />
  );
}