

export default function UserInput({onInputChange, currValues}){
    
    return (
        <section id="user-input">
            <div className="input-group">
                <p> 
                    <label>Initial Investment</label>
                    <input 
                        type="number" 
                        onChange={(event)=>onInputChange('initialInvestment', event.target.value)} 
                        value={currValues.initialInvestment}
                        required>    
                    </input>
                </p>
                <p> 
                    <label>Annual Investment</label>
                    <input 
                        type="number" 
                        onChange={(event)=>onInputChange('annualInvestment', event.target.value)} 
                        value={currValues.annualInvestment}
                        required>
                    </input>
                </p>                
            </div>
            <div className="input-group">
                <p> 
                    <label>Expected Return</label>
                    <input 
                        type="number" 
                        onChange={(event)=>onInputChange('expectedReturn', event.target.value)} 
                        value={currValues.expectedReturn}
                        required>    
                    </input>
                </p>
                <p> 
                    <label>Duration</label>
                    <input 
                        type="number" 
                        onChange={(event)=>onInputChange('duration', event.target.value)} 
                        value={currValues.duration}
                        required>
                    </input>
                </p>    
            </div> 
        </section>    
    )
}