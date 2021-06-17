/*------------------------------------------------------------------------*/  
/*PET*/
function close_add_pet_form(){
      document.getElementById("box-add-pet").style.display = 'none';

}

function chooseFile(e){
  file = e.target.files[0];
}

function add_pet(){
    

    var pet_name = document.getElementById('pet_name').value;
    var select_type_pet = document.getElementById('select_type_pet').value;
    var pet_age = document.getElementById('pet_age').value;
    var select_sex = document.getElementById('select_sex').value;
    var pet_title = document.getElementById('pet_title').value;
    var pet_describe = document.getElementById('pet_describe').value;
    var image_view = document.getElementById('image_view');
    check_pet_name = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
    check_pet_title = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
    check_pet_describe = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
      

      if(pet_name.length != 0 && select_type_pet.length != 0 && pet_age.length != 0 && select_sex.length != 0 && pet_title.length != 0 && pet_describe.length != 0){
        if (check_pet_name.test(pet_name)&&check_pet_title.test(pet_title)&&check_pet_describe.test(pet_describe)) { // true nếu text chỉ chứa ký tự alphabet thường hoặc hoa, false trong trường hợp còn lại. 
  
          // our boxes have data and we take database
          if (document.getElementById("check_pet").checked==true) {
            
              var uploadTask = firebase.storage().ref("/Pet/"+pet_name+".jpg").put(file);
              uploadTask.snapshot.ref.getDownloadURL().then((URL_img) => {
              pet_img = URL_img;
                var key = firebase.database().ref().child('Pet').push().key;
                var task = {
                  
                  pet_name: pet_name,
                  select_type_pet: select_type_pet,
                  pet_age: pet_age,
                  select_sex: select_sex,
                  pet_title: pet_title,
                  pet_describe: pet_describe,
                  pet_img: pet_img,
                  key: key,
                };

                var updates = {};
                updates["/Pet/" +select_type_pet+"/"+ pet_name] = task;
                firebase.database().ref().update(updates);
                
                alert("Add Pet complete!")
                document.getElementById("box-add-pet").style.display = 'none';
                count_user_and_pet();
                list_pet();
              });
            
           }else {
                  alert("Vui lòng không để trống bất kỳ mục nào!");
                  } 
          }else{
               alert("Không phù hợp với định dạng!");
          }
        }else {
                 alert("Vui lòng không để trống bất kỳ mục nào!");
                } 
    
  }


function add_pet_form(){

    document.getElementById("box-add-pet").style.display = 'block';
    
}

