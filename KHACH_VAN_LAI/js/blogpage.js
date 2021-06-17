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


function add_comment(task){
    blog_NAME = task.childNodes[0].childNodes[1].innerHTML;
    content_comment = task.childNodes[4].childNodes[0].value;
    check_comment = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
    if (check_comment.test(content_comment)){
        var key_comment = firebase.database().ref().child('Comment/'+blog_NAME).push().key;
                var task_comment = {
                  
                  content_comment: content_comment,
                  key_comment: key_comment,
                  
                };
                var updates = {};
                updates["/Comment/" + blog_NAME +"/"+ content_comment] = task_comment;
                firebase.database().ref().update(updates);
                
                // reset_comment=document.getElementById('content_comment');
                task.childNodes[4].childNodes[0].value="";
  
        show_list_comment= task.childNodes[3].childNodes[1];
        show_list_comment.innerHTML = "";
        task_array_comment = [];

        firebase.database().ref("Comment/"+blog_NAME).once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            task_array_comment.push(Object.values(childData));
          });
            for(var i, i = 0; i < task_array_comment.length; i++){
              task_content_comment = task_array_comment[i][0];
              task_key_comment = task_array_comment[i][1];

              task_list_comment = document.createElement("div");
              task_list_comment.setAttribute("class", "task_list_comment");
              task_list_comment.setAttribute("data-key", task_key_comment);

              comment_data = document.createElement('p');
              comment_data.setAttribute('id', 'task_comment_data');
              comment_data.setAttribute('contenteditable', false);
              comment_data.innerHTML = task_content_comment;

              br = document.createElement('br');
              br.setAttribute('id', 'br1');

              show_list_comment.append(task_list_comment);

              task_list_comment.append(comment_data);
              // task_list_comment.append(br);

            }
        });
    }else{
        alert("Không phù hợp với định dạng!");
    }
    

     

}


function list_comment(task){
    var blog_NAME = task.childNodes[0].childNodes[1].innerHTML;
    var content_comment = task.childNodes[3].childNodes[0].value;
  
    show_list_comment= task.childNodes[3].childNodes[1];
    show_list_comment.innerHTML = "";
    task_array_comment = [];

    firebase.database().ref("Comment/"+blog_NAME).once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_comment.push(Object.values(childData));
      });
        for(var i, i = 0; i < task_array_comment.length; i++){
          task_content_comment = task_array_comment[i][0];
          task_key_comment = task_array_comment[i][1];

          task_list_comment = document.createElement("div");
          task_list_comment.setAttribute("class", "task_list_comment");
          task_list_comment.setAttribute("data-key", task_key_comment);

          comment_data = document.createElement('div');
          comment_data.setAttribute('id', 'task_comment_data');
          comment_data.setAttribute('contenteditable', false);
          comment_data.innerHTML = task_content_comment;

          br = document.createElement('br');
          br.setAttribute('id', 'br1');

          show_list_comment.append(task_list_comment);

          task_list_comment.append(comment_data);
          // task_list_comment.append(br);

        }
    });

}

function blogpage(){
  
    show_list_blog= document.getElementById('content_2_col1');
    show_list_blog.innerHTML = "";
 
    task_array_blog = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Blog").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_blog.push(Object.values(childData));
      });

      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array_blog.length; i++){
        task_blog_day = task_array_blog[i][0];
        task_blog_name = task_array_blog[i][1];
        task_blog_status = task_array_blog[i][2];
        task_blog_url = task_array_blog[i][3];
        task_bloger = task_array_blog[i][4];
        task_key = task_array_blog[i][5];

        //tao TASK CONTAINER
        task_container_blog = document.createElement("div");
        task_container_blog.setAttribute("class", "task_container_blog");
        task_container_blog.setAttribute("data-key", task_key);

        //tao TASK TITLE
        task_title = document.createElement("div");
        task_title.setAttribute("class", "task_title");

        blog_name = document.createElement('p');  
        blog_name.setAttribute('id', 'task_blog_name');
        blog_name.setAttribute('contenteditable', false);
        blog_name.innerHTML = task_blog_name;

        blog_day = document.createElement('span');
        blog_day.setAttribute('id', 'task_blog_day');
        blog_day.setAttribute('contenteditable', false);
        blog_day.innerHTML = task_blog_day;


        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        bloger = document.createElement('p');
        bloger.setAttribute('id', 'task_bloger');
        bloger.setAttribute('contenteditable', false);
        bloger.innerHTML = task_bloger; 

        blog_status = document.createElement('p');
        blog_status.setAttribute('id', 'task_blog_status');
        blog_status.setAttribute('contenteditable', false);
        blog_status.innerHTML = task_blog_status;

        //tao TASK BLOG
        task_blog = document.createElement("div");
        task_blog.setAttribute("class", "task_blog");

        blog_view = document.createElement("img");
        blog_view.setAttribute("id", "blog_view");
        blog_view.setAttribute("controls", "");
        blog_view.src = task_blog_url;

        
        //tao TASK COMMENT
        task_comment = document.createElement('div');
        task_comment.setAttribute('class', 'task_comment');

        content_comment = document.createElement('input');
        content_comment.setAttribute('id', 'content_comment');
        content_comment.setAttribute('placeholder', 'Write your comment...');
        content_comment.setAttribute('type', 'text');

        btn_comment = document.createElement('a');
        btn_comment.setAttribute('id', 'btn_comment');
        btn_comment.setAttribute('onclick', "add_comment(this.parentElement.parentElement)");
        btn_comment.innerHTML = "";

        fa_send = document.createElement('i');
        fa_send.setAttribute('class', 'fas fa-location-arrow');



        task_data_comment = document.createElement('div');
        task_data_comment.setAttribute('class', 'task_data_comment');

        load_comment = document.createElement('a');
        load_comment.setAttribute('id', 'load_comment');
        load_comment.setAttribute('onclick', "list_comment(this.parentElement.parentElement)");
        load_comment.innerHTML = "Show more comment....";

        data_comment = document.createElement('div');
        data_comment.setAttribute('id', 'data_comment');


        show_list_blog.append(task_container_blog);

        task_container_blog.append(task_title);
        task_title.append(blog_day);
        task_title.append(blog_name);

        task_container_blog.append(task_data);
        task_data.append(bloger);
        task_data.append(blog_status);

        task_container_blog.append(task_blog);
        task_blog.append(blog_view);

        task_container_blog.append(task_data_comment);
        task_data_comment.append(load_comment);
        task_data_comment.append(data_comment);

        task_container_blog.append(task_comment);
        task_comment.append(content_comment);
        task_comment.append(btn_comment);
        btn_comment.append(fa_send);

      }
      // x= task.childNodes[2].childNodes[0];
      // alert(x);
    });
    


    show_list_pet= document.getElementById('content_4_pet');
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
}