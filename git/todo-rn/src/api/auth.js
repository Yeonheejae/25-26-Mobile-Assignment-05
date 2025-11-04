export const LoginAsync = ((email, password) => {
    return new Promise((resolve, reject ) => {
        setTimeout(() => {
            if(email === 'test@test.kr' && password === '1234'){
                resolve('로그인 성공!');
                console.log('로그인 성공!');
            } else {
                reject('로그인 실패ㅠㅠ');
                console.log('로그인 실패 ㅠㅠ');
            }
        }, 1500);
    });
});
