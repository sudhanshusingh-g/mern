```javascript
const fs=require('fs');
```

The `fs` module in Node.js is used for interacting with the file system. It provides functions for reading, writing, and manipulating files and directories on the local file system.

Some common methods provided by fs module:

1. File System operations
- `fs.readFileSync()`
- `fs.readFile()`
- `fs.writeFileSync()`
- `fs.writeFile()`
- `fs.appendFileSync()`
- `fs.appendFile()`
- `fs.rename()`
- `fs.renameSync()`
- `fs.unlink()`
- `fs.unlinkSync()`
- `fs.exists()`

2. Directory System Operations
- `fs.readdir()`
- `fs.readdirSync()`
- `fs.mkdir()`.
- `fs.mkdirSync()`
- `fs.rmdir()`
- `fs.rmdirSync()`

Some other operations:
- `fs.basename()`
- `fs.extname()`
- `fs.copyFileSync(srcPath,destPath)`



[Copy file from another directory](../code/copy_file_using_fs/)