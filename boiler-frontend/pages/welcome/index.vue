<template>
    <div class="welcome-container">
      <div class="modal">
        <p class="logo">BLDR.</p>
        <p class="title">Let’s get started with your backend project.</p>
        <p class="desc">Initialise your project by letting us know the name or the nature of the project [e.g. Photobook App]</p>
        <p class="hello">Hello</p>

        
      </div>
    </div>
  </template>
  
  <script>
    export default{
    
    }
  </script>
  
  <style lang="scss" scoped>
  .welcome-container{
    display: flex;
    flex-direction: column;
    margin: auto;

    width: 100vw;
    height: 100vh;
    animation: Morph 20000ms infinite;
    background-repeat: no-repeat;
    background-size: cover;

    .modal{
      margin: auto;
      padding: 46px 50px;
      background: #191919;
      border-radius: 20px;
      border: 2px solid #27272A;

      .logo{
        color: #DCF928;
        font-weight: bolder;
        font-size: 54px;
      }

      .title{
        color: #F4F4F4;
        font-weight: bold;
        font-size: 24px;
      }

      .desc{
        color: #ABABAB;
        font-weight: 400;
        font-size: 20px;
      }

    }
  }

  @keyframes Morph {
        0%, 100% {
        background-image: url("assets/images/morph-1.png");
        }

        33% {
        background-image: url("assets/images/morph-2.png")
        }

        66% {
        background-image: url("assets/images/morph-3.png")
        }
    }

  .btn-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
  </style>