// var forms = document.getElementsByTagName('form');

window.addEventListener("DOMContentLoaded", (event) => {
  var forms = document.getElementsByTagName("form");
  var show_result_btns = document.querySelectorAll(".show_result_btn");
  var form = null;
  var input_values = [];
  var show_result_text = document.querySelectorAll(".show_result_text");

  show_result_btns.forEach((btn, index) => {
    btn.onclick = function (e) {
      clickHandle(btn, index);
    };
  });

  var clickHandle = function (btn, index) {
    input_values = [];

    switch (index) {
      case 0:
        handleBT1(index);
        break;
      case 1:
        handleBT2(index);
        break;
      case 2:
        handleBT3(index);
        break;
      case 3:
        handleBT4(index);
        break;
      case 4:
        handleBT5(index);
        break;
      case 5:
        handleBT6(index);
        break;
      default:
      // code block
    }
  };

  function getValue(index) {
    console.log("index", index);
    form = forms[index];
    for (var i = 0; i < form.elements.length; i++) {
      input_values.push(parseFloat(form.elements[i].value));
    }
    console.log(input_values, "in getValue");
    // return input_values;
  }

  // ---------BÀI TẬP 1--------
  function handleBT1(index) {
    console.log(input_values, "in handleBT1");

    getValue(index);
    console.log(input_values, "in handleBT1");
    var a = input_values[0];
    var b = input_values[1];
    var c = input_values[2];
    console.log(a, b, c);

    if (a < b && a < c) {
      //TH1: a là số nhỏ nhất
      if (b < c) {
        console.log(` ${a} < ${b} < ${c}`); //a<b<c
        show_result_text[index].innerHTML = a + "<" + b + "<" + c;
      } else {
        console.log(` ${a} < ${c} < ${b}`); //a<c<b
        show_result_text[index].innerHTML = ` ${a} < ${c} < ${b}`;
      }
    } else if (b < a && b < c) {
      //TH2: b là số nhỏ nhất
      if (a < c) {
        console.log(` ${b} < ${a} < ${c}`); //b<a<c
        show_result_text[index].innerHTML = ` ${b} < ${a} < ${c}`;
      } else {
        console.log(` ${b} < ${c} < ${a}`); //b<c<a
        show_result_text[index].innerHTML = ` ${b} < ${c} < ${a}`;
      }
    } else if (c < b && c < a) {
      //TH2: c là số nhỏ nhất
      if (a < b) {
        console.log(` ${c} < ${a} < ${b}`); //c<a<b
        show_result_text[index].innerHTML = ` ${c} < ${a} < ${b}`;
      } else {
        console.log(` ${c} < ${b} < ${a}`); //c<b<a
        show_result_text[index].innerHTML = ` ${c} < ${b} < ${a}`;
      }
    } else {
      console.log("3 số bằng nhau");
    }
  }

  // ---------BÀI TẬP 2--------

  function handleBT2(index) {
    form = forms[index];
    var selectValue = form.elements[0].value;
    var fixed_text = "Xin chào";
    switch (selectValue) {
      case "bo":
        show_result_text[index].innerHTML = ` ${fixed_text}    Bố `;
        break;
      case "me":
        show_result_text[index].innerHTML = ` ${fixed_text}    Mẹ `;
        break;
      case "anhtrai":
        show_result_text[index].innerHTML = ` ${fixed_text}    Anh Trai `;
        break;
      case "emgai":
        show_result_text[index].innerHTML = ` ${fixed_text}    Em Gái `;
        break;
      default:
        show_result_text[index].innerHTML = ` ${fixed_text}    người lạ`;
    }
  }

  // ---------BÀI TẬP 3--------

  function handleBT3(index) {
    getValue(index);

    console.log(input_values, "in handleBT3");
    var counterChan = 0;

    for (var i = 0; i < input_values.length; i++) {
      if (input_values[i] % 2 === 0) {
        counterChan++;
      }
    }

    show_result_text[
      index
    ].innerHTML = `Số các số chăn: ${counterChan} <br> Số các số lẻ: ${
      input_values.length - counterChan
    } `;
  }

  // ---------BÀI TẬP 4--------

  function handleBT4(index) {
    getValue(index);

    console.log(input_values, "in handleBT4");
    var canh1 = input_values[0];
    var canh2 = input_values[1];
    var canh3 = input_values[2];

    if (
      canh1 + canh2 > canh3 ||
      canh1 + canh3 > canh2 ||
      canh2 + canh3 > canh1
    ) {
      // show_result_text[index].innerHTML = "đây là tam giác bình thường";
      if (canh1 == canh2 && canh2 == canh3) {
        show_result_text[index].innerHTML = "đây là tam giác đều";
      } else if (canh1 == canh2 || canh2 == canh3 || canh3 == canh1) {
        show_result_text[index].innerHTML = "đây là tam giác cân";
      } else if (
        canh1 * canh1 == canh2 * canh2 + canh3 * canh3 ||
        canh2 * canh2 == canh1 * canh1 + canh3 * canh3 ||
        canh3 * canh3 == canh2 * canh2 + canh1 * canh1
      ) {
        show_result_text[index].innerHTML = "đây là tam giác vuông";
      }
    } else {
      show_result_text[index].innerHTML =
        "đây không phải là tam giác, mời bạn nhập lại";
    }
  }



    // ---------BÀI TẬP 5--------


function handleBT5(index) {
  getValue(index);
  var thang = 0;
  var nam = 0;
  var ngay =0;

  console.log(input_values, "in handleBT5");
  thang = input_values[0];
  nam = input_values[1];
  
  switch (thang){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: 
      ngay = 31;
      break;
    case 2: 
    if(nam % 400 == 0 || (nam % 100 != 0 && nam % 4 == 0)) {
      ngay = 29;
    } else {
      ngay = 28;

    }
    break;
    case 4:             
    case 6:
    case 9:
    case 11:
      ngay = 30;
      break;
    default:
      show_result_text[index].innerHTML = "Mời bạn nhập tháng nhỏ hơn 13";

    }
    if(thang <=12 ) {
      show_result_text[index].innerHTML = `tháng ${thang} năm ${nam} có ${ngay} ngày`;

    }


}



    // ---------BÀI TẬP 6--------

    function handleBT6(index) {
      getValue(index);
      console.log(input_values, "in handleBT6");
      var number = 0;
      var tram =0;
      var chuc =0;
      var donvi =0;
      var tram_text ='';
      var chuc_text ='';
      var donvi_text ='';
      var final_text = '';
      number = input_values[0];
      
      tram = Math.floor(number/100);
       chuc = Math.floor((number%100)/10);
       donvi= Math.floor(number%10);
      console.log(tram,chuc,donvi);
       switch(tram) {
         case 1: tram_text = 'một'; break;
         case 2: tram_text = 'hai'; break;
         case 3: tram_text = 'ba'; break;
         case 4: tram_text = 'bốn'; break;
         case 5: tram_text = 'năm'; break;
         case 6: tram_text = 'sáu'; break;
         case 7: tram_text = 'bảy'; break;
         case 8: tram_text = 'tám'; break;
         case 9: tram_text = 'chín'; break;
         default: 
            show_result_text[index].innerHTML = 'Mời bạn nhập số hợp lệ';

       }
      
       switch(chuc) {
     
        case 1: chuc_text = 'một'; break;
        case 2: chuc_text = 'hai'; break;
        case 3: chuc_text = 'ba'; break;
        case 4: chuc_text = 'bốn'; break;
        case 5: chuc_text = 'năm'; break;
        case 6: chuc_text = 'sáu'; break;
        case 7: chuc_text = 'bảy'; break;
        case 8: chuc_text = 'tám'; break;
        case 9: chuc_text = 'chín'; break;
        default:  //số hàng chục là 0
          chuc_text = 'linh';

      }


      switch(donvi) {
     
        case 1: donvi_text = 'một'; break;
        case 2: donvi_text = 'hai'; break;
        case 3: donvi_text = 'ba'; break;
        case 4: donvi_text = 'bốn'; break;
        case 5: donvi_text = 'năm'; break;
        case 6: donvi_text = 'sáu'; break;
        case 7: donvi_text = 'bảy'; break;
        case 8: donvi_text = 'tám'; break;
        case 9: donvi_text = 'chín'; break;
        default:  //số hàng đơn vị là 0
          donvi_text = 'mươi';
          if(chuc_text=== "linh") {
            chuc_text ="";
            donvi_text = "";
          }

      }
       
      show_result_text[index].innerHTML = chuc_text === "linh" ? ` ${tram_text} trăm ${chuc_text} ${donvi_text} ` : ` ${tram_text} trăm ${chuc_text} mươi ${donvi_text} `;
       
      }
      
      
      











});


