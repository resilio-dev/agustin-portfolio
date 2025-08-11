const fs = require('fs');
const targetPath = './src/environments/environment.prod.ts';

const apiUrl = process.env.NG_API_URL || '';

const envConfigFile = `export const environment = {
  production: true,
  apiUrl: '${apiUrl}'
};
`;

fs.writeFile(targetPath, envConfigFile, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Environment file generated at ${targetPath}`);
  }
});
