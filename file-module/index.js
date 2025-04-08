const fs = require('fs');

// Create and Write to a File

fs.writeFileSync('new.txt', "New file has been created!!");
fs.writeFile('newAsync.txt', "New file has been created using Async!", (err) => {
  if (err) {
    console.log('Error while creating the file!');
  } else {
    console.log('New File has been created using async!');
  }
});

// Append to a File

fs.appendFileSync('new.txt', '\nNew line has been appended!');
fs.appendFile('newAsync.txt', '\nNew line has beed appended using async appendFile!', (err) => {
  if (err) {
    console.log('Error while appending the file!');
  } else {
    console.log('New File has been appended!');
  }
});

// Read from a File

const data = fs.readFileSync('new.txt', 'utf8');
console.log('Data from new file : ', data);
fs.readFile('newAsync.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log('Error while reading a file!');
  } else {
    console.log('Data from newAsync file : ', data);
  }
});

// Deleting a File

fs.unlinkSync('new.txt');
console.log('new.txt File has been deleted');
fs.unlink('newAsync.txt', (err) => {
  if (err) throw err;
  console.log('newAsync.txt File has been deleted');
});

// Checking if a File Exists

if (fs.existsSync('example.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}

// Creating a Directory

fs.mkdirSync('newDir');
fs.mkdir('newDirAsync', (err) => {
    if (err) throw err;
    console.log('Directory created');
});

// Removing a Directory

fs.rmdirSync('newDir');
console.log('Directory removed');
fs.rmdir('newDirAsync', (err) => {
    if (err) throw err;
    console.log('Directory removed');
});


// Reading Contents of a Directory

fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(files);
})

// Getting File Information

fs.stat('index.js', (err, stats) => {
    if (err) throw err;
    console.log(stats);
});
