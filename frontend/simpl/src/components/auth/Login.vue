<template>
  <div id="center">
    <h1 id="title">simpl.io</h1>
    <form class="container">
      <input class="field" type="email" placeholder="email" /><br />
      <input class="field" type="password" placeholder="password" />
      <div class="container">
        <input id="login" type="submit" value="Login" />
        <input id="signup" type="submit" value="SignUp" />
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
#center {
  background-color: #283593;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  gap: 3rem;
}
input.field {
  border: 3px solid #ffffff;
  background-color: #283593;
  border-radius: 5px;
  padding: 0.5rem;
  display: inline-block;
  box-sizing: border-box;
  color: #ffffff;
}

::-webkit-input-placeholder {
  color: #ffffff;
  caret-color: #ffffff;
}

form.container {
  display: flex;
  flex-direction: column;
  gap: 0.01rem;
  width: 20vw;
}

div.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin-top: 5%;
}

#login {
  border: 3px solid #ffffff;
  background-color: #283593;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  color: #ffffff;
}

#login:hover {
  background: #ffffff;
  color: #283593;
  cursor: pointer;
}

#signup {
  border: 1px solid #283593;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 0.5rem;
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  color: #283593;
}

#signup:hover {
  background: #CFD8DC;
  color: #283593;
  cursor: pointer;
}

#title {
  font-size: 9vh;
}
</style>