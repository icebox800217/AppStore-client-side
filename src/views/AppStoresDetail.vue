<template>
  <div class="app-stores-detail">
    <!-- <img alt="Vue logo" src="logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="containt">
        <h2>商品明細</h2>
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12 appGrp">
                <div class="appGrpBox">
                    <img src="images/appImg1.jpg">
                </div>
            </div>
            <div class="col-md-9 col-sm-6 col-xs-12">
                <h3>LINE</h3>
                <label>LINE Corporation</label><label>通訊</label>   
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">   
                        <i class="fa fa-star" style="font-size:12px"></i>   
                        <i class="fa fa-star" style="font-size:12px"></i>   
                        <i class="fa fa-star" style="font-size:12px"></i>   
                        <i class="fa fa-star" style="font-size:12px"></i>   
                        <i class="fa fa-star" style="font-size:12px"></i> 
                    </div>
                </div>
                <button class="btn btn-default">下載</button> 
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                <div id="ubea-hero"  data-section="home">
                    <div class="flexslider">
                        <ul class="slides">
                        <li>
                            <img src="images/img_bg_1.jpg"/>
                        </li>
                        <li>
                            <img src="images/img_bg_2.jpg"/>
                        </li>
                        <li>
                            <img src="images/img_bg_3.jpg"/>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
                LINE為全世界帶來了新的溝通方式，讓您無論身在何方，均能享受免費的訊息、語音通話及視訊通話功能。

                快來下載LINE，體驗它風靡全球，而且在52個國家排名第一的超方便功能吧！

                ★LINE Pay 一卡通服務正式上線：儲值、轉帳、分攤付款、全國首張連結電子支付帳戶的電子票證，並新增相機掃描身分證件功能，僅供實名驗證使用。提醒您， 為確保您的帳戶安全， 請於行動裝置安裝防護軟體。

                LINE的最新功能
                ★使用群組視訊通話，無論身處何方都能大聊特聊
                最多能同時與群組內200位好友通話！快來與好友們享受面對面視訊通話的功能吧！

                ★利用投票功能，迅速了解好友的看法
                從「哪裡見」到「吃什麼」，不用再瘋狂洗版聊天室，建立投票幫你輕鬆決定。

                LINE的主要功能
                ★隨時隨地享受免費語音通話及視訊通話
                無論身在何方，都能免費享受高品質通話。最多同時200人的國際通話也完全免費！還能使用特效與濾鏡，讓視訊通話更加歡樂（請注意，此功能在特定裝置上可能無法使用。）

                ★超方便的聊天室功能
                超方便的聊天室功能，讓您可以輕鬆分享訊息、照片、影片、貼圖、語音訊息與位置資訊給好友們。

                ★有趣又好用的社群網站功能
                無論是訊息、貼圖或照片、影片和位置資訊，透過貼文串上與好友分享您的日常時刻！

                ★全球最夯的卡通明星都在貼圖小舖
                集結了數百種人氣免費貼圖，外加全球人氣角色的可愛貼圖！從各式各樣的LINE貼圖挑選出最適合您的貼圖，讓訊息更加活靈活現！

                ★自動同步您的裝置與電腦
                無論是用手機版或電腦版，您的LINE聊天列表都會自動同步，永遠維持在最新狀態。

                ★您專屬的儲存空間：Keep
                將訊息、照片、影片等儲存至Keep，輕鬆分享給好友們。

                ★ 「LINE官方帳號」：為您帶來方便實用的資訊
                只要將官方帳號加至「好友」名單內，您就可以收到來自國內外人氣名人的訊息，或是來自企業的特惠消息、優待券。

                ★ Face Play！勝負全靠一張臉！
                表情遊戲王4ni？挑戰單打新高分，或揪好友對戰更好玩！完成任務或成為季冠軍還可獲得獎盃和裝飾品喔！

                ■我們建議您使用上網方案或連線Wi-Fi，否則將可能會產生資料傳輸費。
                ■請使用Android 4.4 以上版本的作業系統，以充分享受LINE的功能。

                **********
                如果您的網路速度太慢，或您的裝置沒有足夠的儲存空間，LINE可能無法正確安裝。

                若發生此狀況，請確認連線狀態後再試一次。
                **********
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    HelloWorld
  }
//   ,created() {
//     EventService.getEvent(this.id)
//       .then(response => {
//         this.event = response.data
//       })
//       .catch(error => {
//         console.log('There was an error:', error.response)
//       })
//   }
};
</script>
