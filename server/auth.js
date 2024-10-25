var LocalStorage = require('node-localstorage').LocalStorage,
    // localStorage = new LocalStorage('./scratch');
    localStorage = new LocalStorage('./localStorage');
const jwt = require("jsonwebtoken");


const RBACforClientAdd = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Add Client");
                }
            }
        })
    }
}

const RBACforClientUpdate = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Update Client");
                }
            }
        })
    }
}

const RBACforClientView = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to View Client");
                }
            }
        })
    }
}

const RBACforClientDelete = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Delete Client");
                }
            }
        })
    }
}

const RBACforProjectAdd = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Add Project");
                }
            }
        })
    }
}

const RBACforProjectUpdate = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Update Project");
                }
            }
        })
    }
}

const RBACforProjectView = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to View Project");
                }
            }
        })
    }
}

const RBACforProjectDelete = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Delete Project");
                }
            }
        })
    }
}

const RBACforTaskAdd = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Add Task");
                }
            }
        })
    }
}

const RBACforTaskUpdate = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Update Task");
                }
            }
        })
    }
}

const RBACforTaskView = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to View Task");
                }
            }
        })
    }
}

const RBACforTaskDelete = (permision) => {
    return (req, res, next) => {
        const myToken = localStorage.getItem('JWT');
        console.log("check client add auth token : ", myToken);
        jwt.verify(myToken, "abc", (err, decrypt) => {
            if (err) {
                console.log(err);
            } else {
                const designation = decrypt.designation;
                if (permision.includes(designation)) {
                    next();
                } else {
                    res.send("you don't have permission to Delete Task");
                }
            }
        })
    }
}

module.exports = { RBACforClientAdd, RBACforClientUpdate, RBACforClientView, RBACforClientDelete,
     RBACforProjectAdd, RBACforProjectUpdate, RBACforProjectView, RBACforProjectDelete,
     RBACforTaskAdd, RBACforTaskUpdate, RBACforTaskView, RBACforTaskDelete };