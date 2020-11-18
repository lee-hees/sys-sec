
function SoftwareRecoveryCost() // 소프트웨어 복구 비용
{
     //  피해 시스템 수 (대)
     const NumberOfDamageSystems =
          document.getElementById('NumberOfDamageSystems').value;
     //  * 복구 소요 시간
     const RecoveryTime =
          document.getElementById('RecoveryTime').value;
     //  * 복구 투입 인원
     const RecoveryInputPersonnel =
          document.getElementById('RecoveryInputPersonnel').value;
     //  * 시간당 임금 (원)
     const HourlyWage =
          document.getElementById('HourlyWage').value;

     var RESULT = eval(NumberOfDamageSystems +
          '*' + RecoveryTime +
          '*' + RecoveryInputPersonnel +
          '*' + HourlyWage
     );


     document.getElementById("SoftwareRecoveryCost_Result").innerText = addComma(RESULT);

     return RESULT;


}


function HardwareReplacementCost()  // 하드웨어 대체 비용
{
     //  피해 시스템 수 (대)
     const NumberOfDamageSystems_HW =
          document.getElementById('NumberOfDamageSystems_HW').value;

     var RESULT =
          eval(NumberOfDamageSystems_HW +
               '*' + 0.132 +
               '*' + 569000
          );

     document.getElementById("HardwareReplacementCost_Result").innerText = addComma(RESULT);

     return RESULT;

}

function DirectDamageAmount()// 직접적 피해액
{
     const SoftwareRecoveryCost_Result =
          SoftwareRecoveryCost()

     const HardwareReplacementCost_Result =
          document.getElementById('HardwareReplacementCost_Result').value;

     var RESULT =
          eval(SoftwareRecoveryCost() +
               '+' + HardwareReplacementCost());

     document.getElementById("DirectDamageAmount_Result").innerText = addComma(RESULT);

     return RESULT;

}

// ==================================================

// <표6,7> - 매출 이익 손실 비용


function ProfitPerHourByTheInternet() // 인터넷에 의한 시간당 이익
{
     // 연간매출
     const AnnualSales =
          document.getElementById('AnnualSales').value;
     //  * 매출영업이익률
     const SalesOperatingProfitRatio =
          document.getElementById('SalesOperatingProfitRatio').value;
     //  * 인터넷 의존도
     const InternetDependence =
          document.getElementById('InternetDependence').value;
     // / 연간 인터넷 영업시간
     const AnnualInternetBusinessHours =
          document.getElementById('AnnualInternetBusinessHours').value;

     var RESULT = eval(AnnualSales +
          '*' + SalesOperatingProfitRatio +
          '*' + InternetDependence +
          '/' + AnnualInternetBusinessHours
     );


     document.getElementById("ProfitPerHourByTheInternet_Result").innerText = addComma(RESULT);

     return RESULT;

}

function LossOfProfitFromSales() // 매츨이익 손실
{
     // * 피해시간
     const DamageTime =
          document.getElementById('DamageTime').value;
     //  * 침해사고 영향도
     const InfringementAccidentImpactMap =
          document.getElementById('InfringementAccidentImpactMap').value;

     var RESULT = eval(ProfitPerHourByTheInternet() +
          '*' + DamageTime +
          '*' + InfringementAccidentImpactMap
     );


     document.getElementById("LossOfProfitFromSales_Result").innerText = addComma(RESULT);

     return RESULT;

}

// ==================================================

// <표8,9> - 생산 효율 저하로 인한 손실

function AmountOfLossDueToReducedProductionEfficiency() // 생산효율 저하로 인한 손실액
{
     // 사고로 영향을 받은 직원 수
     const NumberOfAccidentAffectedEmployees =
          document.getElementById('NumberOfAccidentAffectedEmployees').value;
     // * 시간당 생산성
     const ProductivityPerHour =
          document.getElementById('ProductivityPerHour').value;
     // * 피해시간
     const DamageTime =
          document.getElementById('DamageTime').value;
     //  * 생산효율 저하비율
     const RateOfDegradationOfProductionEfficiency =
          document.getElementById('RateOfDegradationOfProductionEfficiency').value;

     var RESULT = eval(NumberOfAccidentAffectedEmployees +
          '*' + ProductivityPerHour +
          '*' + DamageTime +
          '*' + RateOfDegradationOfProductionEfficiency
     );


     document.getElementById("AmountOfLossDueToReducedProductionEfficiency_Result").innerText = addComma(RESULT);

     return RESULT;

}

// ==================================================

// <표10> - 데이터 재생산 비용

function TheValueOfUnrecoverableData() // 복구불능 데이터의 가치 (데이터 재생산 비용)
{
     // 복구불능 데이터의 양
     const AmountOfIrrecoverableData =
          document.getElementById('AmountOfIrrecoverableData').value;
     // * 데이터별 평균 재생산소요시간
     const AverageReproductionTimeByData =
          document.getElementById('AverageReproductionTimeByData').value;
     // * 재생산 인력의 시간당 인건비
     const HourlyLaborCostsForReproduciblePersonnel =
          document.getElementById('HourlyLaborCostsForReproduciblePersonnel').value;

     var RESULT = eval(AmountOfIrrecoverableData +
          '*' + AverageReproductionTimeByData +
          '*' + HourlyLaborCostsForReproduciblePersonnel
     );


     document.getElementById("TheValueOfUnrecoverableData_Result").innerText = addComma(RESULT);

     return RESULT;

}


// 복구불능 데이터의 가치 (≒ 데이터 재생산 비용) 
// 복구불능 데이터의 양 
// × 데이터별 평균 재생산소요시간
// × 재생산 인력의 시간당 인건비

// ==================================================

// <표11> - 잠재적 피해

function PotentialDamage() // 잠재적 피해
{
     // 사고로 영향을 받은 직원 수
     const SharePriceFluctuationRateDueToInfringementAccident =
          document.getElementById('SharePriceFluctuationRateDueToInfringementAccident').value;
     // * 시간당 생산성
     const StokePrice =
          document.getElementById('StokePrice').value;
     // * 피해시간
     const NumberOfListedShares =
          document.getElementById('NumberOfListedShares').value;

     var RESULT = eval(SharePriceFluctuationRateDueToInfringementAccident +
          '*' + StokePrice +
          '*' + NumberOfListedShares
     );


     document.getElementById("PotentialDamage_Result").innerText = addComma(RESULT);

     return RESULT;

}

// ==================================================

// <표12>

function plus_all_values() {

     var arr = document.getElementById('c').value.split('/');
     var selected = arr[0].split("+");
     var system_arr = arr[eval(selected[0] +'+'+ selected[1] +'+'+ selected[2])].split("+");

     var RESULT = 0;

     for (let i = 0; i < system_arr.length; i++) {
          RESULT = eval(RESULT + '+' + system_arr[i]);
     }
     RESULT = eval(RESULT + '+' + document.getElementById('PreventiveCost').value);

     document.getElementById("TotalAmountOfDamage_Result").innerText =
          addComma(RESULT);

     return RESULT;
}

// 총 피해액
//     직접적 피해액
//     + 매출이익 손실비용
//     + 생산효율저하 손실액
//     + 복구불능 데이터가치
//     + 예방비
//     + 잠재적 피해액

// ==================================================

// <표13>

// 총 피해액

//     77
//         {
//             추정 GDP
//             +연간 근무 시간
//         }
//         * 109 / 1000
//         * 피해시간 (24-72 시간으로 제한)

