const { createApp } = Vue;

createApp({
    data() {
        return {
            name: '',
            java: 0,
            react: 0,
            vue: 0,
            students: []
        };
    },
    computed: {
        totalScore() {
            return this.students.reduce((sum, student) => sum + student.total, 0);
        }
    },
    methods: {
        addScore() {
            const total = Number(this.java) + Number(this.react) + Number(this.vue);
            this.students.push({ name: this.name, java: this.java, react: this.react, vue: this.vue, total });
            this.name = '';
            this.java = 0;
            this.react = 0;
            this.vue = 0;
        }
    }
}).mount('#app');
