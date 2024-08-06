const {createApp} = Vue;

createApp ({
    data() {
        return {
            list : ['얼음잔 생맥', '콜라', '닥터페퍼', '얼음물'],
            objArr : [
                {site:'세부', taketime:'5시간'},
                {site:'다낭', taketime:'5시간'},
                {site:'사이판', taketime:'5시간'},
            ],
            myArr : ['일', '이', '삼', '사', '오'],
            numArr : [1, 2, 3, 4, 5],
        }
    },
    methods: {
        addList() {
            this.myArr.push('추가');
        },
        addListIndex(arg) {
            this.myArr.splice(arg, 0, '삽입'); // 배열요소를 제거하고 새요소로 대체
        },
        changeList(arg) {
            this.myArr.splice(arg, 1, '수정');
        },
        deleteList(arg) {
            this.myArr.splice(arg, 1);
        }
    },
}).mount('#app');