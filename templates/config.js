module.exports = {

    httpUnsafeOrigin: 'https://{{domain}}',
    httpSafeOrigin: "https://api.{{domain}}",
    httpAddress: '127.0.0.1',
    httpPort: {{cryptpad_port}},
    maxWorkers: 4,
    /*
    adminKeys: [
        "[admin@{{domain}}/xxxxxxxxxxxxxxxxxxxxxxxx=]",
    ],
    */
    inactiveTime: 90, // days
    archiveRetentionTime: 15,
    accountRetentionTime: 365,
    maxUploadSize: 8 * 1024 * 1024,
    filePath: '/home/pacs/{{pac}}/users/{{users}}/data/file/',
    archivePath: '/home/pacs/{{pac}}/users/{{user}}/data/archive/',
    pinPath: '/home/pacs/{{pac}}/users/{{user}}/data/pins',
    taskPath: '/home/pacs/{{pac}}/users/{{user}}/data/tasks',
    blockPath: '/home/pacs/{{pac}}/users/{{user}}/data/block',
    blobPath: '/home/pacs/{{pac}}/users/{{user}}/data/blob',
    blobStagingPath: '/home/pacs/{{pac}}/users/{{user}}/data/blobstage',
    decreePath: '/home/pacs/{{pac}}/users/{{user}}/data/decrees',
    logPath: '/home/pacs/{{pac}}/users/{{user}}/data/logs',
    logToStdout: true,
    logLevel: 'info',
    logFeedback: false,
    verbose: false,
    installMethod: 'unspecified',
 };