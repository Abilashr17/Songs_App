
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/service-worker.js')
    .then((registration) => {
        console.log('Register Sucess',registration);
    })
    .catch((error) => {
        console.log('Register Failed:',error);
    });
}
else{
    console.log ('Service Worker are not supported')
}