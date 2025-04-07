const path = require('path');

const fileName = __filename;
console.log('Curent File name', fileName);

const folderName = __dirname;
console.log('Curent Folder name', folderName);

const baseName1 = path.basename(fileName);
console.log('Base Name 1: ', baseName1);

const baseName2 = path.basename(folderName);
console.log('Base Name 2: ',baseName2);

const dirName = path.dirname(fileName);
console.log('Dir Name : ', dirName);

const extName = path.extname(fileName);
console.log('Dir Name : ', extName);

const joinPath = path.join(dirName, 'home', 'menu');
console.log('Join Path : ',joinPath);

const resolvePath = path.resolve('index.js');
console.log('Resolve Path : ',resolvePath);

const normalizePath = path.normalize('/test/../home');
console.log('Normalize Path 1 :',path.normalize('/home/user//docs/../file.txt'));
console.log('Normalize Path 2 : ',normalizePath);

const isAbsolute = path.isAbsolute(fileName);
console.log('isAbsolute 1 : ',isAbsolute);
console.log('isAbsolute 2 : ',path.isAbsolute('docs/file.txt'));

const parsePath = path.parse(fileName);
console.log('Parse Path : ', parsePath);

const formatPath = path.format({
  root: 'D:\\',
  dir: 'D:\\LearnBackend\\LearnBackend\\nodejs-path-module',
  base: 'index.js',
  ext: '.js',
  name: 'index'
});
console.log('Format Path : ',formatPath);

