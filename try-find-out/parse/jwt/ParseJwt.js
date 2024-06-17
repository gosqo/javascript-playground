function parseJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(function (c) {
                return "%" + ("00"
                    + c.charCodeAt(0).toString(16))
                    .slice(-2);
            })
            .join("")
    );

    console.log('base64Url', base64Url);
    console.log('base64', base64);
    console.log('jsonPayload', jsonPayload);

    return JSON.parse(jsonPayload);
}

const randomJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyYW5kb20iLCJuYW1lIjoidGVzdGluZyIsImlhdCI6MTcxODYxMDQ3OCwiZXhwIjoxNzE4NjEwNzAwfQ.MQWI75FZ1DhISHvFyaP3Iqa36Z0IjQnrqSTYMSFvps8';
const parsedJWT = parseJwt(randomJWT);
const jwtExpiration = parsedJWT.exp;
const currentTimeStamp = Math.floor(Date.now() / 1000);

console.log('parsedJWT', parsedJWT);
console.log('JWT expiration', parsedJWT.exp);
console.log('current time stamp', currentTimeStamp);

if (currentTimeStamp >= jwtExpiration) {
    console.log('expired');
}
