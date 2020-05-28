<template>
    <div>
        <v-row
          align="center"
          justify="center"
          class="login-tm"
        >
          <v-col
            cols="12"
          >
            <v-card class="elevation-12 ma-auto" max-width="400">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>ورود</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        required
                        filled
                        clearable
                        label="آدرس ایمیل"
                        type="text"
                        append-icon="person"
                    ></v-text-field>

                    <v-text-field
                        label="رمز عبور"
                        v-model="password"
                        min="6"
                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                        @click:append="() => (e1 = !e1)"
                        :type="e1 ? 'text' : 'password'"
                        :rules="passwordRules"
                        counter
                        required
                        filled
                    ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">ورود</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data: ()=>({
        email: "",
        password: "",
        valid: false,
        e1: false,
        passwordRules: [
            v => !!v || 'لطفا رمز عبور را وارد نمایید!',
            v => (v && v.length >= 6) || 'حداقل تعداد کاراکتر 6 میباشد!',
            v => (v && v.length <= 20) || 'حداکثر تعداد کاراکتر 20 میباشد!',
            v => /(?=.*[a-z])/.test(v) || 'شامل حداقل یک حرف کوچک باشد',
            v => /(?=.*[A-Z])/.test(v) || 'شامل حداقل یک حرف بزرگ باشد',
            v => /(?=.*[0-9])/.test(v) || 'شامل حداقل یک رقم باشد',
            v => /(?=.*[$@#!^&*%])/.test(v) || 'شامل حداقل یک کاراکتر خاص باشد',
        ],
        emailRules: [
            v => !!v || 'لطفا ایمیل را وارد نمایید!',
            v => (v && v.length <= 30) || 'حداکثر تعداد کاراکتر 30 میباشد!',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) || 'ایمیل نامعتبر است!'
        ],
    }),
    methods: {
        login: function () {
            //
        }
    }
}
</script>
<style scoped>
.login-tm {
    margin-top: 50px;
}
</style>