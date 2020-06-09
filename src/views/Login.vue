<template>
  <div class="login">
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formInline')">Sign in</Button>
      </FormItem>
    </Form>
    <br />
    <br />
    <br />
    <br />
    <a href="https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/672731/#outline__1_1">權限管理詳情參考</a>
    <img src="../assets/auth.png" style="width:100px;" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit: function(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.$router.push({ name: "Admin" });
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px 500px;
}

button {
  width: 100%;
  background-color: rgb(83, 90, 108);
  border: rgb(83, 90, 108);
}

button:hover {
  background-color: rgba(83, 90, 108, 0.5);
  border: rgba(83, 90, 108, 0.5);
}
img:hover {
  transform: scale(3, 3);
  transition: all 0.3s ease 0s;
}
img {
  transform: scale(1, 1);
  transition: all 0.5s ease-out;
}
</style>