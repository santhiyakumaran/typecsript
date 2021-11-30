var useridAutoIncrement = 1000;
var courseidAutoIncrement = 500;
var user = /** @class */ (function () {
    function user(username, age, mobno) {
        useridAutoIncrement++;
        this.userid = "UI" + useridAutoIncrement.toString();
        this.name = username;
        this.age = age;
        this.phonenumber = mobno;
    }
    return user;
}());
var id = /** @class */ (function () {
    function id(courseid, coursename, requireddays) {
        useridAutoIncrement++;
        this.userid = "UI" + useridAutoIncrement.toString();
        this.courseid = "CI" + courseidAutoIncrement.toString();
        this.coursename = coursename;
        this.requireddays = requireddays;
    }
    return id;
}());
var UserArrayList = new Array();
UserArrayList.push(new user("santhiya", 21, 9087654309));
UserArrayList.push(new user("sandy", 20, 6383046958));
var UserArrayListid = new Array();
UserArrayListid.push(new id("706", "c#", "5days"));
UserArrayListid.push(new id("707", "HTML", "3days"));
UserArrayListid.push(new id("708", "CSS", "4days"));
UserArrayListid.push(new id("709", "JAVASCRIPT", "3days"));
UserArrayListid.push(new id("710", "TYPESCRIPT", "2days"));
function registration() {
    var homepage = document.getElementById('homepage');
    var details = document.getElementById('personaldetails');
    details.style.display = "block";
    {
        alert('please fill out the form fully');
    }
}
function login() {
    var userid = document.getElementById('userid');
    userid.style.display = "block";
    {
        alert('successfully registered');
    }
}
function proceed() {
    var confirm = document.getElementById('coursepage');
    confirm.style.display = "block";
}
function availablecourses() {
    var courses = document.getElementById('coursepage');
    courses.style.display = "block";
    var name = document.getElementById('name');
    name.style.display = "block";
}
function enrolledcourses() {
    var involved = document.getElementById('enrolled');
    involved.style.display = "block";
}
function exit() {
    var endpage = document.getElementById('endpage');
    var homepage = document.getElementById('homepage');
    homepage.style.display = "block";
}
