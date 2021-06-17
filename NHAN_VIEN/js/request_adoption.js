function list_request_adoption(){
    
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="none") {
        document.getElementById("btn_add_user").style.display='none';
        document.getElementById("box-add-user").style.display='none';
        document.getElementById("box-find-user").style.display='none';
        };
    var m= document.getElementById("box-find-request_adoption").style.display;
    if (m!="block") {
      document.getElementById("box-find-request_adoption").style.display='block';
      
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="none") {
      document.getElementById("btn_add_pet").style.display='none';
      document.getElementById("box-add-pet").style.display='none';
      document.getElementById("box-find-pet").style.display='none';
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
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="none") {
      document.getElementById("btn_add_donate").style.display='none';
      document.getElementById("box-add-donate").style.display='none';
      document.getElementById("box-find-donate").style.display='none';
      };


    show_list_request_adoption= document.getElementById('charts');
    show_list_request_adoption.innerHTML = "";

    
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
                firebase.database().ref("Request_Adoption").once('value', function(snapshot) {
                  snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    task_array.push(Object.values(childData));
                  });

                        for(var i, i = 0; i < task_array.length; i++){
                            task_address_adopter = task_array[i][0];
                            task_email_adopter = task_array[i][1];
                            task_key = task_array[i][2];
                            task_name_adopter = task_array[i][3];
                            task_pet_adopt = task_array[i][4];
                            task_phone_adopter = task_array[i][5];


                                  //tao TASK CONTAINER
                                task_container = document.createElement("div");
                                task_container.setAttribute("class", "task_container");
                                task_container.setAttribute("data-key", task_key);

                                task_img = document.createElement("div");
                                task_img.setAttribute("class", "task_img");

                                image_view = document.createElement('img');
                                image_view.setAttribute('id', 'image_view');
                                image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

                                //tao TITLE DATA
                                title_data = document.createElement("div");
                                title_data.setAttribute("class", "title_data");

                                title_pet_adopt = document.createElement('p');
                                title_pet_adopt.setAttribute('id', 'title_pet_adopt');
                                title_pet_adopt.setAttribute('contenteditable', false);
                                title_pet_adopt.innerHTML = "Name Pet : ";

                                title_name_adopter = document.createElement('p');
                                title_name_adopter.setAttribute('id', 'title_name_adopter');
                                title_name_adopter.setAttribute('contenteditable', false);
                                title_name_adopter.innerHTML = "Adopter: ";

                                title_email_adopter = document.createElement('p');
                                title_email_adopter.setAttribute('id', 'title_email_adopter');
                                title_email_adopter.setAttribute('contenteditable', false);
                                title_email_adopter.innerHTML = "Email : ";

                                title_phone_adopter = document.createElement('p');
                                title_phone_adopter.setAttribute('id', 'title_phone_adopter');
                                title_phone_adopter.setAttribute('contenteditable', false);
                                title_phone_adopter.innerHTML = "Phone : ";

                                title_address_adopter = document.createElement('p');
                                title_address_adopter.setAttribute('id', 'title_address_adopter');
                                title_address_adopter.setAttribute('contenteditable', false);
                                title_address_adopter.innerHTML = "Address : ";


                                //tạo TASK DATA 
                                task_data = document.createElement('div');
                                task_data.setAttribute('class', 'task_data');

                                pet_adopt = document.createElement('p');
                                pet_adopt.setAttribute('id', 'pet_adopt');
                                pet_adopt.setAttribute('contenteditable', false);
                                pet_adopt.innerHTML = task_pet_adopt;

                                name_adopter = document.createElement('p');
                                name_adopter.setAttribute('id', 'name_adopter');
                                name_adopter.setAttribute('contenteditable', false);
                                name_adopter.innerHTML = task_name_adopter;

                                email_adopter = document.createElement('p');
                                email_adopter.setAttribute('id', 'email_adopter');
                                email_adopter.setAttribute('contenteditable', false);
                                email_adopter.innerHTML = task_email_adopter;

                                phone_adopter = document.createElement('p');
                                phone_adopter.setAttribute('id', 'phone_adopter');
                                phone_adopter.setAttribute('contenteditable', false);
                                phone_adopter.innerHTML = task_phone_adopter;

                                address_adopter = document.createElement('p');
                                address_adopter.setAttribute('id', 'address_adopter');
                                address_adopter.setAttribute('contenteditable', false);
                                address_adopter.innerHTML = task_address_adopter; 
                                
                                //tạo TASK TOOLS
                                
                                task_tool= document.createElement('div');
                                task_tool.setAttribute('class', 'task_tool');

                                task_done_request_adoption_button = document.createElement('button');
                                task_done_request_adoption_button.setAttribute('id', 'task_done_request_adoption_button');
                                task_done_request_adoption_button.setAttribute('class', 'task_done_button');
                                task_done_request_adoption_button.setAttribute('onclick', "task_done_request_adoption(this.parentElement.parentElement, this)");
                                fa_done = document.createElement('i');
                                fa_done.setAttribute('class', 'fa fa-check');


                                task_edit_request_adoption_button = document.createElement('button');
                                task_edit_request_adoption_button.setAttribute('id', 'task_edit_request_adoption_button');
                                task_edit_request_adoption_button.setAttribute('class', 'task_edit_button');
                                task_edit_request_adoption_button.setAttribute('onclick', "task_edit_request_adoption(this.parentElement.parentElement, this)");
                                fa_edit = document.createElement('i');
                                fa_edit.setAttribute('class', 'fa fa-pencil-alt');

                                task_delete_request_adoption_button = document.createElement('button');
                                task_delete_request_adoption_button.setAttribute('id', 'task_delete_request_adoption_button');
                                task_delete_request_adoption_button.setAttribute('class', 'task_delete_button');
                                task_delete_request_adoption_button.setAttribute('onclick', "task_delete_request_adoption(this.parentElement.parentElement)");
                                fa_delete = document.createElement('i');
                                fa_delete.setAttribute('class', 'fa fa-trash');

                                show_list_request_adoption.append(task_container);

                                task_container.append(task_img);
                                task_img.append(image_view);

                                task_container.append(title_data);
                                title_data.append(title_pet_adopt);
                                title_data.append(title_name_adopter);
                                title_data.append(title_email_adopter);
                                title_data.append(title_phone_adopter);
                                title_data.append(title_address_adopter);
                                

                                task_container.append(task_data);
                                task_data.append(pet_adopt);
                                task_data.append(name_adopter);
                                task_data.append(email_adopter);
                                task_data.append(phone_adopter);
                                task_data.append(address_adopter);
                                

                                task_container.append(task_tool);
                                task_tool.append(task_done_request_adoption_button);
                                task_done_request_adoption_button.append(fa_done);
                                task_tool.append(task_edit_request_adoption_button);
                                task_edit_request_adoption_button.append(fa_edit);
                                task_tool.append(task_delete_request_adoption_button);
                                task_delete_request_adoption_button.append(fa_delete);
                        }
           
        });

  }
