const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})

let uname = document.getElementById('username').value;
let pword = document.getElementById('password').value;

if(uname === 'admin' && pword === 'admin'){
  document.getElementById("btnLogin").href="pages/pos.html"; 
}

function accountLogin(){
  let uname = document.getElementById('username').value;
  let pword = document.getElementById('password').value;
  //admin
  let adminUname = 'admin', adminPword = 'admin';
  //manager
  let managerUname = 'user1', managerPword = '1234';
  //cashier
  let cashierUname = 'user2', cashierPword = '1234';

if(uname == adminUname && pword == adminPword){
  document.getElementById('btnLogin').href = "pages/posAdmin.html";
}
else if(uname == managerUname && pword == managerPword){
  document.getElementById('btnLogin').href = "pages/posManager.html";
}
else if(uname ==cashierUname && pword == cashierPword){
  document.getElementById('btnLogin').href = "pages/pos.html";
}
else{
  alert('Invalid input!');
}
}