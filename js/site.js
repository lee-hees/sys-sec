
// <표13>

// 총 피해액

//     77
//         {
//             추정 GDP
//             +연간 근무 시간
//         }
//         * 109 / 1000
//         * 피해시간 (24-72 시간으로 제한)
function Site() // 잠재적 피해
{
     // 사고로 영향을 받은 직원 수
     const GDP =
          document.getElementById('GDP').value;
     // * 시간당 생산성
     const RTime =
          document.getElementById('RTime').value;
     // * 피해시간
     const DamageTime =
          document.getElementById('DamageTime').value;

     var RESULT = Math.round(eval(eval(GDP +
          '*' + RTime) +
          '*' + 109 + '/' + 1000 +
          '*' + DamageTime
     ));


     document.getElementById("Site_Result").innerText = addComma(RESULT);

     return RESULT;

}
