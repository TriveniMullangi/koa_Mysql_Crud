const db = require('../connection/dbConnection');

exports.show = async (id) => {
    try {
        console.log("inside get service")
        let studentData = await db(`SELECT * FROM student`, [id]);
        return studentData[0];
    } catch (error) {
        console.log(error);
    }

}

exports.add = async (obj)=>{
    try {
        console.log("inside insert service")
        let studentData = await db(`insert into student(sname,marks1,marks2,marks3,sgrade,email) values(?,?,?,?,?,?)`, [obj.sname,obj.marks1,obj.marks2,obj.marks3,obj.sgrade,obj.email]);
        return studentData;
    } catch (error) {
        console.log(error);
    }
}

exports.update = async (grade,email)=>{
    try {
        console.log("inside update service")
        let studentData = await db(`update student set sgrade = ? where email=?`, [grade,email]);
        return studentData;
    } catch (error) {
        console.log(error);
    }
}

exports.delete = async (email)=>{
    try {
        console.log("inside delete service")
        let studentData = await db(`delete from student where email=?`, [email]);
        return studentData;
    } catch (error) {
        console.log(error);
    }
}