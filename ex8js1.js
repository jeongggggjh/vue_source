(function(){
    const {createApp} = Vue;

createApp ({
    data() {
        return {
            key:'값1',
            key2:'값2',
            message:'ㅎㅇ',
            htmlString:'<p style="color:pink;">ㅎㅎ</p>',
            su1:'0',
            su2:'0',
            txtMsg:'',
            munlogo:'pic.png'

        }
    },
    methods: {
        myFunc() {
            console.log(this.message);
        },
        myChange1() {
            this.message = "ㅎㅇ ㅋㅋ";
        },
        myChange2() {
            this.message = "반갑";
        },
    }

}).mount('#app');
})();

