const validate = values => {
    const errors = {};
    if (!values.refnum) {
        errors.refnum = "Please enter Employee Reference/Salary Number";
    }

    if (!values.empname) {
        errors.empname = "Please enter employee name. It must be alphabets only";
    }
    if (!values.bsb) {
        errors.bsb = "Please enter 6 digits BSB number";
    }
    else if (
        !/^[0-9]{6}$/i.test(values.bsb)
    ) {
        errors.bsb =
            "Please enter 6 digits BSB number";
    }
    else if (
        !/^[0-9]{6}$/i.test(values.bsb)
    ) {
        errors.bsb =
            "Invalid BSB. BSB can not start with 00.";
    }

    if (!values.accnum) {
        errors.accnum = "Employee Account Number must be numeric only and cannot be blank";
    }

    else if (
        !/^[0-9]{8,9}$/i.test(values.accnum)
    ) {
        errors.accnum =
            "Employee Account Number must be numeric only and 8 or 9 digits";
    }
    else if (
        !/^0*$/i.test(values.accnum)
    ) {
        errors.accnum =
            "Employee Account Number can not be all zeros";
    }
    return errors;
};