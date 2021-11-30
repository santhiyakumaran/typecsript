let useridAutoIncrement=1000;
let courseidAutoIncrement=500;

class user{
    userid:string;
    name:string;
    age:number;
    phonenumber:number;
    constructor(username:string,age:number,mobno:number){
        useridAutoIncrement ++;
        this.userid = "UI" + useridAutoIncrement.toString();
        this.name=username;
        this.age=age;
        this.phonenumber=mobno;

    }

}

class id{
    userid:string;
    courseid:string;
    coursename:string;
    requireddays:string;
    constructor(courseid:string,coursename:string,requireddays:string){
        useridAutoIncrement ++;
        this.userid = "UI" + useridAutoIncrement.toString();
        this.courseid="CI" + courseidAutoIncrement.toString();
        this.coursename=coursename;
        this.requireddays=requireddays;

    }

}

let UserArrayList: Array<user> = new Array<user>();

UserArrayList.push(new user("santhiya", 21, 9087654309));
UserArrayList.push(new user("sandy", 20, 6383046958));

let UserArrayListid:Array<id>=new Array<id>();
UserArrayListid.push(new id("706","c#","5days"));
UserArrayListid.push(new id("707","HTML","3days"));
UserArrayListid.push(new id("708","CSS","4days"));
UserArrayListid.push(new id("709","JAVASCRIPT","3days"));
UserArrayListid.push(new id("710","TYPESCRIPT","2days"));


function registration(){

    
    let homepage=document.getElementById('homepage') as HTMLDivElement;
    let details=document.getElementById('personaldetails') as HTMLDivElement;
    details.style.display="block";
    
    {
        alert('please fill out the form fully') ;
    }

}
function login(){

    let userid=document.getElementById('userid') as HTMLDivElement;
    userid.style.display="block";
    {
        alert('successfully registered');
    }
    

}
function proceed(){
    let confirm=document.getElementById('coursepage') as HTMLDivElement;
    confirm.style.display="block";
}
function availablecourses(){
    let courses=document.getElementById('coursepage') as HTMLDivElement;
    courses.style.display="block";
    let name=document.getElementById('name') as HTMLDivElement;
    name.style.display="block";
}
function enrolledcourses(){
    let involved=document.getElementById('enrolled') as HTMLDivElement;
    involved.style.display="block";

}
function exit(){
    let endpage=document.getElementById('endpage') as HTMLDivElement;

    let homepage=document.getElementById('homepage') as HTMLDivElement;
    homepage.style.display="block";
}



























