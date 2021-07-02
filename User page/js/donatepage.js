  // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB_nXPpt7SqzlnNJ_289w7rHVBeVhQkoQw",
    authDomain: "newdb-ad263.firebaseapp.com",
    databaseURL: "https://newdb-ad263-default-rtdb.firebaseio.com",
    projectId: "newdb-ad263",
    storageBucket: "newdb-ad263.appspot.com",
    messagingSenderId: "924077641130",
    appId: "1:924077641130:web:1132a9be9c4147cf85efd3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

/*CONTENT 3----ListPET*/
function donatepage(){
    
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
  }
/*End CONTENT 3 -----ListPET*/
function form_ungho(){
        document.getElementById('box_ungho').style.display ="block";
}
function close_form_ungho(){
        document.getElementById('box_ungho').style.display ="none";
}
function add_donater(){

        var name_donate = document.getElementById('name_donate').value;
        var email_donate = document.getElementById('email_donate').value;
        var money_donate = document.getElementById('money_donate').value;
        var address_donate = document.getElementById('address_donate').value;
        var content_donate = document.getElementById('content_donate').value;
        var day_donate = document.getElementById('day_donate').value;
        check_name = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
        check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        // check_money = /^[0-9]+$/;
        check_address = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
        check_content = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;

        if(name_donate.length != 0 && day_donate.length != 0 && email_donate.length != 0 && money_donate.length != 0 && address_donate.length != 0 && content_donate.length != 0){
            if (check_name.test(name_donate)&&check_email.test(email_donate)&&check_address.test(address_donate)&&check_content.test(content_donate)) { // true nếu text chỉ chứa ký tự alphabet thường hoặc hoa, false trong trường hợp còn lại. 

              // our boxes have data and we take database
                
                    var key = firebase.database().ref().child('Statistical_Donate').push().key;
                    var task = {
                      
                      name_donate: name_donate,
                      day_donate: day_donate,
                      email_donate: email_donate,
                      money_donate: money_donate,
                      content_donate: content_donate,
                      address_donate: address_donate,
                      key: key,
                    };

                    var updates = {};
                    updates["/Statistical_Donate/" + name_donate ] = task;
                    firebase.database().ref().update(updates);
                    alert("Bạn đã Ủng Hộ thành công!")
                    document.getElementById("box_ungho").style.display = 'none';
               
            }else {
                      alert("Không phù hợp với định dạng!");
                    } 
        }else{
            alert("Vui lòng không để trống bất kỳ mục nào!");
        }

    
  }
