const { createConnection } = require('net');

const server = 'gmail-smtp-in.l.google.com';

const from = 'zachbutler@gmail.com';
const to = 'dannyhogann@gmail.com';

const email = `FROM: "Zach Butlet" <${from}>
To: "Me" <${to}>
Date: ${new Date()}
Subject: My name is Zach Butler!

And i'm a chad

\r\n.\r\n`;

const client = createConnection(25, server, () =>{
  console.log('connected');
});

const steps = [
  'HELO danny.com\n',
  `MAIL FROM:<${from}>\n`,
  `RCPT TO:<${to}>\n`,
  'DATA\n',
  email,
  'QUIT\n'
];

let step = 0;
client.on('data', data => {
  console.log(data.toString());
  if(step === steps.length) return client.end();
  client.write(steps[step]);
  step++;
});
