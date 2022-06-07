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
  const questions = ['Please enter name', 'Please Enter DOB', 'Please enter hobbbies', 'Enter phone number'];
  const form = new Form();
  let index = 0;

  console.log(questions[index]);
  process.stdin.on('data', (chunk) => {
    const info = chunk.trim();
    if (index === 0) {
      if (form.setName(info)) {
        index++;
      }
    } else if (index === 1) {
      if (form.setDob(info)) {
        index++;
      }
    } else if (index === 2) {
      if (form.setHobbies(info)) {
        index++;
      }
    } else if (index === 3) {
      if (form.setPhoneNo(info)) {
        index++;
      }
    }
    console.log(questions[index]);
  });
};

main();
