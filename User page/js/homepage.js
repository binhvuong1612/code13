  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCX3q_oJgMPwQ7qJKWsTaucToeMyJLyTTg",
    authDomain: "bvdatabase-8d2bd.firebaseapp.com",
    databaseURL: "https://bvdatabase-8d2bd-default-rtdb.firebaseio.com",
    projectId: "bvdatabase-8d2bd",
    storageBucket: "bvdatabase-8d2bd.appspot.com",
    messagingSenderId: "945711249581",
    appId: "1:945711249581:web:d090b1bd6577ed662cee24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

/*CONTENT 3----ListPET*/
function homepage(){


    show_list_pet= document.getElementById('content_3_pet');
    show_list_pet.innerHTML = "";
 
    task_array_dog = [];
    task_array_cat = [];
    task_array_another = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    /*SHOW LIST PET OF WEEK*/
    firebase.database().ref("Pet/Dog").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_dog.push(Object.values(childData));
      });
       
      var counter=0;
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array_dog.length; i++){
        task_key = task_array_dog[i][0];
        task_pet_age = task_array_dog[i][1];
        task_pet_describe = task_array_dog[i][2];
        task_pet_img = task_array_dog[i][3];
        task_pet_name = task_array_dog[i][4];
        task_pet_title = task_array_dog[i][5];
        task_select_sex = task_array_dog[i][6];
        task_select_type_pet = task_array_dog[i][7];

        counter++;
        if (counter<2) {
        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        pet_link = document.createElement('a');
        pet_link.setAttribute('id', 'task_pet_link');
        pet_link.setAttribute('href', '#');

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_pet_img;
        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        data_name = document.createElement('div');
        data_name.setAttribute('class', 'data_name');

        pet_name = document.createElement('a');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('href', '#');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_pet_name;

        data_type_pet = document.createElement('div');
        data_type_pet.setAttribute('class', 'data_type_pet');

        title_type_pet = document.createElement('span');
        title_type_pet.setAttribute('class', 'title_pet');
        title_type_pet.setAttribute('contenteditable', false);
        title_type_pet.innerHTML = "Type : ";
        type_pet = document.createElement('span');
        type_pet.setAttribute('class', 'data_pet');
        type_pet.setAttribute('contenteditable', false);
        type_pet.innerHTML = task_select_type_pet;

        data_age = document.createElement('div');
        data_age.setAttribute('class', 'data_age');

        title_pet_age = document.createElement('span');
        title_pet_age.setAttribute('class', 'title_pet');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";
        pet_age = document.createElement('span');
        pet_age.setAttribute('class', 'data_pet');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_pet_age;


        data_sex = document.createElement('div');
        data_sex.setAttribute('class', 'data_sex');

        title_select_sex = document.createElement('span');
        title_select_sex.setAttribute('class', 'title_pet');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";
        select_sex = document.createElement('span');
        select_sex.setAttribute('class', 'data_pet');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_select_sex;


        data_title = document.createElement('div');
        data_title.setAttribute('class', 'data_title');

        title_pet_title = document.createElement('span');
        title_pet_title.setAttribute('class', 'title_pet');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";
        pet_title = document.createElement('span');
        pet_title.setAttribute('class', 'data_pet');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_pet_title;


        data_describle = document.createElement('div');
        data_describle.setAttribute('class', 'data_describle');

        title_pet_describe = document.createElement('span');
        title_pet_describe.setAttribute('class', 'title_pet');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";
        pet_describe = document.createElement('span');
        pet_describe.setAttribute('class', 'data_pet');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_pet_describe;



        show_list_pet.append(task_container);

        task_container.append(pet_link);
        pet_link.append(task_img);
        task_img.append(image_view);

        task_container.append(data_name);
        data_name.append(pet_name);

        task_container.append(data_type_pet);
        data_type_pet.append(title_type_pet);
        data_type_pet.append(type_pet);

        task_container.append(data_age);
        data_age.append(title_pet_age);
        data_age.append(pet_age);

        task_container.append(data_sex);
        data_sex.append(title_select_sex);
        data_sex.append(select_sex);

        task_container.append(data_title);
        data_title.append(title_pet_title);
        data_title.append(pet_title);

        task_container.append(data_describle);
        data_describle.append(title_pet_describe);
        data_describle.append(pet_describe);

      }
     }

    });

  /*SHOW LIST PET OF WEEK*/
    firebase.database().ref("Pet/Cat").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_cat.push(Object.values(childData));
      });
       
      var counter=0;
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array_cat.length; i++){
        task_key = task_array_cat[i][0];
        task_pet_age = task_array_cat[i][1];
        task_pet_describe = task_array_cat[i][2];
        task_pet_img = task_array_cat[i][3];
        task_pet_name = task_array_cat[i][4];
        task_pet_title = task_array_cat[i][5];
        task_select_sex = task_array_cat[i][6];
        task_select_type_pet = task_array_cat[i][7];

        counter++;
        if (counter<2) {
        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        pet_link = document.createElement('a');
        pet_link.setAttribute('id', 'task_pet_link');
        pet_link.setAttribute('href', '#');

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_pet_img;
        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        data_name = document.createElement('div');
        data_name.setAttribute('class', 'data_name');

        pet_name = document.createElement('a');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('href', '#');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_pet_name;

        data_type_pet = document.createElement('div');
        data_type_pet.setAttribute('class', 'data_type_pet');

        title_type_pet = document.createElement('span');
        title_type_pet.setAttribute('class', 'title_pet');
        title_type_pet.setAttribute('contenteditable', false);
        title_type_pet.innerHTML = "Type : ";
        type_pet = document.createElement('span');
        type_pet.setAttribute('class', 'data_pet');
        type_pet.setAttribute('contenteditable', false);
        type_pet.innerHTML = task_select_type_pet;

        data_age = document.createElement('div');
        data_age.setAttribute('class', 'data_age');

        title_pet_age = document.createElement('span');
        title_pet_age.setAttribute('class', 'title_pet');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";
        pet_age = document.createElement('span');
        pet_age.setAttribute('class', 'data_pet');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_pet_age;


        data_sex = document.createElement('div');
        data_sex.setAttribute('class', 'data_sex');

        title_select_sex = document.createElement('span');
        title_select_sex.setAttribute('class', 'title_pet');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";
        select_sex = document.createElement('span');
        select_sex.setAttribute('class', 'data_pet');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_select_sex;


        data_title = document.createElement('div');
        data_title.setAttribute('class', 'data_title');

        title_pet_title = document.createElement('span');
        title_pet_title.setAttribute('class', 'title_pet');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";
        pet_title = document.createElement('span');
        pet_title.setAttribute('class', 'data_pet');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_pet_title;


        data_describle = document.createElement('div');
        data_describle.setAttribute('class', 'data_describle');

        title_pet_describe = document.createElement('span');
        title_pet_describe.setAttribute('class', 'title_pet');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";
        pet_describe = document.createElement('span');
        pet_describe.setAttribute('class', 'data_pet');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_pet_describe;



        show_list_pet.append(task_container);

        task_container.append(pet_link);
        pet_link.append(task_img);
        task_img.append(image_view);

        task_container.append(data_name);
        data_name.append(pet_name);

        task_container.append(data_type_pet);
        data_type_pet.append(title_type_pet);
        data_type_pet.append(type_pet);

        task_container.append(data_age);
        data_age.append(title_pet_age);
        data_age.append(pet_age);

        task_container.append(data_sex);
        data_sex.append(title_select_sex);
        data_sex.append(select_sex);

        task_container.append(data_title);
        data_title.append(title_pet_title);
        data_title.append(pet_title);

        task_container.append(data_describle);
        data_describle.append(title_pet_describe);
        data_describle.append(pet_describe);

      }
     }

    });

  /*SHOW LIST PET OF WEEK*/
    firebase.database().ref("Pet/Another").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_another.push(Object.values(childData));
      });
       
      var counter=0;
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array_another.length; i++){
        task_key = task_array_another[i][0];
        task_pet_age = task_array_another[i][1];
        task_pet_describe = task_array_another[i][2];
        task_pet_img = task_array_another[i][3];
        task_pet_name = task_array_another[i][4];
        task_pet_title = task_array_another[i][5];
        task_select_sex = task_array_another[i][6];
        task_select_type_pet = task_array_another[i][7];

        counter++;
        if (counter<2) {
        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        pet_link = document.createElement('a');
        pet_link.setAttribute('id', 'task_pet_link');
        pet_link.setAttribute('href', '#');

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_pet_img;
        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        data_name = document.createElement('div');
        data_name.setAttribute('class', 'data_name');

        pet_name = document.createElement('a');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('href', '#');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_pet_name;

        data_type_pet = document.createElement('div');
        data_type_pet.setAttribute('class', 'data_type_pet');

        title_type_pet = document.createElement('span');
        title_type_pet.setAttribute('class', 'title_pet');
        title_type_pet.setAttribute('contenteditable', false);
        title_type_pet.innerHTML = "Type : ";
        type_pet = document.createElement('span');
        type_pet.setAttribute('class', 'data_pet');
        type_pet.setAttribute('contenteditable', false);
        type_pet.innerHTML = task_select_type_pet;

        data_age = document.createElement('div');
        data_age.setAttribute('class', 'data_age');

        title_pet_age = document.createElement('span');
        title_pet_age.setAttribute('class', 'title_pet');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";
        pet_age = document.createElement('span');
        pet_age.setAttribute('class', 'data_pet');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_pet_age;


        data_sex = document.createElement('div');
        data_sex.setAttribute('class', 'data_sex');

        title_select_sex = document.createElement('span');
        title_select_sex.setAttribute('class', 'title_pet');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";
        select_sex = document.createElement('span');
        select_sex.setAttribute('class', 'data_pet');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_select_sex;


        data_title = document.createElement('div');
        data_title.setAttribute('class', 'data_title');

        title_pet_title = document.createElement('span');
        title_pet_title.setAttribute('class', 'title_pet');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";
        pet_title = document.createElement('span');
        pet_title.setAttribute('class', 'data_pet');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_pet_title;


        data_describle = document.createElement('div');
        data_describle.setAttribute('class', 'data_describle');

        title_pet_describe = document.createElement('span');
        title_pet_describe.setAttribute('class', 'title_pet');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";
        pet_describe = document.createElement('span');
        pet_describe.setAttribute('class', 'data_pet');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_pet_describe;



        show_list_pet.append(task_container);

        task_container.append(pet_link);
        pet_link.append(task_img);
        task_img.append(image_view);

        task_container.append(data_name);
        data_name.append(pet_name);

        task_container.append(data_type_pet);
        data_type_pet.append(title_type_pet);
        data_type_pet.append(type_pet);

        task_container.append(data_age);
        data_age.append(title_pet_age);
        data_age.append(pet_age);

        task_container.append(data_sex);
        data_sex.append(title_select_sex);
        data_sex.append(select_sex);

        task_container.append(data_title);
        data_title.append(title_pet_title);
        data_title.append(pet_title);

        task_container.append(data_describle);
        data_describle.append(title_pet_describe);
        data_describle.append(pet_describe);

      }
     }

    });
    /*End CONTENT 3 -----ListPET*/


    /*CONTENT 4-----------SHOW LIST VIDEO OF WEEk*/
    show_list_video= document.getElementById('content_4_video');
    show_list_video.innerHTML = "";
 
    task_array_video = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong



    firebase.database().ref("Video").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_video.push(Object.values(childData));
      });
       

      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array_video.length; i++){
        task_key = task_array_video[i][0];
        task_video_day = task_array_video[i][1];
        task_video_describe = task_array_video[i][2];
        task_video_name = task_array_video[i][3];
        task_video_title = task_array_video[i][4];
        task_video_url = task_array_video[i][5];


        //tao TASK CONTAINER
        task_container_video = document.createElement("div");
        task_container_video.setAttribute("class", "task_container_video");
        task_container_video.setAttribute("data-key", task_key);

        task_video = document.createElement("div");
        task_video.setAttribute("class", "task_video");

        video_view = document.createElement("video");
        video_view.setAttribute("id", "video_view");
        video_view.setAttribute("controls", "");
        // video_view.setAttribute("autoplay", "");
        video_view.src = task_video_url;


        //tao TITLE DATA


        data_title_video = document.createElement('div');
        data_title_video.setAttribute('class', 'data_title_video');

        video_title = document.createElement('a');
        video_title.setAttribute('id', 'task_video_title');
        video_title.setAttribute('href', '#');
        video_title.setAttribute('contenteditable', false);
        video_title.innerHTML = task_video_title;


        data_day_video = document.createElement('div');
        data_day_video.setAttribute('class', 'data_day_video');

        title_video_day = document.createElement('span');
        title_video_day.setAttribute('class', 'title_video');
        title_video_day.setAttribute('contenteditable', false);
        title_video_day.innerHTML = "Ngày đăng: ";
        video_day = document.createElement('span');
        video_day.setAttribute('class', 'video_day');
        video_day.setAttribute('contenteditable', false);
        video_day.innerHTML = task_video_day;


        data_describle_video = document.createElement('div');
        data_describle_video.setAttribute('class', 'data_describle_video');

        video_describe = document.createElement('span');
        video_describe.setAttribute('class', 'video_describe');
        video_describe.setAttribute('contenteditable', false);
        video_describe.innerHTML = task_video_describe;


        show_list_video.append(task_container_video);

        task_container_video.append(task_video);
        task_video.append(video_view);

        task_container_video.append(data_title_video);
        data_title_video.append(video_title);

        task_container_video.append(data_day_video);
        data_day_video.append(title_video_day);
        data_day_video.append(video_day);

        task_container_video.append(data_describle_video);
        data_describle_video.append(video_describe);
      
      
      }

    });
    /*End CONTENT 4 -----SHOW LIST VIDEO*/


    /*CONTENT 6 -----SHOW LIST NEWS*/
    show_list_news= document.getElementById('content_6_news');
    show_list_news.innerHTML = "";
 
    task_array_news = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("News").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_news.push(Object.values(childData));
      });
       

      for(var i, i = 0; i < task_array_news.length; i++){
        task_key = task_array_news[i][0];
        task_news_day = task_array_news[i][1];
        task_news_describe = task_array_news[i][2];
        task_news_name = task_array_news[i][3];
        task_news_title = task_array_news[i][4];
        task_news_url = task_array_news[i][5];
    

        task_container_news = document.createElement("div");
        task_container_news.setAttribute("class", "task_container_news");
        task_container_news.setAttribute("data-key", task_key);

        task_news = document.createElement("div");
        task_news.setAttribute("class", "task_news");

        news_view = document.createElement("img");
        news_view.setAttribute("id", "news_view");
        news_view.setAttribute("controls", "");
        news_view.src = task_news_url;


        //tao TITLE DATA
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        news_day = document.createElement('span');
        news_day.setAttribute('class', 'news_day');
        news_day.setAttribute('contenteditable', false);
        news_day.innerHTML = task_news_day;

        data_title_news = document.createElement('div');
        data_title_news.setAttribute('class', 'data_title_news');

        news_title = document.createElement('a');
        news_title.setAttribute('id', 'task_news_title');
        news_title.setAttribute('href', '#');
        news_title.setAttribute('contenteditable', false);
        news_title.innerHTML = task_news_title;


        data_describle_news = document.createElement('div');
        data_describle_news.setAttribute('class', 'data_describle_news');

        news_describe = document.createElement('span');
        news_describe.setAttribute('class', 'news_describe');
        news_describe.setAttribute('contenteditable', false);
        news_describe.innerHTML = task_news_describe;


        show_list_news.append(task_container_news);

        task_container_news.append(task_news);
        task_news.append(news_view);

        task_container_news.append(task_data);
        
        task_data.append(news_day);

        task_data.append(data_title_news);
        data_title_news.append(news_title);

        task_data.append(data_describle_news);
        data_describle_news.append(news_describe);

      }

    });
    /*End CONTENT 6 -----SHOW LIST NEWS*/

  }


