//Modülün export edilebildiği anlamına gelir. Aynı zamanda çevre değişkenlerinin tanımlamasını gösterir.

module.exports= {
        "LOG_LEVEL":process.env.LOG_LEVEL || "debug", //LOG_LEVEL ortam değişkeninden alınıyor, yoksa "debug" kullanılıyor.
                                                      //  esnek ve güvenilir konfigürasyon this.yönetimidir.
       
                                   
                                                   
        //Connection_string kullanılır o yoksa localdeki veri tabanı adresini kullanır.                                    
        "CONNECTİON_STRİNG":process.env.CONNECTİON_STRİNG || "mongodb://localhost27017/project_base_ytb"





                                      

}