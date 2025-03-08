import {calculateInvestmentResults, formatter} from "../util/investment.js"

export default function Output({inputData}){
    const results = calculateInvestmentResults(inputData) //importante: para usar o resultado da função neste componente 
                                                          //é necessario retornar o valor na função, e aqui criar um const = função  
    
    const initialInvestment = results[0].valueEndOfYear -
        results[0].valueEndfYear -
        results[0].interest -
        results[0].annualInvestment;

    return(                                                       
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((yearData) => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest
                    return(
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td> 
                        </tr>
                    )
                })
                    
                }
            </tbody>
        </table>
    )
}