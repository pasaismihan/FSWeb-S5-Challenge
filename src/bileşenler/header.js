const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerDiv = document.createElement("div");
  const headerSpanDate = document.createElement("span");
  const headerh1 = document.createElement("h1");
  const headerSpanTemp = document.createElement("span");
  headerDiv.setAttribute("class", "header");
  headerSpanDate.setAttribute("class", "date");
  headerSpanTemp.setAttribute("class", "temp");
  headerDiv.append(headerSpanDate, headerh1, headerSpanTemp);
  headerSpanDate.textContent = tarih;
  headerh1.textContent = baslik;
  headerSpanTemp.textContent = yazi;
  return headerDiv;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const seciciQuery = document.querySelector(secici);
  return seciciQuery.append(
    Header("Teknoloji Zamanı", "26 şubat 2023", "Sola Kaydırınızzz")
  );
};

export { Header, headerEkleyici };
