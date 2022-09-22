const tedious = require('tedious');

// const az_identity = require('@azure/identity');
// const az_kv = require('@azure/keyvault-secrets');
// const credentials = new az_identity.AzureCliCredential();
// const client = new az_kv.SecretClient('https://keyvault243.vault.azure.net/', credentials);

// async function f() {
//   username = await client.getSecret("username");
//   password = await client.getSecret("password");
//   hostname = await client.getSecret("host");
//   usernameValue = username.value
//   passwordValue = password.value
//   hostnameValue = hostname.value
//   console.log(usernameValue)
// }

// f();

const env = {
    database: "exit_test",
    username: "pankajsingh",
    password: "abcd1234",
    host: "10.0.0.6",
    dialect: "mssql",
    dialectModule: tedious
};

module.exports=env;
//some 
// const env = {
//     database: "exit_test",
//     username: "root",
//     password: "root1234",
//     host: "127.0.0.1",
//     dialect: "mssql",
//     dialectModule: tedious
//   };