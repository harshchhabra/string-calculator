class StringCalculator {
  add(numbers){
    if (numbers === '') return 0;
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n');
      delimiter = parts[0].replace("//", "")
      numbers = parts[1];
    }
    const numArray = numbers.split(delimiter).map(Number);
    const negatives = numArray.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers are not allowed ${negatives.join(',')}`);
    }
    return numArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = StringCalculator;
