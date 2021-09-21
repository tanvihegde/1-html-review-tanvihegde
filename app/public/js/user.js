const app1 = {
    data(){
        return{
            "userinfo":{},
        }
    },

    methods:{
        fetchUser(){
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                this.userinfo = data.results[0];
                console.log(userinfo);

                // this.userPicThumb = userinfo.picture.thumbnail;
            });
        }
},


created() {
    this.fetchUser();
},
}
Vue.createApp(app1).mount('#userapp');