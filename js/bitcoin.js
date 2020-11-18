function Bitcoin() // 잠재적 피해
{
    // 사고로 영향을 받은 직원 수
    const aa =
        document.getElementById('aa').value;
    // * 시간당 생산성
    const bb =
        document.getElementById('bb').value;

    var RESULT = 
        eval((aa + '*' + bb)
        );


    document.getElementById("Bitcoin_Result").innerText = addComma(RESULT);

    return RESULT;

}
