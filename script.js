document.addEventListener("DOMContentLoaded", () => {
    function generateRandomNumbers() {
        const numbers = [];
        const min = 30;
        const max = 60;
        
        for (let i = 0; i < 6; i++) {
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            numbers.push(randomNum);
        }
        
        numbers.sort((a, b) => a - b);
        
        return numbers;
    }
    
    function updateCircleTexts() {
        const numbers = generateRandomNumbers();
        
        // Update PC links
        const pcCircleTexts = document.querySelectorAll('.links-grid-pc .circle-text');
        pcCircleTexts.forEach((text, index) => {
            text.textContent = numbers[index] + 'ms';
        });
        
        // Update Mobile links with the same numbers
        const mobileCircleTexts = document.querySelectorAll('.links-grid-mobile .circle-text');
        mobileCircleTexts.forEach((text, index) => {
            text.textContent = numbers[index] + 'ms';
        });
    }
    
    updateCircleTexts();
    
    setInterval(updateCircleTexts, 1000);
});
  