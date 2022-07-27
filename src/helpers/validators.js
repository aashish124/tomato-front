export const nameValidator = (name) => {
    if(name.length > 255) {
        return "Name must not contain more than 255 characters";
    }
    return "";
};

export const emailValidator = (email) => {
    const regexP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.length !== 0 && !regexP.test(email)) {
        return "Please enter a valid email";
    }
    return "";
};

export const descriptionValidator = (description) => {
    if(description.length > 10000) {
        return "Description must not contain more than 10000 characters";
    }
    return "";
};

export const passwordValidator = (password) => {
    if(password.length !== 0) {
        if(password.length < 6) {
            return "Password must not contain less than 6 characters";
        }
        if(password.length > 20) {
            return "Password must not contain more than 20 characters";
        }
    }
    return "";
};

export const imageValidator = (image) => {
    
    return "";
};

export const contactValidator = (contact) => {
    const regexP = /^\d+$/;
    if(contact.length !== 0 && !regexP.test(contact)) {
        return "Please enter a valid contact number";
    }
    else if(contact.length !== 0 && contact.length !== 10) {
        return "Contact number must be of 10 digits";
    }
    return "";
};

export const subjectValidator = (subject) => {
    if(subject.length > 200) {
        return "Subject must not contain more than 200 characters";
    }
    return "";
};

export const linkValidator = (link) => {
    const regexP = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(link.length !== 0 && !regexP.test(link)) {
        return "Please enter a valid url";
    }
    return "";
};

export const headingValidator = (heading) => {
    if(heading.length > 500) {
        return "Heading must not contain more than 500 characters";
    }
    return "";
};