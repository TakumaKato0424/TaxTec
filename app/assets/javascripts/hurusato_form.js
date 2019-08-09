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
  deduction = 0;
  if(0 <= income && income <= 650000){
    deduction = 0;
  } else if( 650000 < income && income <= 1625000){
    deduction = income - 650000;
  } else if( 1625000 < income && income <= 1800000){
    deduction = (income * 0.4);
  } else if( 1800000 < income && income <= 3600000){
    deduction = (income * 0.3) + 180000;
  } else if( 3600000 < income && income <= 6600000){
    deduction = (income * 0.2) + 540000;
  } else if( 6600000 < income && income <= 10000000){
    deduction = (income * 0.1) + 1200000;
  } else if( 10000000< income){
    deduction = 2200000;
  } else{
    window.alert("収入金額が不正です")
  }
  return deduction;
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

var getIncomeTaxRate = function(income){
  rate = 0; 
  if( income < 1000 ){
    rate = 0;
  }else if( 1000 <= income && income <= 1949000 ){
    rate = 0.05;
  }else if( 1950000 <= income && income <= 3299000 ){
    rate = 0.1;
  }else if( 3300000 <= income && income <= 6949999 ){
    rate = 0.2;
  }else if( 6950000 <= income && income <= 8999000 ){
    rate = 0.23;
  }else if( 9000000 <= income && income <= 17999000 ){
    rate = 0.33;
  }else if( 18000000 <= income && income <= 39999000 ){
    rate = 0.4;
  }else{
    rate = 0.45;
  }
  return rate;
};

var roundedDown = function(numeric){
  return Math.floor(numeric / 1000) * 1000;
};

$(document).on('turbolinks:load',function() {
  BASIC_DEDUCTION = 330000; // 住民税基礎控除額は330000円とする
  ADJUSTMENT = 2500; // 住民税の調整控除額は2500円とする
  SOCIAL_INSURANCE_RATE = 0.15; // 社会保険料は15%とする
  INHABITANT_RATE = 0.1; // 住民税率は10%とする
  RECONSTRUCTION_RATE = 1.021; // 復興特別所得税は102.1%とする
  
  setRadioValue('spouse', '0');
  setRadioValue('dependent', '0');
  setRadioValue('specific_dependent', '0')

  document.getElementById('button').addEventListener('click',function(){
    // フォームから給与収入の金額を取得する
    var salary_income = Number($('#salary_income').val());
    // ラジオボタンの情報から所得控除を求める
    var total_deduction = salaryIncomeDeduction(salary_income) 
                        + spousalDeduction(getRadioValue('spouse'))
                        + dependentDeduction(getRadioValue('dependent'))
                        + specificDependentDeduction(getRadioValue('specific_dependent'))
                        + (salary_income * SOCIAL_INSURANCE_RATE)
                        + BASIC_DEDUCTION;
    // 課税所得を求める
    var income = salary_income - total_deduction;
    income = roundedDown(income);
    income_rate = getIncomeTaxRate(income);
    income_levy = (income * INHABITANT_RATE) - ADJUSTMENT;
    limit = (income_levy * 0.2) / (0.9 - (income_rate * RECONSTRUCTION_RATE)) + 2000;
    limit = roundedDown(limit);
    if(limit < 0)limit = 0;
    limit = limit.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',');
    $('#result').text(limit);
  },false);
});
