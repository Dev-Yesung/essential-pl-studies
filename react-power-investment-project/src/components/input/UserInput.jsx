import Input from './Input.jsx';

export default function UserInput({userInput, onChange}) {


  return (
    <section id='user-input'>
      <div className='input-group'>
        <Input
          type='number'
          value={userInput.initialInvestment}
          name='INITIAL INVESTMENT'
          id='initialInvestment'
          onChange={onChange}
        />
        <Input
          type='number'
          value={userInput.annualInvestment}
          id='annualInvestment'
          name='ANNUAL INVESTMENT'
          onChange={onChange}
        />
      </div>
      <div className='input-group'>
        <Input
          type='number'
          value={userInput.expectedReturn}
          id='expectedReturn'
          name='EXPECTED RETURN'
          onChange={onChange}
        />
        <Input
          type='number'
          value={userInput.duration}
          id='duration'
          name='DURATION'
          onChange={onChange}
        />
      </div>
    </section>
  );
};