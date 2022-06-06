const validateName = (name) => {
  return !(name.includes('-') || name.includes(','));
};

const readHobbies = (info) => {
  console.log('Please enter hobbies');
  process.stdin.on('data', (chunk) => {
    if (chunk.includes(',')) {
      info.hobbies = chunk.trim().split(',');
      console.log(info);
    }
  });
};

const readDOB = (info) => {
  console.log('Please enter DOB');
  process.stdin.on('data', (chunk) => {
    if (chunk.includes('-')) {
      info.DOB = chunk.trim();
      readHobbies(info);
    }
  });
};

const readName = (info) => {
  console.log('Please enter name');
  process.stdin.on('data', (chunk) => {
    if (validateName(chunk)) {
      info.name = chunk.trim();
      readDOB(info);
    }
  });
};

const main = () => {
  const info = { 'name': '', 'DOB': '', 'hobbies': [] };
  process.stdin.setEncoding('utf8');
  readName(info);
};

main();
