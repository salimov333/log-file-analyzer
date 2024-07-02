const fs = require('fs');
const readline = require('readline');

// Check if log file path is provided
if (process.argv.length < 3) {
    console.error('Please provide the path to the log file as an argument.');
    process.exit(1);
}

const logFilePath = process.argv[2];

// Regular expression to match log entries
const logPattern = /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z) \[(ERROR|WARNING|INFO|SECURITY|DEBUG)\] (.*)/;

const logCounts = {
    ERROR: 0,
    WARNING: 0,
    INFO: 0,
    SECURITY: 0,
    DEBUG: 0,
};

const requestCounts = {};

const rl = readline.createInterface({
    input: fs.createReadStream(logFilePath),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    const match = line.match(logPattern);
    if (match) {
        const [ , timestamp, level, message] = match;
        logCounts[level]++;

        // Example: Extracting request type if the log message contains 'Request type: XYZ'
        const requestMatch = message.match(/Request type: (\w+)/);
        if (requestMatch) {
            const requestType = requestMatch[1];
            if (!requestCounts[requestType]) {
                requestCounts[requestType] = 0;
            }
            requestCounts[requestType]++;
        }
    }
});

rl.on('close', () => {
    console.log('Log Analysis Summary:');
    console.log('======================');
    console.log('Error Count:', logCounts.ERROR);
    console.log('Warning Count:', logCounts.WARNING);
    console.log('Info Count:', logCounts.INFO);
    console.log('Security Count:', logCounts.SECURITY);
    console.log('Debug Count:', logCounts.DEBUG);

    console.log('\nRequest Counts:');
    for (const [requestType, count] of Object.entries(requestCounts)) {
        console.log(`${requestType}: ${count}`);
    }
});
