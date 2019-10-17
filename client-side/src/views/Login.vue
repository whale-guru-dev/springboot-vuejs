<template>
    <div class="col-md-12">
        <div class="card card-container">
            <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card" />
            <form name="form" @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="username">Username</label>
                    <validation-provider rules="required" v-slot="{ errors }">
                    <input type="text" class="form-control" name="username" v-model="user.username"/>
                    
                    <div class="alert alert-danger" role="alert" v-if="errors[0]">
                        Username is required
                    </div>

                    </validation-provider>
                </div>

                <div class="form-group">
                    <label for="username">Password</label>
                    <validation-provider rules="required" v-slot="{ errors }">
                    <input type="password" class="form-control" name="password" v-model="user.password"/>
                    
                    <div class="alert alert-danger" role="alert" v-if="errors[0]">
                        Password is required
                    </div>

                    </validation-provider>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block" :disabled="loading">
                        <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import UserService from '../services/user.service';
import User from '../model/user';

// import { ValidationProvider, extend } from 'vee-validate';
// import { required } from 'vee-validate/dist/rules';

// extend('required', {
//   ...required,
//   message: 'The {_field_} field is required'
// });

export default {
    name: 'login',
    // components: {
    //     ValidationProvider
    // },
    data() {
        return {
            user: new User('', ''),
            loading: false,
        };
    },
    mounted() {
        if(UserService.currentUserValue) {
            this.$router.push('/profile');
        }
    },
    methods: {
        handleLogin() {
            this.loading = true;
            this.$validator.validateAll();
            if(this.errors.any()) {
                this.loading = false;
                return;
            }
            UserService.login(this.user).then(
                data => {
                    if(data) {
                        this.$router.push('/profile');
                    }
                },
                error => {
                    this.loading = false;
                    this.$store.dispatch('error', 'Username or password is not valid.')
                    this.$store.dispatch('error', error.message)
                }
            )
        }
    },
}
</script>
<style scoped>
label {
    display: block;
    margin-top: 10px;
}
.card-container.card {
    max-width: 350px !important;
    padding: 40px 40px;
}

.card {
    background-color: #f7f7f7;
    padding: 20px 25px 30px;
    margin: 0 auto 25px;
    margin-top: 50px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-box-shadow: 0px 2px 2px rgba(0,0,0,0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0,0,0,0.3);
    box-shadow: 0px 2px 2px rgba(0,0,0,0.3);
}

.profile-img-card {
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
</style>