// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCX3q_oJgMPwQ7qJKWsTaucToeMyJLyTTg",
    authDomain: "bvdatabase-8d2bd.firebaseapp.com",
    projectId: "bvdatabase-8d2bd",
    storageBucket: "bvdatabase-8d2bd.appspot.com",
    messagingSenderId: "945711249581",
    appId: "1:945711249581:web:d090b1bd6577ed662cee24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function add_contact(){

    var name_contact = document.getElementById('name_contact').value;
    var email_contact = document.getElementById('email_contact').value;
    var status_contact = document.getElementById('status_contact').value;
    var content_contact = document.getElementById('content_contact').value;
    check_name = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
    check_email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    check_status = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/;
    check_content = /^[a-zA-Z-0-9\A\Á\À\Ả\Ã\Ạ\đ\Đ\y\ý\ỳ\ỷ\ỹ\ỵ\Y\Ý\Ỳ\Ỵ\Ỷ\Ỹ\a\ã\á\à\ạ\ả\E\Ẹ\È\É\Ẻ\Ẽ\e\ẹ\é\è\ẻ\ẽ\Ê\Ế\Ề\Ệ\Ễ\Ể\ê\ệ\ể\ề\ế\ễ\U\Ụ\Ú\Ù\Ủ\Ũ\ụ\ù\ú\ũ\ủ\ữ\u\I\Ị\Ì\Í\Ỉ\Ĩ\i\ị\í\ì\ỉ\ĩ\O\Ọ\Ò\Ó\Õ\Ỏ\o\ọ\ó\ò\ỏ\õ\Â\Ậ\Ấ\Ầ\Ẩ\Ẫ\â\ậ\ẩ\ấ\ầ\ẫ\Ă\Ẳ\Ắ\Ằ\Ặ\Ẵ\ă\ặ\ắ\ằ\ẵ\ẳ\Ô\Ố\Ộ\Ồ\Ổ\Ỗ\ô\ổ\ố\ồ\ộ\ỗ\Ơ\Ở\Ờ\Ớ\Ỡ\Ợ\ơ\ỡ\ớ\ờ\ở\ợ\Ư\Ử\Ữ\Ứ\Ừ\Ự\ư\ừ\ử\ứ\ự\ữ\ \_\.\-\~\?\.\/]+$/; // Chỉ chấp nhận ký tự alphabet thường hoặc ký tự hoa
    
      if(name_contact.length != 0 && email_contact.length != 0 && status_contact.length != 0 && content_contact.length != 0 ){
        if (check_name.test(name_contact)&&check_email.test(email_contact)&&check_status.test(status_contact)&&check_content.test(content_contact)) { // true nếu text chỉ chứa ký tự alphabet thường hoặc hoa, false trong trường hợp còn lại. 
          
          // our boxes have data and we take database
          var key = firebase.database().ref().child('Contact').push().key;
          var task = {
            
            name_contact: name_contact,
            email_contact: email_contact,
            status_contact: status_contact,
            content_contact: content_contact,
            key: key,
          };

          var updates = {};
          updates["/Contact/" + name_contact] = task;
          firebase.database().ref().update(updates);

            alert("Gửi Phản Hồi thành công!");
            var name_contact = document.getElementById('name_contact').value ="";
            var email_contact = document.getElementById('email_contact').value ="";
            var status_contact = document.getElementById('status_contact').value ="";
            var content_contact = document.getElementById('content_contact').value ="";
      }else {
            alert("Không phù hợp với định dạng!");
          }
    } else {
        alert("Vui lòng không để trống bất kỳ mục nào!");
    }

    
       
    
  }
