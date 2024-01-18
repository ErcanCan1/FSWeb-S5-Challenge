import axios from "axios";

const Tablar = (konular) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konular") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konular dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  const topicsDiv = document.createElement("div");
  topicsDiv.className = "topics";

  konular.forEach(element => {
    const tab = document.createElement("div");
    tab.className= "tab";
    tab.textContent = element
    topicsDiv.appendChild(tab);
  });

  return topicsDiv;
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  const seciciEkle = document.querySelector(secici);
  axios
    .get("http://localhost:5001/api/konular")
    .then((response) => {
      seciciEkle.appendChild(Tablar(response.data.konular));
    })
}

export { Tablar, tabEkleyici }