function get_pet(){

  show_list_pet_find= document.getElementById('charts');
  show_list_pet_find.innerHTML = "";

  var name_pet_find= document.getElementById("name_pet_find").value;
  var select_type_pet_find= document.getElementById("select_type_pet_find").value;
  if (select_type_pet_find=="All") {
    document.getElementById("name_pet_find").value="";
    list_pet();
  }
  else{
    if (name_pet_find!="") {
    firebase.database().ref('Pet/'+select_type_pet_find+"/"+name_pet_find).once('value').then(function(snapshort){


      var task_name_pet_find= snapshort.val().pet_name;
      var task_type_pet_find = snapshort.val().select_type_pet;
      var task_age_pet_find= snapshort.val().pet_age;
      var task_sex_pet_find = snapshort.val().select_sex;
      var task_title_pet_find = snapshort.val().pet_title;
      var task_describe_pet_find= snapshort.val().pet_describe;
      var task_img_pet_find= snapshort.val().pet_img;

      
//tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_img_pet_find;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_name = document.createElement('p');
        title_pet_name.setAttribute('id', 'task_title_pet_name');
        title_pet_name.setAttribute('contenteditable', false);
        title_pet_name.innerHTML = "Pet Name : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_type_pet');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Type Pet : ";

        title_pet_age = document.createElement('p');
        title_pet_age.setAttribute('id', 'task_title_pet_age');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_sex');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";

        title_pet_title = document.createElement('p');
        title_pet_title.setAttribute('id', 'task_title_pet_title');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";

        title_pet_describe = document.createElement('p');
        title_pet_describe.setAttribute('id', 'task_title_pet_describe');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        

        pet_name = document.createElement('p');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_name_pet_find;

        select_type_pet = document.createElement('p');
        select_type_pet.setAttribute('id', 'task_select_type_pet');
        select_type_pet.setAttribute('contenteditable', false);
        select_type_pet.innerHTML = task_type_pet_find;

        pet_age = document.createElement('p');
        pet_age.setAttribute('id', 'task_pet_age');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_age_pet_find; 

        select_sex = document.createElement('p');
        select_sex.setAttribute('id', 'task_select_sex');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_sex_pet_find;

        pet_title = document.createElement('p');
        pet_title.setAttribute('id', 'task_pet_title');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_title_pet_find;

        pet_describe = document.createElement('p');
        pet_describe.setAttribute('id', 'task_pet_describe');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_describe_pet_find;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_pet_button = document.createElement('button');
        task_done_pet_button.setAttribute('id', 'task_done_pet_button');
        task_done_pet_button.setAttribute('class', 'task_done_button');
        task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_pet_button = document.createElement('button');
        task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
        task_edit_pet_button.setAttribute('class', 'task_edit_button');
        task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_pet_button = document.createElement('button');
        task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
        task_delete_pet_button.setAttribute('class', 'task_delete_button');
        task_delete_pet_button.setAttribute('onclick', "task_delete_pet(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_pet_find.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_name);
        title_data.append(title_select_type_pet);
        title_data.append(title_pet_age);
        title_data.append(title_select_sex);
        title_data.append(title_pet_title);
        title_data.append(title_pet_describe);


        task_container.append(task_data);
        task_data.append(pet_name);
        task_data.append(select_type_pet);
        task_data.append(pet_age);
        task_data.append(select_sex);
        task_data.append(pet_title);
        task_data.append(pet_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_pet_button);
        task_done_pet_button.append(fa_done);
        task_tool.append(task_edit_pet_button);
        task_edit_pet_button.append(fa_edit);
        task_tool.append(task_delete_pet_button);
        task_delete_pet_button.append(fa_delete);
      

    })
   };

   if (name_pet_find==""){

    task_array_pet = [];

    firebase.database().ref("Pet/"+select_type_pet_find).once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_pet.push(Object.values(childData));
      });
       
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array_pet.length; i++){
        task_key = task_array_pet[i][0];
        task_pet_age = task_array_pet[i][1];
        task_pet_describe = task_array_pet[i][2];
        task_pet_img = task_array_pet[i][3];
        task_pet_name = task_array_pet[i][4];
        task_pet_title = task_array_pet[i][5];
        task_select_sex = task_array_pet[i][6];
        task_select_type_pet = task_array_pet[i][7];


        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_pet_img;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_name = document.createElement('p');
        title_pet_name.setAttribute('id', 'task_title_pet_name');
        title_pet_name.setAttribute('contenteditable', false);
        title_pet_name.innerHTML = "Pet Name : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_type_pet');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Type Pet : ";

        title_pet_age = document.createElement('p');
        title_pet_age.setAttribute('id', 'task_title_pet_age');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_sex');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";

        title_pet_title = document.createElement('p');
        title_pet_title.setAttribute('id', 'task_title_pet_title');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";

        title_pet_describe = document.createElement('p');
        title_pet_describe.setAttribute('id', 'task_title_pet_describe');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        

        pet_name = document.createElement('p');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_pet_name;

        select_type_pet = document.createElement('p');
        select_type_pet.setAttribute('id', 'task_select_type_pet');
        select_type_pet.setAttribute('contenteditable', false);
        select_type_pet.innerHTML = task_select_type_pet;

        pet_age = document.createElement('p');
        pet_age.setAttribute('id', 'task_pet_age');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_pet_age; 

        select_sex = document.createElement('p');
        select_sex.setAttribute('id', 'task_select_sex');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_select_sex;

        pet_title = document.createElement('p');
        pet_title.setAttribute('id', 'task_pet_title');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_pet_title;

        pet_describe = document.createElement('p');
        pet_describe.setAttribute('id', 'task_pet_describe');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_pet_describe;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_pet_button = document.createElement('button');
        task_done_pet_button.setAttribute('id', 'task_done_pet_button');
        task_done_pet_button.setAttribute('class', 'task_done_button');
        task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_pet_button = document.createElement('button');
        task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
        task_edit_pet_button.setAttribute('class', 'task_edit_button');
        task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_pet_button = document.createElement('button');
        task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
        task_delete_pet_button.setAttribute('class', 'task_delete_button');
        task_delete_pet_button.setAttribute('onclick', "task_delete_pet(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_pet_find.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_name);
        title_data.append(title_select_type_pet);
        title_data.append(title_pet_age);
        title_data.append(title_select_sex);
        title_data.append(title_pet_title);
        title_data.append(title_pet_describe);


        task_container.append(task_data);
        task_data.append(pet_name);
        task_data.append(select_type_pet);
        task_data.append(pet_age);
        task_data.append(select_sex);
        task_data.append(pet_title);
        task_data.append(pet_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_pet_button);
        task_done_pet_button.append(fa_done);
        task_tool.append(task_edit_pet_button);
        task_edit_pet_button.append(fa_edit);
        task_tool.append(task_delete_pet_button);
        task_delete_pet_button.append(fa_delete);
      

      }
     

    });
   };
  
  } 

}

