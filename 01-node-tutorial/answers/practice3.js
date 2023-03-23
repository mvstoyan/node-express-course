fs = require('fs').promises;

const makeFile = async () => {
    try {
      await fs.writeFile('./content/practice2.txt', `This is the first line,\n`);
      console.log(1)

      for (let i = 2; i <= 10; i++) {
      await fs.writeFile(
        './content/practice2.txt', 
        `This is line ${i}\n`,
        { flag: 'a' })

      console.log(i)
    }
    } catch (error) {
      console.log(error)
    }
  }
  
  makeFile()