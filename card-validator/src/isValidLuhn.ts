
export function isValidLuhn(input: string): boolean {
    let sum = 0;
    let shouldDouble = false;
  
    // Return in null or undefined cases
    if (input === null || input === undefined) {
        return false;
    }

    // remove whitespace
    input = input.replace(/\s/g, "");

    //handle empty string
    if (input.length === 0) {
        return false;
    }
  
    // Iterate over the string from right to left
    for (let i = input.length - 1; i >= 0; i--) {
        let digit = parseInt(input.charAt(i));
  
        if (isNaN(digit)) {
            // Handle non-numeric character
            return false;
        }
  
        // Double every other digit, starting from the right
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
  
        // Add to the rest of the sum
        sum += digit;
        shouldDouble = !shouldDouble;
    }
  
    // Check if sum is divisible by 10
    return sum % 10 === 0;
  }