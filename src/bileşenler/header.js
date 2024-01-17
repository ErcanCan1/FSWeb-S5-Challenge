const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  const headerDiv = document.createElement("div");
  const dateSpan = document.createElement("span");
  const tempSpan = document.createElement("span");
  const h1 = document.crea4("h1");

  headerDiv.className = "header";//classlistle classname arasında fark yok.
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");
  tempSpan.textContent = yazi
  h1.textContent = baslik;
  headerDiv.appendChild(dateSpan);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(tempSpan);

  return headerDiv;
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
}

const headerEkleyici = (secici) => {

  document.querySelector("secici").appendChild(Header("Ercan Can", "Web Develloper", "2024"))
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
}

export { Header, headerEkleyici }
