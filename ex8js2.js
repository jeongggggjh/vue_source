(function(){
    const {createApp} = Vue;

    createApp ({
        data() {
            return {
                ypay:0,
                busers:[
                    {bunho:'10', irum:'총무부', junhwa:'111-1111'},
                    {bunho:'20', irum:'영업부', junhwa:'123-1111'},
                    {bunho:'30', irum:'전산부', junhwa:'456-1111'},
                    {bunho:'40', irum:'관리부', junhwa:'789-1111'},
                ],
                cssStyleTest:{
                    color:'pink', fontSize:'20px'
                }
            }
        },
        
    }).mount('#app2');
})();

