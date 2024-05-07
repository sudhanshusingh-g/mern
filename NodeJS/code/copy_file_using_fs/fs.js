const fs = require("fs");

// fs.writeFileSync("file1.txt","This is file 1 content");
// fs.mkdirSync("./directory 1")
const path=require("path");

const extension = path.extname("D:/mern/NodeJS/code/copy_file_using_fs/file1.txt");
console.log(extension);

const basename = path.basename(
  "D:/mern/NodeJS/code/copy_file_using_fs/file1.txt"
);
console.log(basename);

const directoryPath = "D:/mern/NodeJS/code/copy_file_using_fs/directory 1";
const destPath=path.join(directoryPath,basename);
console.log(destPath);

const filePath = "D:/mern/NodeJS/code/copy_file_using_fs/file1.txt";

fs.copyFileSync(filePath,destPath);

console.log("copied");