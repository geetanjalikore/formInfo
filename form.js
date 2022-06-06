const validateName = (name) => {
  const regEx = /[A-Za-z]{5,}/;
  return regEx.test(name);
};

const validateDob = (dob) => {
  const regEx = /[0-9]{4}-[0-9]{2}-[0-9]{2}/;
  return regEx.test(dob);
};

const validatePhoneNo = (contact) => {
  const regEx = /^\d{10}$/;
  return regEx.test(contact);
};

const main = () => {
  process.stdin.setEncoding('utf8');
  const form = {};
  let count = 1;

  console.log('Enter name');
  process.stdin.on('data', (chunk) => {
    const info = chunk.trim();
    if (count === 1) {
      if (!validateName(info)) {
        console.log('Enter name');
      } else {
        form.name = info;
        count++;
        console.log('Enter DOB');
      }
    } else if (count === 2) {
      if (!validateDob(info)) {
        console.log('Wrong format, Enter DOB');
      } else {
        form.dob = info;
        count++;
        console.log('Enter hobbbies');
      }
    } else if (count === 3) {
      if (!info) {
        console.log('Enter atleast one hobby');
      } else {
        form.hobbies = info.split(',');
        count++;
        console.log('Enter phone number');
      }
    } else if (count === 4) {
      if (!validatePhoneNo(info)) {
        console.log('Wrong format , Enter phone number');
      } else {
        form.phone = info;
        count++;
      }
    }
  });
};

main();
