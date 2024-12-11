let 값=null

function 참거짓판단함수(값) {
    const 결과=값 && '참'//참일때만 실행
    console.log(결과||'거짓');
}
참거짓판단함수(값)

console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(1 || 1);
console.log(1 || 0);
console.log(0 || 0);