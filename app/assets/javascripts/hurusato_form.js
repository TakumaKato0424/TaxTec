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

var salaryIncomeDeduction = function(income){
  if(0 <= income && income <= 650000){
    return 0;
  } else if( 650000 < income && income <= 1625000){
    return income - 650000;
  } else if( 1625000 < income && income <= 1800000){
    return (income * 0.4);
  } else if( 1800000 < income && income <= 3600000){
    return (income * 0.3) + 180000;
  } else if( 3600000 < income && income <= 6600000){
    return (income * 0.2) + 540000;
  } else if( 6600000 < income && income <= 10000000){
    return (income * 0.1) + 1200000;
  } else if( 10000000< income){
    return 2200000;
  }
};

var spousalDeduction = function(spouse){
  const SPOUSAL_DEDUCTION = 330000;
  spouse = Number(spouse);
  switch(spouse){
    case 0:
      return 0;
    case 1:
      return SPOUSAL_DEDUCTION;
    default:
      break;
  }
};

var dependentDeduction = function(dependent){
  const DEPENDENT_DEDUCTION = 330000;
  dependent = Number(dependent);
  switch(dependent){
    case 0:
      return 0;
    case 1:
      return DEPENDENT_DEDUCTION;
    case 2:
      return DEPENDENT_DEDUCTION * 2;
    case 3:
      return DEPENDENT_DEDUCTION * 3;
    default:
      break;
  }
};

var specificDependentDeduction = function(specific_dependent){
  const SPECIFIC_DEPENDENT_DEDUCTION = 450000;
  specific_dependent = Number(specific_dependent);
  switch(specific_dependent){
    case 0:
      return 0;
    case 1:
      return SPECIFIC_DEPENDENT_DEDUCTION;
    case 2:
      return SPECIFIC_DEPENDENT_DEDUCTION * 2;
    case 3:
      return SPECIFIC_DEPENDENT_DEDUCTION * 3;
    default:
      break;
  }
};

$(document).on('turbolinks:load',function() {


  setRadioValue('spouse', '0');
  setRadioValue('dependent', '0');
  setRadioValue('specific_dependent', '0')
  document.getElementById('button').addEventListener('click',function(){
    console.log(spousalDeduction(getRadioValue('spouse')));
    console.log(dependentDeduction(getRadioValue('dependent')));
    console.log(specificDependentDeduction(getRadioValue('specific_dependent')));
  },false);

  $('#salary_income').on('keyup', function() {
    // console.log( $('#salary_income').val());
    var salary_income = Number($('#salary_income').val());
    console.log(salary_income);
    console.log(salaryIncomeDeduction(salary_income));
  });
});
