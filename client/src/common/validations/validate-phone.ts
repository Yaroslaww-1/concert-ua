const validatePhone = (phone: string): Error | null => {
  const re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
  const isValid = re.test(String(phone).toLowerCase());
  if (isValid) {
    return null;
  } else {
    return new Error('Phone is not valid');
  }
};

export default validatePhone;
