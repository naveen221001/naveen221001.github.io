/* home section styling */
.home{
    display: flex;
    background: url("images/banner.jpg") no-repeat center;
    height: 100vh;
    color: #fff;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Ubuntu', sans-serif;
}
.home .max-width{
  width: 100%;
  display: flex;
}
.home .max-width .row{
  margin-right: 0;
}
.home .home-content .text-1{
    font-size: 27px;
}
.home .home-content .text-2{
    font-size: 50px;
    font-weight: 600;
    margin-left: -3px;
}
.home .home-content .text-3{
    font-size: 40px;
    margin: 5px 0;
}
.home .home-content .text-3 span{
    color: rgb(179, 240, 13);
    font-weight: 500;
}
.home .home-content a{
    display: inline-block;
    background: rgb(179, 240, 13);
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    font-weight: 400;
    border-radius: 6px;
    border: 2px solid rgb(179, 240, 13);
    transition: all 0.3s ease;
}
.home .home-content a:hover{
    color: rgb(179, 240, 13);
    background: none;
}
