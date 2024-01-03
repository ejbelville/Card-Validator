import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { isValidLuhn } from './isValidLuhn';


function App() {
  // initiate state for a credit card number
  let [cardNumber, setCardNumber] = React.useState('');

  // initiate state for if the card number is valid or not, and null for when the user hasn't clicked the button yet
  let [isValid, setIsValid] = React.useState<boolean | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Card Validator</h2>
        <p>Enter a credit card number to validate</p>
        <TextField 
          label="Card Number" 
          variant="filled" 
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          style={{marginBottom: '20px', width: '300px', maxWidth: '90%', color: 'warning'}}
        />
        
        <Button 
          variant="contained"
          color="primary"
          onClick={() => setIsValid(isValidLuhn(cardNumber))}
          style={{marginBottom: '20px'}}
        >
          Validate
        </Button>

        <p style={
          isValid === null ? {color: 'white'} : isValid ? {color: 'green'} : {color: 'red'}
        }>{isValid !== null && (isValid ? 'Valid' : 'Invalid')}</p>

        {/* Valid icon */}
        {isValid && <img src="https://img.icons8.com/ios/50/000000/ok--v1.png" alt="valid" />}
        {/* Invalid icon */}
        {isValid === false && <img src="https://img.icons8.com/ios/50/000000/delete-sign-filled.png" alt="invalid" />}
      </header>
    </div>
  );
}

export default App;