function list_pet(){
    
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="none") {
        document.getElementById("btn_add_user").style.display='none';
        document.getElementById("box-add-user").style.display='none';
        document.getElementById("box-find-user").style.display='none';
        };
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="none") {
      document.getElementById("btn_add_donate").style.display='none';
      document.getElementById("box-add-donate").style.display='none';
      document.getElementById("box-find-donate").style.display='none';
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="block") {
      document.getElementById("btn_add_pet").style.display='block';
      document.getElementById("box-find-pet").style.display='block';
      
      };
    var j= document.getElementById("btn_add_video").style.display;
    if (j!="none") {
      document.getElementById("btn_add_video").style.display='none';
      document.getElementById("box-add-video").style.display='none';
      document.getElementById("box-find-video").style.display='none';
      };
    var k= document.getElementById("btn_add_news").style.display;
    if (k!="none") {
      document.getElementById("btn_add_news").style.display='none';
      document.getElementById("box-add-news").style.display='none';
      document.getElementById("box-find-news").style.display='none';
      };
    var l= document.getElementById("btn_add_blog").style.display;
    if (l!="none") {
      document.getElementById("btn_add_blog").style.display='none';
      document.getElementById("box-add-blog").style.display='none';
      document.getElementById("box-find-blog").style.display='none';
      };
    var m= document.getElementById("box-find-request_adoption").style.display;
    if (m!="none") {
      document.getElementById("box-find-request_adoption").style.display='none';
      
      };
    

  
    show_list_pet= document.getElementById('charts');
    show_list_pet.innerHTML = "";
 
    task_array_dog = [];
    task_array_cat = [];
    task_array_another = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Pet/Dog").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_dog.push(Object.values(childData));
      });
       
      
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

        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_pet_img;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_name = document.createElement('p');
        title_pet_name.setAttribute('id', 'task_title_pet_name');
        title_pet_name.setAttribute('contenteditable', false);
        title_pet_name.innerHTML = "Pet Name : ";

        title_select_type_pet = document.createElement('p');
        title_select_type_pet.setAttribute('id', 'title_select_type_pet');
        title_select_type_pet.setAttribute('contenteditable', false);
        title_select_type_pet.innerHTML = "Type Pet : ";

        title_pet_age = document.createElement('p');
        title_pet_age.setAttribute('id', 'task_title_pet_age');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_sex');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";

        title_pet_title = document.createElement('p');
        title_pet_title.setAttribute('id', 'task_title_pet_title');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";

        title_pet_describe = document.createElement('p');
        title_pet_describe.setAttribute('id', 'task_title_pet_describe');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        

        pet_name = document.createElement('p');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_pet_name;

        select_type_pet = document.createElement('p');
        select_type_pet.setAttribute('id', 'task_select_type_pet');
        select_type_pet.setAttribute('contenteditable', false);
        select_type_pet.innerHTML = task_select_type_pet;

        pet_age = document.createElement('p');
        pet_age.setAttribute('id', 'task_pet_age');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_pet_age; 

        select_sex = document.createElement('p');
        select_sex.setAttribute('id', 'task_select_sex');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_select_sex;

        pet_title = document.createElement('p');
        pet_title.setAttribute('id', 'task_pet_title');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_pet_title;

        pet_describe = document.createElement('p');
        pet_describe.setAttribute('id', 'task_pet_describe');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_pet_describe;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_pet_button = document.createElement('button');
        task_done_pet_button.setAttribute('id', 'task_done_pet_button');
        task_done_pet_button.setAttribute('class', 'task_done_button');
        task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_pet_button = document.createElement('button');
        task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
        task_edit_pet_button.setAttribute('class', 'task_edit_button');
        task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_pet_button = document.createElement('button');
        task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
        task_delete_pet_button.setAttribute('class', 'task_delete_button');
        task_delete_pet_button.setAttribute('onclick', "task_delete_pett(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_pet.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_name);
        title_data.append(title_select_type_pet);
        title_data.append(title_pet_age);
        title_data.append(title_select_sex);
        title_data.append(title_pet_title);
        title_data.append(title_pet_describe);


        task_container.append(task_data);
        task_data.append(pet_name);
        task_data.append(select_type_pet);
        task_data.append(pet_age);
        task_data.append(select_sex);
        task_data.append(pet_title);
        task_data.append(pet_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_pet_button);
        task_done_pet_button.append(fa_done);
        task_tool.append(task_edit_pet_button);
        task_edit_pet_button.append(fa_edit);
        task_tool.append(task_delete_pet_button);
        task_delete_pet_button.append(fa_delete);
      

      }

    });
  firebase.database().ref("Pet/Cat").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_cat.push(Object.values(childData));
      });
       
      
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

        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_pet_img;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_name = document.createElement('p');
        title_pet_name.setAttribute('id', 'task_title_pet_name');
        title_pet_name.setAttribute('contenteditable', false);
        title_pet_name.innerHTML = "Pet Name : ";

        title_select_type_pet = document.createElement('p');
        title_select_type_pet.setAttribute('id', 'title_select_type_pet');
        title_select_type_pet.setAttribute('contenteditable', false);
        title_select_type_pet.innerHTML = "Type Pet : ";

        title_pet_age = document.createElement('p');
        title_pet_age.setAttribute('id', 'task_title_pet_age');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_sex');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";

        title_pet_title = document.createElement('p');
        title_pet_title.setAttribute('id', 'task_title_pet_title');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";

        title_pet_describe = document.createElement('p');
        title_pet_describe.setAttribute('id', 'task_title_pet_describe');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        

        pet_name = document.createElement('p');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_pet_name;

        select_type_pet = document.createElement('p');
        select_type_pet.setAttribute('id', 'task_select_type_pet');
        select_type_pet.setAttribute('contenteditable', false);
        select_type_pet.innerHTML = task_select_type_pet;

        pet_age = document.createElement('p');
        pet_age.setAttribute('id', 'task_pet_age');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_pet_age; 

        select_sex = document.createElement('p');
        select_sex.setAttribute('id', 'task_select_sex');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_select_sex;

        pet_title = document.createElement('p');
        pet_title.setAttribute('id', 'task_pet_title');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_pet_title;

        pet_describe = document.createElement('p');
        pet_describe.setAttribute('id', 'task_pet_describe');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_pet_describe;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_pet_button = document.createElement('button');
        task_done_pet_button.setAttribute('id', 'task_done_pet_button');
        task_done_pet_button.setAttribute('class', 'task_done_button');
        task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_pet_button = document.createElement('button');
        task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
        task_edit_pet_button.setAttribute('class', 'task_edit_button');
        task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_pet_button = document.createElement('button');
        task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
        task_delete_pet_button.setAttribute('class', 'task_delete_button');
        task_delete_pet_button.setAttribute('onclick', "task_delete_pett(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_pet.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_name);
        title_data.append(title_select_type_pet);
        title_data.append(title_pet_age);
        title_data.append(title_select_sex);
        title_data.append(title_pet_title);
        title_data.append(title_pet_describe);


        task_container.append(task_data);
        task_data.append(pet_name);
        task_data.append(select_type_pet);
        task_data.append(pet_age);
        task_data.append(select_sex);
        task_data.append(pet_title);
        task_data.append(pet_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_pet_button);
        task_done_pet_button.append(fa_done);
        task_tool.append(task_edit_pet_button);
        task_edit_pet_button.append(fa_edit);
        task_tool.append(task_delete_pet_button);
        task_delete_pet_button.append(fa_delete);
      

      }

    });
  
  firebase.database().ref("Pet/Another").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_another.push(Object.values(childData));
      });
       
      
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

        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_pet_img;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_name = document.createElement('p');
        title_pet_name.setAttribute('id', 'task_title_pet_name');
        title_pet_name.setAttribute('contenteditable', false);
        title_pet_name.innerHTML = "Pet Name : ";

        title_select_type_pet = document.createElement('p');
        title_select_type_pet.setAttribute('id', 'title_select_type_pet');
        title_select_type_pet.setAttribute('contenteditable', false);
        title_select_type_pet.innerHTML = "Type Pet : ";

        title_pet_age = document.createElement('p');
        title_pet_age.setAttribute('id', 'task_title_pet_age');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_sex');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";

        title_pet_title = document.createElement('p');
        title_pet_title.setAttribute('id', 'task_title_pet_title');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";

        title_pet_describe = document.createElement('p');
        title_pet_describe.setAttribute('id', 'task_title_pet_describe');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        

        pet_name = document.createElement('p');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_pet_name;

        select_type_pet = document.createElement('p');
        select_type_pet.setAttribute('id', 'task_select_type_pet');
        select_type_pet.setAttribute('contenteditable', false);
        select_type_pet.innerHTML = task_select_type_pet;

        pet_age = document.createElement('p');
        pet_age.setAttribute('id', 'task_pet_age');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_pet_age; 

        select_sex = document.createElement('p');
        select_sex.setAttribute('id', 'task_select_sex');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_select_sex;

        pet_title = document.createElement('p');
        pet_title.setAttribute('id', 'task_pet_title');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_pet_title;

        pet_describe = document.createElement('p');
        pet_describe.setAttribute('id', 'task_pet_describe');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_pet_describe;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_pet_button = document.createElement('button');
        task_done_pet_button.setAttribute('id', 'task_done_pet_button');
        task_done_pet_button.setAttribute('class', 'task_done_button');
        task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_pet_button = document.createElement('button');
        task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
        task_edit_pet_button.setAttribute('class', 'task_edit_button');
        task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_pet_button = document.createElement('button');
        task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
        task_delete_pet_button.setAttribute('class', 'task_delete_button');
        task_delete_pet_button.setAttribute('onclick', "task_delete_pett(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_pet.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_name);
        title_data.append(title_select_type_pet);
        title_data.append(title_pet_age);
        title_data.append(title_select_sex);
        title_data.append(title_pet_title);
        title_data.append(title_pet_describe);


        task_container.append(task_data);
        task_data.append(pet_name);
        task_data.append(select_type_pet);
        task_data.append(pet_age);
        task_data.append(select_sex);
        task_data.append(pet_title);
        task_data.append(pet_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_pet_button);
        task_done_pet_button.append(fa_done);
        task_tool.append(task_edit_pet_button);
        task_edit_pet_button.append(fa_edit);
        task_tool.append(task_delete_pet_button);
        task_delete_pet_button.append(fa_delete);
      

      }

    });
  }
