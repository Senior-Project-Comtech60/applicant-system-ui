<template>
  <div>
    <nav class="navbar navbar-expand-lg  nav">
      <div class="container">
        <router-link to="/">
          <img
            src="@/assets/Sign_language_C.svg.png"
            width="40"
            height="40"
            alt=""
          />
        </router-link>
        <router-link to="/"><h2>JOBCT</h2></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <div class="mr-3 ml-3">
                <router-link to=""
                  ><H4>Home</H4>
                  <span class="sr-only">(current)</span></router-link
                >
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/PangLogin"><h4>Link</h4></router-link>
            </li>
            <li class="nav-item"></li>
          </ul>
          <router-link to="/PageLogin"
            ><img
              src="/images/user-5865.svg"
              width="35"
              height="35"
              alt=""
              title="Login"
          /></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
nav {
  background-color: rga(251, 251, 252, 255);
  box-shadow: 0px 4px 8px #00c2fdf3;
}
a {
  font-size: 20px;
}
h4 {
  color: #7f7f7f;
}
h2 {
  color: #191919;
}
</style>
