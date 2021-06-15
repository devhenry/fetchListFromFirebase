
    
    var firebaseConfig = {
    apiKey: "keyhere",
    authDomain: "mycrud-5369e.firebaseapp.com",
    databaseURL: "https://mycrud-5369e-default-rtdb.firebaseio.com",
    projectId: "mycrud-5369e",
    storageBucket: "mycrud-5369e.appspot.com",
    messagingSenderId: "727341125909",
    appId: "1:727341125909:web:06bd30ee2423fb72a2191c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  var stNo = 0;

  function addItemsToList(name,rollNo,sec,gen){
    var ul = document.getElementById('list');
    var header = document.createElement('h2');

    var stName = document.createElement('li');
    var stRollNo = document.createElement('li');
    var stSec = document.createElement('li');
    var stGen = document.createElement('li');

    header.innerHTML = 'Student -'+(++stNo);


    stName.innerHTML = 'Name:' +name;
    stRollNo.innerHTML = 'Roll No:' +rollNo;
    stSec.innerHTML = 'Section:' +sec;
    stGen.innerHTML = 'Gender:' +gen;

    ul.appendChild(header);
    ul.appendChild(stName );
    ul.appendChild(stRollNo);
    ul.appendChild( stSec);
    ul.appendChild(stGen);
    


  }


  function fetchAllData(){
      firebase.database().ref('student').once('value',function(snapshot){

        snapshot.forEach(
               function(ChildSnapshot){
                 let name = ChildSnapshot.val().NameOfStudent;
                 let roll = ChildSnapshot.val().RollNumber;
                 let sec = ChildSnapshot.val().Section;
                 let gen = ChildSnapshot.val().Gender;
                 addItemsToList(name,roll,sec,gen);

               }

        );
      });
      

  }
window.onload(fetchAllData());
   