/*------------------------------------------------------------------------*/  
  // button edit, button delete FOR DONATE
  

  function task_edit_pet(task, edit_button_pet){
    

    pet_name = task.childNodes[2].childNodes[0];
    pet_name.setAttribute("contenteditable", false);
    pet_name.setAttribute("class", "task_data_editing");
    pet_name.setAttribute("id", "task_pet_name");

    select_type_pet = task.childNodes[2].childNodes[1];
    select_type_pet.setAttribute("contenteditable", false);
    select_type_pet.setAttribute("class", "task_data_editing");
    select_type_pet.setAttribute("id", "task_select_type_pet");

    pet_age = task.childNodes[2].childNodes[2];
    pet_age.setAttribute("contenteditable", true);
    pet_age.setAttribute("class", "task_data_editing");
    pet_age.setAttribute("id", "task_pet_age");

    select_sex = task.childNodes[2].childNodes[3];
    select_sex.setAttribute("contenteditable", false);
    select_sex.setAttribute("class", "task_data_editing");
    select_sex.setAttribute("id", "task_select_sex");

    pet_title = task.childNodes[2].childNodes[4];
    pet_title.setAttribute("contenteditable", true);
    pet_title.setAttribute("class", "task_data_editing");
    pet_title.setAttribute("id", "task_pet_title");

    pet_describe = task.childNodes[2].childNodes[5];
    pet_describe.setAttribute("contenteditable", true);
    pet_describe.setAttribute("class", "task_data_editing");
    pet_describe.setAttribute("id", "task_pet_describe");
  }

  function task_done_pet(task, edit_button_pet){
    

    pet_name = task.childNodes[2].childNodes[0];
    pet_name.setAttribute("contenteditable", false);
    pet_name.setAttribute("class", "task_data_done");
    pet_name.setAttribute("id", "task_pet_name");
    
    select_type_pet = task.childNodes[2].childNodes[1];
    select_type_pet.setAttribute("contenteditable", false);
    select_type_pet.setAttribute("class", "task_data_done");
    select_type_pet.setAttribute("id", "task_select_type_pet");

    pet_age = task.childNodes[2].childNodes[2];
    pet_age.setAttribute("contenteditable", false);
    pet_age.setAttribute("class", "task_data_done");
    pet_age.setAttribute("id", "task_pet_age");


    select_sex = task.childNodes[2].childNodes[3];
    select_sex.setAttribute("contenteditable", false);
    select_sex.setAttribute("class", "task_data_done");
    select_sex.setAttribute("id", "task_select_sex");

    pet_title = task.childNodes[2].childNodes[4];
    pet_title.setAttribute("contenteditable", false);
    pet_title.setAttribute("class", "task_data_done");
    pet_title.setAttribute("id", "task_pet_title");

    pet_describe = task.childNodes[2].childNodes[5];
    pet_describe.setAttribute("contenteditable", false);
    pet_describe.setAttribute("class", "task_data_done");
    pet_describe.setAttribute("id", "task_pet_describe");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var pet_img = task.childNodes[0].childNodes[0].src;
    var pet_name = task.childNodes[2].childNodes[0].innerHTML;
    var select_type_pet = task.childNodes[2].childNodes[1].innerHTML;
    var pet_age= task.childNodes[2].childNodes[2].innerHTML;
    var select_sex = task.childNodes[2].childNodes[3].innerHTML;
    var pet_title = task.childNodes[2].childNodes[4].innerHTML;
    var pet_describe = task.childNodes[2].childNodes[5].innerHTML;
    check_pet_name = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
    check_pet_title = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
    check_pet_describe = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
      

    if (check_pet_name.test(pet_name)&&check_pet_title.test(pet_title)&&check_pet_describe.test(pet_describe)) { // true nếu text chỉ chứa ký tự alphabet thường hoặc hoa, false trong trường hợp còn lại. 
  
        var task_obj = {
          
          pet_name: pet_name,
          select_type_pet: select_type_pet,
          pet_age: pet_age,
          select_sex: select_sex,
          pet_title: pet_title,
          pet_describe: pet_describe,
          pet_img: pet_img,
           key: key,
        };
        
        var updates = {};
        updates["/Pet/"+select_type_pet+"/"+ pet_name] = task_obj;
        firebase.database().ref().update(updates);
    }else{
        alert("Không phù hợp với định dạng!");
    }
  }

  

  function task_delete_pett(task){
    key = task.getAttribute("data-key");
    
    var pet_name = task.childNodes[2].childNodes[0].innerHTML;
    var select_type_pet = task.childNodes[2].childNodes[1].innerHTML;

    task_to_remove = firebase.database().ref( "/Pet/"+select_type_pet+"/"+ pet_name);
    task_to_remove.remove();

    // remove from html view or whatevesss
    task.remove();
    count_user_and_pet();

  }

/*------------------------------------------------------------------------*/  
