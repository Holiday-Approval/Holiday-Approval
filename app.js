// app.js
App({
  appData:{
    stu_name:null,
    class:null,
    sno:null,
    passWord:null,
    academy:null,
    phone:null,
    userinfo:null,
    people:"student",
    tch_type:null,
    tch_name:null,
    },
    onLaunch: function(){
        if(!wx.cloud){
            console.error('使用更高的基础库')
        }else{
            wx.cloud.init({
                env:'cloud1-3g2hjwqc511b3694',
                traceUser:true,
            })
        }
        this.globalData={}
    }
})

  
  

