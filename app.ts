import {readdir, createWriteStream} from 'fs';
import {stream} from 'got';

console.log('wooo');

readdir(__dirname, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});

stream('https://sindresorhus.com').pipe(createWriteStream('index.html'));
