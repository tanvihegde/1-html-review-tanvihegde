var app = new Vue({
    el: '#userapp',
    data: {
        userName:'',
        userEmail:'',
        userCountry:'',
        userBirthdate:'',
        userAge:'',
        userPicLarge:'',
        userPicThumb:''
    },

    created() {
        this.fetchUser();
    },

    methods: {
        fetchUser: function() {
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                var userinfo = data.results[0];
                console.log(userinfo);
                this.userName = userinfo.name.first + " " + userinfo.name.last;
                this.userEmail = userinfo.email;
                this.userBirthdate = userinfo.dob.date[0] + userinfo.dob.date[1] + userinfo.dob.date[2] + userinfo.dob.date[3] + "/" + userinfo.dob.date[5] + userinfo.dob.date[6] ;
                this.userAge = userinfo.picture.large;
                this.userPicThumb = userinfo.picture.thumbnail;
            });
        }
    }
})