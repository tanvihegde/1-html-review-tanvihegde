const app1 = {
    data(){
        return{
            "userinfo":{},
        }
    },
    
    computed: {
        prettyBirthday() {
            return dayjs(this.userinfo.dob.date)
            .format('D MMM YYYY');
        }
    },

    methods:{
        fetchUser(){
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                this.userinfo = data.results[0];
                console.log(userinfo);
              
            });
        }
    },

    created() {
        this.fetchUser();
    },

}
Vue.createApp(app1).mount('#userapp');