/*------------------------------------------------------------------------*/  
  // button edit, button delete FOR DONATE
  function get_request_adoption(){

  show_list_request_adoption_find= document.getElementById('charts');
  show_list_request_adoption_find.innerHTML = "";

  var name_request_adoption_find= document.getElementById("name_request_adoption_find").value;
  alert(name_request_adoption_find);
  if (name_request_adoption_find!="") {
    firebase.database().ref('Request_Adoption/'+ name_request_adoption_find).once('value').then(function(snapshort){

    var task_pet_adopt_find = snapshort.val().pet_adopt;
      var task_name_adopter_find= snapshort.val().name_adopter;
      var task_email_adopter_find = snapshort.val().email_adopter;
      var task_phone_adopter_find= snapshort.val().phone_adopter;
      var task_address_adopter_find = snapshort.val().address_adopter;

     
  //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_adopt_find = document.createElement('p');
        title_pet_adopt_find.setAttribute('id', 'title_pet_adopt_find');
        title_pet_adopt_find.setAttribute('contenteditable', false);
        title_pet_adopt_find.innerHTML = "Name Pet : ";

        title_name_adopter_find = document.createElement('p');
        title_name_adopter_find.setAttribute('id', 'title_name_adopter_find');
        title_name_adopter_find.setAttribute('contenteditable', false);
        title_name_adopter_find.innerHTML = "Adopter: ";

        title_email_adopter_find = document.createElement('p');
        title_email_adopter_find.setAttribute('id', 'title_email_adopter_find');
        title_email_adopter_find.setAttribute('contenteditable', false);
        title_email_adopter_find.innerHTML = "Email : ";

        title_phone_adopter_find = document.createElement('p');
        title_phone_adopter_find.setAttribute('id', 'title_phone_adopter_find');
        title_phone_adopter_find.setAttribute('contenteditable', false);
        title_phone_adopter_find.innerHTML = "Phone : ";

        title_address_adopter_find = document.createElement('p');
        title_address_adopter_find.setAttribute('id', 'title_address_adopter_find');
        title_address_adopter_find.setAttribute('contenteditable', false);
        title_address_adopter_find.innerHTML = "Address : ";


        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        pet_adopt = document.createElement('p');
        pet_adopt.setAttribute('id', 'pet_adopt');
        pet_adopt.setAttribute('contenteditable', false);
        pet_adopt.innerHTML = task_pet_adopt_find;

        name_adopter = document.createElement('p');
        name_adopter.setAttribute('id', 'name_adopter');
        name_adopter.setAttribute('contenteditable', false);
        name_adopter.innerHTML = task_name_adopter_find;

        email_adopter = document.createElement('p');
        email_adopter.setAttribute('id', 'email_adopter');
        email_adopter.setAttribute('contenteditable', false);
        email_adopter.innerHTML = task_email_adopter_find;

        phone_adopter = document.createElement('p');
        phone_adopter.setAttribute('id', 'phone_adopter');
        phone_adopter.setAttribute('contenteditable', false);
        phone_adopter.innerHTML = task_phone_adopter_find;

        address_adopter = document.createElement('p');
        address_adopter.setAttribute('id', 'address_adopter');
        address_adopter.setAttribute('contenteditable', false);
        address_adopter.innerHTML = task_address_adopter_find; 
        
        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_request_adoption_button = document.createElement('button');
        task_done_request_adoption_button.setAttribute('id', 'task_done_request_adoption_button');
        task_done_request_adoption_button.setAttribute('class', 'task_done_button');
        task_done_request_adoption_button.setAttribute('onclick', "task_done_request_adoption(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_request_adoption_button = document.createElement('button');
        task_edit_request_adoption_button.setAttribute('id', 'task_edit_request_adoption_button');
        task_edit_request_adoption_button.setAttribute('class', 'task_edit_button');
        task_edit_request_adoption_button.setAttribute('onclick', "task_edit_request_adoption(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_request_adoption_button = document.createElement('button');
        task_delete_request_adoption_button.setAttribute('id', 'task_delete_request_adoption_button');
        task_delete_request_adoption_button.setAttribute('class', 'task_delete_button');
        task_delete_request_adoption_button.setAttribute('onclick', "task_delete_request_adoption(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');

        show_list_request_adoption.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_adopt_find);
        title_data.append(title_name_adopter_find);
        title_data.append(title_email_adopter_find);
        title_data.append(title_phone_adopter_find);
        title_data.append(title_address_adopter_find);
        

        task_container.append(task_data);
        task_data.append(pet_adopt);
        task_data.append(name_adopter);
        task_data.append(email_adopter);
        task_data.append(phone_adopter);
        task_data.append(address_adopter);
        

        task_container.append(task_tool);
        task_tool.append(task_done_request_adoption_button);
        task_done_request_adoption_button.append(fa_done);
        task_tool.append(task_edit_request_adoption_button);
        task_edit_request_adoption_button.append(fa_edit);
        task_tool.append(task_delete_request_adoption_button);
        task_delete_request_adoption_button.append(fa_delete);
 
    })
  };
  if (name_donate_find==""){
    alert("Please do not leave any items blank!");
    list_donate();
  };
    

}
/*------------------------------------------------------------------------*/  
  // button edit, button delete
  

//   function task_edit(task, edit_button){
    

//     email = task.childNodes[2].childNodes[0];
//     email.setAttribute("contenteditable", false);
//     email.setAttribute("class", "task_data_editing");
//     email.setAttribute("id", "task_email");
//     email.focus();

//     username = task.childNodes[2].childNodes[1];
//     username.setAttribute("contenteditable", false);
//     username.setAttribute("class", "task_data_editing");
//     username.setAttribute("id", "task_username");

//     password = task.childNodes[2].childNodes[2];
//     password.setAttribute("contenteditable", true);
//     password.setAttribute("class", "task_data_editing");
//     password.setAttribute("id", "task_password");

//     birthday = task.childNodes[2].childNodes[3];
//     birthday.setAttribute("contenteditable", true);
//     birthday.setAttribute("class", "task_data_editing");
//     birthday.setAttribute("id", "task_birthday");

//     phone = task.childNodes[2].childNodes[4];
//     phone.setAttribute("contenteditable", true);
//     phone.setAttribute("class", "task_data_editing");
//     phone.setAttribute("id", "task_phone");

//     address = task.childNodes[2].childNodes[5];
//     address.setAttribute("contenteditable", true);
//     address.setAttribute("class", "task_data_editing");
//     address.setAttribute("id", "task_address");

//     type_user = task.childNodes[2].childNodes[6];
//     type_user.setAttribute("contenteditable", false);
//     type_user.setAttribute("class", "task_data_editing");
//     type_user.setAttribute("id", "task_type_user");

//   }

//   function task_done(task, edit_button){
    
//     email = task.childNodes[2].childNodes[0];
//     email.setAttribute("contenteditable", false);
//     email.setAttribute("class", "task_data_done");
//     email.setAttribute("id", "task_email");

//     username = task.childNodes[2].childNodes[1];
//     username.setAttribute("contenteditable", false);
//     username.setAttribute("class", "task_data_done");
//     username.setAttribute("id", "task_username");

//     password = task.childNodes[2].childNodes[2];
//     password.setAttribute("contenteditable", false);
//     password.setAttribute("class", "task_data_done");
//     password.setAttribute("id", "task_password");

//     birthday = task.childNodes[2].childNodes[3];
//     birthday.setAttribute("contenteditable", false);
//     birthday.setAttribute("class", "task_data_done");
//     birthday.setAttribute("id", "task_birthday");

//     phone = task.childNodes[2].childNodes[4];
//     phone.setAttribute("contenteditable", false);
//     phone.setAttribute("class", "task_data_done");
//     phone.setAttribute("id", "task_phone");

//     address = task.childNodes[2].childNodes[5];
//     address.setAttribute("contenteditable", false);
//     address.setAttribute("class", "task_data_done");
//     address.setAttribute("id", "task_address");

//     type_user = task.childNodes[2].childNodes[6];
//     type_user.setAttribute("class", "task_data_done");
//     type_user.setAttribute("id", "task_type_user");

//     // change in firebase to
//     var key = task.getAttribute("data-key");
//     var type_user = task.childNodes[2].childNodes[6].innerHTML;
//     var email= task.childNodes[2].childNodes[0].innerHTML;
//     var username = task.childNodes[2].childNodes[1].innerHTML;
//     var password = task.childNodes[2].childNodes[2].innerHTML;
//     var phone = task.childNodes[2].childNodes[4].innerHTML;
//     var address = task.childNodes[2].childNodes[5].innerHTML;

//     check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
//     check_password = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
//     check_username = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
//     check_phone = /^([0-9]{1,11})+$/;
//     check_address = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;

//     if (check_email.test(email)&&check_password.test(password)&&check_username.test(username)&&check_phone.test(phone)) { // true nếu text chỉ chứa ký tự alphabet thường hoặc hoa, false trong trường hợp còn lại. 
 
//       var task_obj = {
//         email: email,
//         username: username,
//         password: task.childNodes[2].childNodes[2].innerHTML ,
//         birthday: task.childNodes[2].childNodes[3].innerHTML,
//         phone: task.childNodes[2].childNodes[4].innerHTML,
//         address: task.childNodes[2].childNodes[5].innerHTML,
//         type_user: type_user,

//          key: key,
//       };
    
//       var updates = {};
//       updates["/" + type_user + "/" + username] = task_obj;
//       firebase.database().ref().update(updates);
//     }else{
//         alert("Không phù hợp với định dạng!");
//     }

//   }

  
//   function task_delete(task){
//     key = task.getAttribute("data-key");
//     var type_user = task.childNodes[2].childNodes[6].innerHTML;
//     var username = task.childNodes[2].childNodes[1].innerHTML;
//     task_to_remove = firebase.database().ref( type_user +"/" + username);
//     task_to_remove.remove();

//     // remove from html view or whatevesss
//     task.remove();
//     count_user_and_pet();
//   }

// /*------------------------------------------------------------------------*/ 