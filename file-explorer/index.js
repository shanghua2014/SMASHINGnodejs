var fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout;

fs.readdir(process.cwd(), function (error, files) {
    console.log('');
    if (!files.length) {
        return console.log('\033[31m No files to show \033[39m\n');
    }
    console.log(files)
    console.log('Select shich file or directory you want to see \n');

    function file (i) {
        var filename = files[i];
        fs.stat(__dirname + '/' +filename, function (err, stat) {
            if (stat.isDirectory) {
                console.log(' ' +i+ '\033[36m' +filename+ '/\033[39m');
            } else {
                console.log(' ' +i+ '\033[90m' +filename+ '\033[39m')
            }
            
            if (++i == files.length) {
                read();
            } else {
                file(i);
            }
        });
    }

    function read () {
        console.log('');
        stdout.write(' \033[33mEnter your choice：\033[39m');
        stdout.resume();
        stdout.setEncoding('utf8');
        stdout.on('data', option);
    }
    function option (data) {
        if (!files[Number(data)]) {
            stdout.write(' \033[31nodmEnter your choice：\033[39m');
        } else {
            stdout.pause();
        }
    }

    file(0);
}) // 异步