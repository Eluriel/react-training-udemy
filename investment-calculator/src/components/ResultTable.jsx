import { calculateInvestmentResults, formatter } from '../util/investment';

export default function ResultTable({ userInput }) {
  const investmentResults = calculateInvestmentResults(userInput);

  console.log(investmentResults);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((yearResult) => {
          const totalInterest =
            yearResult.valueEndOfYear -
            yearResult.annualInvestment * yearResult.year -
            userInput.initialInvestment;
          const totalAmountInvested = yearResult.valueEndOfYear - totalInterest;

          return (
            <tr key={yearResult.year}>
              <td>{yearResult.year}</td>
              <td>{formatter.format(yearResult.valueEndOfYear)}</td>
              <td>{formatter.format(yearResult.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
