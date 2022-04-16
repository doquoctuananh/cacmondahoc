/*
    thuật ngữ built-in
    1.alert hiện thị khối thông báo lên màn hình 
    2.console hiện thị bên console bên console f12
    3. confirm 
    4.prompt
    5.setTimeout
    6.setiInterval
*/

// alert('đây là thông báo khổi');
// alert thông báo khối có thể hiện tị biến
// var bien='đây là biến';
// alert(bien);

// console.log('log hiện thị bên f12');
// console hiện thị bên f12 hiện thị bình thường

// console.warn('đây ;à con console.warn hiển thị màu vàng');
// console.error đây là console hiển thị mảu đỏ 
// console.error('hien thị màu đỏ giống như cảnh báo');

//phần thứ 3 là confirm đầy là phần xác nhận ok hoặc cancel

// phần thứ 4 đầy là phần prompt
// prompt giống như phần confirm nhưng nó có thêm phần input để người dùng nhập vào

// prompt('bạn đã đủ 18 tuổi chưa hãy nhập thông tin dưới ô input');
// setTimeout(function() {
//     alert('đây là hàm function setTimeout')   
// },1000)

// 1000 là 1000ms giây bang 1 giây sau nó mới chạy 
// nó chỉ chạy 1 lần duy nhất


// setInterval nó giống setTimeout nhưng nó chyaj liên tục tùy vào thời gian
// ví dụ dưới đây là cứ sau 1 giây là nó chạy liên tục 
setInterval(function() {
    // console.log('hàm console hiện bên f12 phần console +' + Math.random());
    alert('hàm setInterval ')
},3000)
