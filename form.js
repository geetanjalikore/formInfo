/* eslint-disable no-process-exit */
const validateName = (name) => {
  const regEx = /^[A-Za-z]{5,}$/;
  return regEx.test(name);
};

const validateDob = (dob) => {
  const regEx = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
  return regEx.test(dob);
};

const validatePhoneNo = (contact) => {
  const regEx = /^\d{10}$/;
  return regEx.test(contact);
};

class Form {
  constructor() {
    this.name = '';
    this.dob = '';
    this.hobbies = [];
    this.phoneNo = '';
    this.address = '';
  }

  setName(name) {
    if (validateName(name)) {
      this.name = name;
      return true;
    }
    return false;
  }

  setDob(dob) {
    if (validateDob(dob)) {
      this.dob = dob;
      return true;
    }
    return false;
  }

  setHobbies(hobbies) {
    if (hobbies) {
      this.hobbies = hobbies.split(',');
      return true;
    }
    return false;
  }

  setPhoneNo(phoneNo) {
    if (validatePhoneNo(phoneNo)) {
      this.phoneNo = phoneNo;
      return true;
    }
    return false;
  }
}

const main = () => {
  process.stdin.setEncoding('utf8');
  const form = new Form();

  const questions = [
    { quest: 'Please enter name', callBack: (name) => form.setName(name) },
    { quest: 'Please Enter DOB', callBack: (dob) => form.setDob(dob) },
    { quest: 'Please enter hobbbies', callBack: (hobbies) => form.setHobbies(hobbies) },
    { quest: 'Please Enter phone number', callBack: (phoneNo) => form.setPhoneNo(phoneNo) }
  ];

  let index = 0;
  console.log(questions[index].quest);
  process.stdin.on('data', (chunk) => {
    const info = chunk.trim();
    if (questions[index].callBack(info)) {
      index++;
    }
    console.log(questions[index].quest);
  });
};

main();
