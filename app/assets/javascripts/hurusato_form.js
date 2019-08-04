$(document).on('turbolinks:load',function() {
  //指定されたラジオボタン（name）の値を取得
  var getRadioValue = function(name){
    var result = '';
    var elems = document.getElementsByName(name);
    //ラジオボタンを走査し、チェック状態にあるかを確認
    for(var i = 0,len = elems.length; i < len; i++){
      var elem = elems.item(i);
      //チェックされている項目の値を配列に追加
      if(elem.checked){
        result = elem.value;
        break;
      }
    }
    return result;
  };

  // 指定されたラジオボタン(name)の値を設定
  var setRadioValue = function(name, value){
    var elems = document.getElementsByName(name);

    // ラジオボタンを走査し、値の等しいものを検出
    for(var i = 0, len = elems.length; i < len; i++){
      var elem = elems.item(i);
      // 引数valueと等しい値を持つ項目を選択状態に
      if(elem.value === value){
        elem.checked = true;
        break;
      }
    }
  };


  setRadioValue('spouse', '0');
  setRadioValue('dependent', '0');
  setRadioValue('specific_dependent', '0')
  document.getElementById('button').addEventListener('click',function(){
    console.log(getRadioValue('spouse'));
    console.log(getRadioValue('dependent'));
    console.log(getRadioValue('specific_dependent'));
  },false);


  // // ボタンの要素を取得
  // $("#button").on("click", function(e) {
  //   e.preventDefault();
    
  //   // 入力フォームの値を取得
  //   var element = document.getElementById( "target" ) ;
  //   // console.log(element);
  //   // var elements = element.options ;

  //   for ( var a="", i=0,l=elements.length; l>i; i++ ) {
  //     if ( elements[i].selected ) {
  //       a += elements[i].value;
  //     }
  //   }
    // console.log(a);
    // // 取得した値を別の入力フォームに表示
    // var resultForm = document.getElementById("resultForm");
    // resultForm.value = textForm;

});
