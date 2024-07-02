# Log File Analyzer

## Overview

Log File Analyzer is a Node.js script designed to parse and analyze log files. It extracts important information such as timestamps, log levels (ERROR, WARNING, INFO, SECURITY, DEBUG), and log messages. The script then generates a summary report including counts of each log level and occurrences of specific request types.

## Features

- **File Input**: Takes the log file path as a command-line argument.
- **Line-by-Line Processing**: Reads the log file line by line.
- **Regular Expressions**: Uses regular expressions to extract and parse log entries.
- **Data Collection**: Counts occurrences of different log levels and tracks request types.
- **Summary Report**: Outputs a summary of errors, warnings, info, security, and debug logs, along with request counts.

## Example Usage

### Running the Script

```bash
node app.js path/to/your/logfile.log
```

### Example Log File

Create a file named `example.log` with the following content:

```plaintext
2023-07-01T12:00:00.000Z [INFO] Starting server
2023-07-01T12:01:00.000Z [ERROR] Failed to connect to database
2023-07-01T12:02:00.000Z [INFO] Request type: GET
2023-07-01T12:02:30.000Z [INFO] Request type: POST
2023-07-01T12:03:00.000Z [WARNING] High memory usage detected
2023-07-01T12:04:00.000Z [SECURITY] Unauthorized access attempt
2023-07-01T12:05:00.000Z [DEBUG] Debugging application
2023-07-01T12:06:00.000Z [INFO] Request type: GET
2023-07-01T12:07:00.000Z [ERROR] Failed to retrieve data
2023-07-01T12:08:00.000Z [INFO] Server shutting down
```

### Sample Output

```plaintext
Log Analysis Summary:
======================
Error Count: 2
Warning Count: 1
Info Count: 4
Security Count: 1
Debug Count: 1

Request Counts:
GET: 2
POST: 1
```

## Customization and Enhancements

- **Log Format**: Modify the regular expressions to match your specific log file format.
- **Filtering**: Add more filters to extract specific types of events or data.
- **Additional Statistics**: Calculate average response time, error rates by request type, etc.
- **Time Range Filtering**: Allow filtering by time range.
- **Output Formats**: Generate reports in different formats (CSV, JSON, HTML).
- **Visualization**: Use libraries like `chart.js` to create charts or graphs of your data.
- **Error Handling**: Add robust error handling for file reading and log parsing.

## Dependencies

- Node.js
- readline module (built-in in Node.js)
- fs module (built-in in Node.js)

## License

This project is licensed under the MIT License.
