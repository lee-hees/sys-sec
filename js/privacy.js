function Real() // 잠재적 피해
{
    // 사고로 영향을 받은 직원 수
    const a =
        document.getElementById('a').value;
    // * 시간당 생산성
    const b =
        document.getElementById('b').value;

    var RESULT = Math.round(
        eval((a + '*' + b)
        ));


    document.getElementById("Real_Result").innerText = addComma(RESULT);

    return RESULT;

}

function Predict() // 잠재적 피해
{
    // 사고로 영향을 받은 직원 수
    const aa =
        document.getElementById('aa').value;
    // * 시간당 생산성
    const bb =
        document.getElementById('bb').value;

    var RESULT = Math.round(
        eval((aa + '*' + bb)
        ));


    document.getElementById("Predict_Result").innerText = addComma(RESULT);

    return RESULT;

}
